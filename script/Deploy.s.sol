// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Script.sol";
import "../contracts/LeaseRegistry.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        console.log("Deploying with address:", deployer);
        console.log("Balance:", deployer.balance);

        vm.startBroadcast(deployerPrivateKey);

        address treasury = deployer;
        LeaseRegistry registry = new LeaseRegistry(deployer, treasury);

        console.log("LeaseRegistry deployed at:", address(registry));
        console.log("Admin:", deployer);
        console.log("Treasury:", treasury);

        vm.stopBroadcast();
    }
}
