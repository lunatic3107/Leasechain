// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../contracts/LeaseRegistry.sol";

contract LeaseRegistryTest is Test {
    LeaseRegistry public registry;

    address public admin = address(1);
    address public notary1 = address(2);
    address public notary2 = address(3);
    address public resolver = address(4);
    address public treasury = address(5);
    address public tenant = address(6);
    address public challenger = address(7);

    bytes32 public constant LAND1 = keccak256("LAND-001");
    bytes32 public constant LAND2 = keccak256("LAND-002");
    bytes32 public constant LAND3 = keccak256("LAND-003");
    bytes32 public constant DOC_HASH = keccak256("document-hash");
    bytes32 public constant EVIDENCE_HASH = keccak256("evidence");

    uint64 public constant LEASE_DURATION = 365 days;

    function setUp() public {
        vm.deal(challenger, 10 ether);

        registry = new LeaseRegistry(admin, treasury);

        vm.startPrank(admin);
        registry.grantRole(registry.NOTARY(), notary1);
        registry.grantRole(registry.NOTARY(), notary2);
        registry.grantRole(registry.RESOLVER(), resolver);
        vm.stopPrank();
    }

    function testHappyPath() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        (LeaseRegistry.Status status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.PendingFinalization));

        vm.warp(block.timestamp + 121);
        registry.finalize(LAND1);

        (status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.Leased));

        vm.warp(block.timestamp + LEASE_DURATION);
        registry.expire(LAND1);

        (status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.Expired));
    }

    function testDoubleLease() public {
        vm.startPrank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.expectRevert(LeaseRegistry.NotAvailable.selector);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);
        vm.stopPrank();
    }

    function testUnauthorizedCaller() public {
        vm.expectRevert();
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);
    }

    function testCancelByNotary() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.prank(notary1);
        registry.cancel(LAND1);

        (LeaseRegistry.Status status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.Cancelled));
    }

    function testCancelByWrongNotary() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.prank(notary2);
        vm.expectRevert(LeaseRegistry.Unauthorized.selector);
        registry.cancel(LAND1);
    }

    function testChallengeInsufficientBond() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.prank(challenger);
        vm.expectRevert(LeaseRegistry.InsufficientBond.selector);
        registry.challenge{value: 0.005 ether}(LAND1, EVIDENCE_HASH);
    }

    function testChallengeAfterDeadline() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.warp(block.timestamp + 121);

        vm.prank(challenger);
        vm.expectRevert(LeaseRegistry.ChallengeWindowExpired.selector);
        registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);
    }

    function testChallengeUpheld() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.prank(challenger);
        registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);

        (LeaseRegistry.Status status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.Disputed));

        vm.prank(resolver);
        registry.resolve(LAND1, true);

        (status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.Cancelled));

        assertEq(registry.pendingWithdrawals(challenger), 0.01 ether);

        vm.prank(challenger);
        registry.withdraw();
        assertEq(challenger.balance, 10 ether);
    }

    function testChallengeDismissed() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        (,,,, uint64 endTime, uint64 originalDeadline,,) = registry.getLand(LAND1);

        vm.prank(challenger);
        registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);

        vm.prank(resolver);
        registry.resolve(LAND1, false);

        (LeaseRegistry.Status status,,,, uint64 endTimeAfter, uint64 deadlineAfter,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.PendingFinalization));
        assertEq(endTimeAfter, endTime);
        assertEq(deadlineAfter, originalDeadline);

        assertEq(registry.pendingWithdrawals(treasury), 0.01 ether);
    }

    function testChallengeCap() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        for (uint i = 0; i < 3; i++) {
            vm.prank(challenger);
            registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);

            vm.prank(resolver);
            registry.resolve(LAND1, false);
        }

        vm.prank(challenger);
        vm.expectRevert(LeaseRegistry.MaxChallengesReached.selector);
        registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);
    }

    function testFinalizeTooEarly() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.expectRevert(LeaseRegistry.ChallengeWindowNotExpired.selector);
        registry.finalize(LAND1);
    }

    function testExpireTooEarly() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.warp(block.timestamp + 121);
        registry.finalize(LAND1);

        vm.expectRevert(LeaseRegistry.ChallengeWindowNotExpired.selector);
        registry.expire(LAND1);
    }

    function testNotaryStats() public {
        vm.startPrank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);
        registry.registerLease(LAND2, tenant, LEASE_DURATION, DOC_HASH);
        vm.stopPrank();

        vm.prank(challenger);
        registry.challenge{value: 0.01 ether}(LAND1, EVIDENCE_HASH);

        vm.prank(resolver);
        registry.resolve(LAND1, true);

        (uint256 totalLeases, uint256 totalDisputed, uint256 totalCancelled) = registry.notaryStats(notary1);
        assertEq(totalLeases, 2);
        assertEq(totalDisputed, 1);
        assertEq(totalCancelled, 1);
    }

    function testSetChallengeWindow() public {
        vm.prank(admin);
        registry.setChallengeWindow(300);
        assertEq(registry.challengeWindow(), 300);
    }

    function testSetBond() public {
        vm.prank(admin);
        registry.setBond(0.05 ether);
        assertEq(registry.bond(), 0.05 ether);
    }

    function testReregisterCancelledLand() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.prank(notary1);
        registry.cancel(LAND1);

        vm.prank(notary2);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        (LeaseRegistry.Status status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.PendingFinalization));
    }

    function testReregisterExpiredLand() public {
        vm.prank(notary1);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        vm.warp(block.timestamp + 121);
        registry.finalize(LAND1);

        vm.warp(block.timestamp + LEASE_DURATION);
        registry.expire(LAND1);

        vm.prank(notary2);
        registry.registerLease(LAND1, tenant, LEASE_DURATION, DOC_HASH);

        (LeaseRegistry.Status status,,,,,,,) = registry.getLand(LAND1);
        assertEq(uint8(status), uint8(LeaseRegistry.Status.PendingFinalization));
    }
}
