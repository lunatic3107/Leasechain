import type { Land, NotaryStats, LeaseEvent } from './types';
import { 
  mockLands, 
  mockNotaryStats, 
  mockEvents,
  MOCK_CHALLENGE_WINDOW,
  MOCK_BOND 
} from './mockData';
import { ChainDataProvider } from './chainDataProvider';

// Data provider interface that will be swapped for real chain data later
export interface DataProvider {
  getLand(landId: string): Promise<Land | null>;
  getAllLands(): Promise<Land[]>;
  getNotaryStats(address: string): Promise<NotaryStats | null>;
  getAllNotaryStats(): Promise<NotaryStats[]>;
  getEventsForLand(landId: string): Promise<LeaseEvent[]>;
  getEventsForNotary(address: string): Promise<LeaseEvent[]>;
  getChallengeWindow(): Promise<number>;
  getBond(): Promise<string>;
}

// Mock implementation
class MockDataProvider implements DataProvider {
  async getLand(landId: string): Promise<Land | null> {
    await this.simulateDelay();
    return mockLands.find(l => l.landId === landId) || null;
  }

  async getAllLands(): Promise<Land[]> {
    await this.simulateDelay();
    return [...mockLands];
  }

  async getNotaryStats(address: string): Promise<NotaryStats | null> {
    await this.simulateDelay();
    return mockNotaryStats.find(n => n.address.toLowerCase() === address.toLowerCase()) || null;
  }

  async getAllNotaryStats(): Promise<NotaryStats[]> {
    await this.simulateDelay();
    return [...mockNotaryStats];
  }

  async getEventsForLand(landId: string): Promise<LeaseEvent[]> {
    await this.simulateDelay();
    return mockEvents
      .filter(e => e.landId === landId)
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  async getEventsForNotary(address: string): Promise<LeaseEvent[]> {
    await this.simulateDelay();
    return mockEvents
      .filter(e => e.actor.toLowerCase() === address.toLowerCase())
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  async getChallengeWindow(): Promise<number> {
    await this.simulateDelay();
    return MOCK_CHALLENGE_WINDOW;
  }

  async getBond(): Promise<string> {
    await this.simulateDelay();
    return MOCK_BOND;
  }

  private simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));
  }
}

// Switch between mock and chain data
// Set USE_CHAIN_DATA=true in environment or toggle here
const USE_CHAIN_DATA = import.meta.env.VITE_USE_CHAIN_DATA === 'true';

// Export singleton instance
export const dataProvider: DataProvider = USE_CHAIN_DATA 
  ? new ChainDataProvider() 
  : new MockDataProvider();
