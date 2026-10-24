import { readContract } from '@wagmi/core';
import { config } from '../wagmi';
import { CONTRACT_ADDRESS } from '../config';
import type { Land, NotaryStats, LeaseEvent, LeaseStatus } from './types';
import ABI from '../LeaseRegistry.abi.json';
import { keccak256, toHex } from 'viem';

// Helper: Convert contract status enum to our type
function mapStatus(statusNum: number): LeaseStatus {
  const statusMap: Record<number, LeaseStatus> = {
    0: 'Available',
    1: 'PendingFinalization',
    2: 'Leased',
    3: 'Disputed',
    4: 'Cancelled',
    5: 'Expired',
  };
  return statusMap[statusNum] || 'Available';
}

// Helper: Generate landId hash from code
export function getLandIdHash(landCode: string): `0x${string}` {
  return keccak256(toHex(landCode));
}

// Blockchain data provider implementation
export class ChainDataProvider {
  async getLand(landCode: string): Promise<Land | null> {
    try {
      const landId = getLandIdHash(landCode);
      
      const result = await readContract(config, {
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'getLand',
        args: [landId],
      }) as [number, string, string, bigint, bigint, bigint, string, number];

      const [status, tenant, notary, startTime, endTime, challengeDeadline, docHash, challengeCount] = result;

      // If status is Available and no data, land doesn't exist yet
      if (status === 0 && tenant === '0x0000000000000000000000000000000000000000') {
        return {
          landId: landCode,
          status: 'Available',
          tenant: null,
          notary: null,
          startTime: null,
          endTime: null,
          challengeDeadline: null,
          docHash: null,
          challengeCount: 0,
        };
      }

      return {
        landId: landCode,
        status: mapStatus(status),
        tenant: tenant === '0x0000000000000000000000000000000000000000' ? null : tenant,
        notary: notary === '0x0000000000000000000000000000000000000000' ? null : notary,
        startTime: startTime > 0n ? Number(startTime) * 1000 : null,
        endTime: endTime > 0n ? Number(endTime) * 1000 : null,
        challengeDeadline: challengeDeadline > 0n ? Number(challengeDeadline) * 1000 : null,
        docHash: docHash === '0x0000000000000000000000000000000000000000000000000000000000000000' ? null : docHash,
        challengeCount,
      };
    } catch (error) {
      console.error('Error fetching land:', error);
      return null;
    }
  }

  async getAllLands(): Promise<Land[]> {
    // Since contract doesn't have a function to list all lands, 
    // we'll check the known demo lands
    const demoLands = ['LAND-001', 'LAND-002', 'LAND-003', 'LAND-004', 'LAND-005', 'LAND-006'];
    const lands = await Promise.all(
      demoLands.map(code => this.getLand(code))
    );
    return lands.filter((land): land is Land => land !== null);
  }

  async getNotaryStats(address: string): Promise<NotaryStats | null> {
    try {
      const result = await readContract(config, {
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'notaryStats',
        args: [address as `0x${string}`],
      }) as [bigint, bigint, bigint];

      const [totalLeases, totalDisputed, totalCancelled] = result;

      return {
        address,
        totalLeases: Number(totalLeases),
        totalDisputed: Number(totalDisputed),
        totalCancelled: Number(totalCancelled),
      };
    } catch (error) {
      console.error('Error fetching notary stats:', error);
      return null;
    }
  }

  async getAllNotaryStats(): Promise<NotaryStats[]> {
    // Check stats for known demo notaries
    const demoNotaries = [
      '0xb6b140a62D22A5e5f5f96A03F433163eC514AbBb',
      '0xA06A9CB9f5e78056236Cca7EE551fbCB1a90a72A',
    ];
    
    const stats = await Promise.all(
      demoNotaries.map(addr => this.getNotaryStats(addr))
    );
    
    return stats.filter((stat): stat is NotaryStats => 
      stat !== null && stat.totalLeases > 0
    );
  }

  async getEventsForLand(landId: string): Promise<LeaseEvent[]> {
    // Events would require eth_getLogs or subgraph
    // For hackathon, return empty array (events will show after transactions)
    return [];
  }

  async getEventsForNotary(address: string): Promise<LeaseEvent[]> {
    // Events would require eth_getLogs or subgraph
    return [];
  }

  async getChallengeWindow(): Promise<number> {
    try {
      const result = await readContract(config, {
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'challengeWindow',
      }) as bigint;
      
      return Number(result);
    } catch (error) {
      console.error('Error fetching challenge window:', error);
      return 120; // fallback
    }
  }

  async getBond(): Promise<string> {
    try {
      const result = await readContract(config, {
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'bond',
      }) as bigint;
      
      // Convert from wei to ETH
      return (Number(result) / 1e18).toString();
    } catch (error) {
      console.error('Error fetching bond:', error);
      return '0.01'; // fallback
    }
  }
}
