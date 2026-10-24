import type { Land, NotaryStats, LeaseEvent, Challenge } from './types';

// Mock wallet addresses
export const MOCK_NOTARY_CLEAN = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb';
export const MOCK_NOTARY_SUSPICIOUS = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
export const MOCK_TENANT_1 = '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b';
export const MOCK_TENANT_2 = '0x9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e';
export const MOCK_CHALLENGER = '0x5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b';
export const MOCK_RESOLVER = '0x3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d';

// Current time for demo (making countdown visible)
const NOW = Date.now();
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

// Mock lands data
export const mockLands: Land[] = [
  {
    landId: 'LAND-001',
    status: 'PendingFinalization',
    tenant: MOCK_TENANT_1,
    notary: MOCK_NOTARY_CLEAN,
    startTime: NOW - 5 * 60 * 1000, // 5 minutes ago
    endTime: NOW + 365 * DAY,
    challengeDeadline: NOW + 115 * 1000, // 1 minute 55 seconds from now (demo friendly)
    docHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
    challengeCount: 0,
  },
  {
    landId: 'LAND-002',
    status: 'Leased',
    tenant: MOCK_TENANT_1,
    notary: MOCK_NOTARY_CLEAN,
    startTime: NOW - 30 * DAY,
    endTime: NOW + 335 * DAY,
    challengeDeadline: null,
    docHash: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
    challengeCount: 0,
  },
  {
    landId: 'LAND-003',
    status: 'Disputed',
    tenant: MOCK_TENANT_2,
    notary: MOCK_NOTARY_SUSPICIOUS,
    startTime: NOW - 2 * DAY,
    endTime: NOW + 363 * DAY,
    challengeDeadline: NOW + 5 * DAY,
    docHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
    challengeCount: 1,
  },
  {
    landId: 'LAND-004',
    status: 'Available',
    tenant: null,
    notary: null,
    startTime: null,
    endTime: null,
    challengeDeadline: null,
    docHash: null,
    challengeCount: 0,
  },
  {
    landId: 'LAND-005',
    status: 'Expired',
    tenant: MOCK_TENANT_1,
    notary: MOCK_NOTARY_SUSPICIOUS,
    startTime: NOW - 400 * DAY,
    endTime: NOW - 35 * DAY,
    challengeDeadline: null,
    docHash: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
    challengeCount: 2,
  },
  {
    landId: 'LAND-006',
    status: 'Cancelled',
    tenant: MOCK_TENANT_2,
    notary: MOCK_NOTARY_SUSPICIOUS,
    startTime: NOW - 10 * DAY,
    endTime: NOW + 355 * DAY,
    challengeDeadline: null,
    docHash: '0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a',
    challengeCount: 1,
  },
];

// Mock notary stats
export const mockNotaryStats: NotaryStats[] = [
  {
    address: MOCK_NOTARY_CLEAN,
    totalLeases: 12,
    totalDisputed: 1,
    totalCancelled: 0,
  },
  {
    address: MOCK_NOTARY_SUSPICIOUS,
    totalLeases: 8,
    totalDisputed: 5,
    totalCancelled: 3,
  },
];

// Mock events
export const mockEvents: LeaseEvent[] = [
  {
    type: 'LeaseRegistered',
    landId: 'LAND-001',
    actor: MOCK_NOTARY_CLEAN,
    timestamp: NOW - 5 * 60 * 1000,
    metadata: { tenant: MOCK_TENANT_1 },
  },
  {
    type: 'LeaseFinalized',
    landId: 'LAND-002',
    actor: MOCK_NOTARY_CLEAN,
    timestamp: NOW - 23 * DAY,
  },
  {
    type: 'LeaseRegistered',
    landId: 'LAND-002',
    actor: MOCK_NOTARY_CLEAN,
    timestamp: NOW - 30 * DAY,
    metadata: { tenant: MOCK_TENANT_1 },
  },
  {
    type: 'LeaseChallenged',
    landId: 'LAND-003',
    actor: MOCK_CHALLENGER,
    timestamp: NOW - 1 * DAY,
  },
  {
    type: 'LeaseRegistered',
    landId: 'LAND-003',
    actor: MOCK_NOTARY_SUSPICIOUS,
    timestamp: NOW - 2 * DAY,
    metadata: { tenant: MOCK_TENANT_2 },
  },
  {
    type: 'LeaseExpired',
    landId: 'LAND-005',
    actor: '0x0000000000000000000000000000000000000000',
    timestamp: NOW - 35 * DAY,
  },
  {
    type: 'LeaseCancelled',
    landId: 'LAND-006',
    actor: MOCK_NOTARY_SUSPICIOUS,
    timestamp: NOW - 8 * DAY,
  },
];

// Challenge window and bond parameters
export const MOCK_CHALLENGE_WINDOW = 120; // 2 minutes for demo
export const MOCK_BOND = '0.1'; // MON
