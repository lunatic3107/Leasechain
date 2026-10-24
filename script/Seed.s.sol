// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Script.sol";
import "../contracts/LeaseRegistry.sol";

contract SeedScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address registry_address = vm.envAddress("REGISTRY_ADDRESS");

        address notary1 = vm.envAddress("NOTARY1_ADDRESS");
        address notary2 = vm.envAddress("NOTARY2_ADDRESS");
        address resolver = vm.envAddress("RESOLVER_ADDRESS");

        LeaseRegistry registry = LeaseRegistry(registry_address);

        vm.startBroadcast(deployerPrivateKey);

        console.log("Granting roles...");
        registry.grantRole(registry.NOTARY(), notary1);
        registry.grantRole(registry.NOTARY(), notary2);
        registry.grantRole(registry.RESOLVER(), resolver);

        console.log("Setting demo parameters...");
        registry.setChallengeWindow(120);
        registry.setBond(0.01 ether);

        console.log("Seed completed:");
        console.log("- Notary 1:", notary1);
        console.log("- Notary 2:", notary2);
        console.log("- Resolver:", resolver);
        console.log("- Challenge window: 120 seconds");
        console.log("- Bond: 0.01 ETH");

        vm.stopBroadcast();
    }
}
