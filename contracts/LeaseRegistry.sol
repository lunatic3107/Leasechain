// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract LeaseRegistry is AccessControl, ReentrancyGuard {
    bytes32 public constant NOTARY = keccak256("NOTARY");
    bytes32 public constant RESOLVER = keccak256("RESOLVER");
    uint8 public constant MAX_CHALLENGES = 3;

    enum Status {
        Available,
        PendingFinalization,
        Leased,
        Disputed,
        Cancelled,
        Expired
    }

    struct Land {
        Status status;
        address tenant;
        address notary;
        uint64 startTime;
        uint64 endTime;
        uint64 challengeDeadline;
        bytes32 docHash;
        uint8 challengeCount;
        address challenger;
        uint256 challengeBond;
    }

    struct NotaryStats {
        uint256 totalLeases;
        uint256 totalDisputed;
        uint256 totalCancelled;
    }

    mapping(bytes32 => Land) private lands;
    mapping(address => NotaryStats) private _notaryStats;
    mapping(address => uint256) public pendingWithdrawals;

    uint64 public challengeWindow = 120;
    uint256 public bond = 0.01 ether;
    address public treasury;

    error NotAvailable();
    error Unauthorized();
    error InvalidStatus();
    error InsufficientBond();
    error ChallengeWindowExpired();
    error ChallengeWindowNotExpired();
    error MaxChallengesReached();
    error WithdrawalFailed();

    event LeaseRegistered(
        bytes32 indexed landId,
        address indexed notary,
        address tenant,
        uint64 endTime,
        bytes32 docHash
    );
    event LeaseChallenged(bytes32 indexed landId, address indexed challenger, bytes32 evidenceHash);
    event DisputeResolved(bytes32 indexed landId, address indexed resolver, bool upheld);
    event LeaseFinalized(bytes32 indexed landId);
    event LeaseCancelled(bytes32 indexed landId, address indexed by);
    event LeaseExpired(bytes32 indexed landId);

    constructor(address admin, address _treasury) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        treasury = _treasury;
    }

    function registerLease(
        bytes32 landId,
        address tenant,
        uint64 durationSeconds,
        bytes32 docHash
    ) external onlyRole(NOTARY) {
        Land storage land = lands[landId];
        if (
            land.status != Status.Available &&
            land.status != Status.Cancelled &&
            land.status != Status.Expired
        ) revert NotAvailable();

        land.status = Status.PendingFinalization;
        land.tenant = tenant;
        land.notary = msg.sender;
        land.startTime = uint64(block.timestamp);
        land.endTime = uint64(block.timestamp) + durationSeconds;
        land.challengeDeadline = uint64(block.timestamp) + challengeWindow;
        land.docHash = docHash;
        land.challengeCount = 0;
        land.challenger = address(0);
        land.challengeBond = 0;

        _notaryStats[msg.sender].totalLeases++;

        emit LeaseRegistered(landId, msg.sender, tenant, land.endTime, docHash);
    }

    function cancel(bytes32 landId) external {
        Land storage land = lands[landId];
        if (land.status != Status.PendingFinalization) revert InvalidStatus();
        if (land.notary != msg.sender) revert Unauthorized();

        land.status = Status.Cancelled;
        _notaryStats[msg.sender].totalCancelled++;

        emit LeaseCancelled(landId, msg.sender);
    }

    function challenge(bytes32 landId, bytes32 evidenceHash) external payable {
        Land storage land = lands[landId];
        if (land.status != Status.PendingFinalization) revert InvalidStatus();
        if (block.timestamp >= land.challengeDeadline) revert ChallengeWindowExpired();
        if (msg.value < bond) revert InsufficientBond();
        if (land.challengeCount >= MAX_CHALLENGES) revert MaxChallengesReached();

        land.status = Status.Disputed;
        land.challenger = msg.sender;
        land.challengeBond = msg.value;
        land.challengeCount++;

        _notaryStats[land.notary].totalDisputed++;

        emit LeaseChallenged(landId, msg.sender, evidenceHash);
    }

    function resolve(bytes32 landId, bool upheld) external onlyRole(RESOLVER) nonReentrant {
        Land storage land = lands[landId];
        if (land.status != Status.Disputed) revert InvalidStatus();

        if (upheld) {
            land.status = Status.Cancelled;
            _notaryStats[land.notary].totalCancelled++;
            pendingWithdrawals[land.challenger] += land.challengeBond;
        } else {
            land.status = Status.PendingFinalization;
            pendingWithdrawals[treasury] += land.challengeBond;
        }

        land.challenger = address(0);
        land.challengeBond = 0;

        emit DisputeResolved(landId, msg.sender, upheld);
    }

    function finalize(bytes32 landId) external {
        Land storage land = lands[landId];
        if (land.status != Status.PendingFinalization) revert InvalidStatus();
        if (block.timestamp < land.challengeDeadline) revert ChallengeWindowNotExpired();

        land.status = Status.Leased;

        emit LeaseFinalized(landId);
    }

    function expire(bytes32 landId) external {
        Land storage land = lands[landId];
        if (land.status != Status.Leased) revert InvalidStatus();
        if (block.timestamp < land.endTime) revert ChallengeWindowNotExpired();

        land.status = Status.Expired;

        emit LeaseExpired(landId);
    }

    function withdraw() external nonReentrant {
        uint256 amount = pendingWithdrawals[msg.sender];
        if (amount == 0) return;

        pendingWithdrawals[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) revert WithdrawalFailed();
    }

    function setChallengeWindow(uint64 _challengeWindow) external onlyRole(DEFAULT_ADMIN_ROLE) {
        challengeWindow = _challengeWindow;
    }

    function setBond(uint256 _bond) external onlyRole(DEFAULT_ADMIN_ROLE) {
        bond = _bond;
    }

    function getLand(bytes32 landId)
        external
        view
        returns (
            Status status,
            address tenant,
            address notary,
            uint64 startTime,
            uint64 endTime,
            uint64 challengeDeadline,
            bytes32 docHash,
            uint8 challengeCount
        )
    {
        Land storage land = lands[landId];
        return (
            land.status,
            land.tenant,
            land.notary,
            land.startTime,
            land.endTime,
            land.challengeDeadline,
            land.docHash,
            land.challengeCount
        );
    }

    function notaryStats(address notary)
        external
        view
        returns (uint256 totalLeases, uint256 totalDisputed, uint256 totalCancelled)
    {
        NotaryStats storage stats = _notaryStats[notary];
        return (stats.totalLeases, stats.totalDisputed, stats.totalCancelled);
    }
}
