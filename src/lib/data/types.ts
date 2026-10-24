// Core data types for LeaseChain
// Contract status enum: 0=Available, 1=PendingFinalization, 2=Leased, 3=Disputed, 4=Cancelled, 5=Expired

export type LeaseStatus = 
  | 'Available' 
  | 'PendingFinalization' 
  | 'Leased' 
  | 'Disputed' 
  | 'Cancelled' 
  | 'Expired';

export interface Land {
  landId: string;
  status: LeaseStatus;
  tenant: string | null;
  notary: string | null;
  startTime: number | null; // Unix timestamp
  endTime: number | null; // Unix timestamp
  challengeDeadline: number | null; // Unix timestamp
  docHash: string | null;
  challengeCount: number;
}

export interface NotaryStats {
  address: string;
  totalLeases: number;
  totalDisputed: number;
  totalCancelled: number;
}

export type EventType = 
  | 'LeaseRegistered' 
  | 'LeaseChallenged' 
  | 'DisputeResolved' 
  | 'LeaseFinalized' 
  | 'LeaseCancelled' 
  | 'LeaseExpired';

export interface LeaseEvent {
  type: EventType;
  landId: string;
  actor: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface Challenge {
  landId: string;
  challenger: string;
  evidenceHash: string;
  timestamp: number;
  bond: string;
}
