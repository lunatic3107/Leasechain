import React from 'react';
import type { LeaseEvent } from '@/lib/data/types';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  FileCheck, 
  XCircle, 
  CalendarX 
} from 'lucide-react';
import { AddressDisplay } from './AddressDisplay';

interface TimelineProps {
  events: LeaseEvent[];
}

const eventConfig: Record<LeaseEvent['type'], { 
  label: string; 
  icon: React.ReactNode; 
  color: string;
}> = {
  LeaseRegistered: {
    label: 'Sewa Didaftarkan',
    icon: <FileText />,
    color: 'text-primary',
  },
  LeaseChallenged: {
    label: 'Keberatan Diajukan',
    icon: <AlertTriangle />,
    color: 'text-danger',
  },
  DisputeResolved: {
    label: 'Sengketa Diputuskan',
    icon: <CheckCircle />,
    color: 'text-success',
  },
  LeaseFinalized: {
    label: 'Sewa Difinalisasi',
    icon: <FileCheck />,
    color: 'text-success',
  },
  LeaseCancelled: {
    label: 'Sewa Dibatalkan',
    icon: <XCircle />,
    color: 'text-gray-600',
  },
  LeaseExpired: {
    label: 'Sewa Berakhir',
    icon: <CalendarX />,
    color: 'text-gray-400',
  },
};

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function Timeline({ events }: TimelineProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Belum ada riwayat
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event, idx) => {
        const config = eventConfig[event.type];
        
        return (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`p-2 rounded-full bg-white border-2 ${config.color} border-current`}>
                {React.cloneElement(config.icon as React.ReactElement, { 
                  size: 20 
                })}
              </div>
              {idx < events.length - 1 && (
                <div className="flex-1 w-0.5 bg-gray-200 min-h-[24px] my-1" />
              )}
            </div>
            
            <div className="flex-1 pb-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className={`font-semibold ${config.color}`}>
                  {config.label}
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  {formatDate(event.timestamp)}
                </div>
              </div>
              
              <AddressDisplay address={event.actor} label="Oleh" />
              
              {event.metadata && (
                <div className="mt-2 text-sm text-gray-600">
                  {event.metadata.tenant && (
                    <div>Penyewa: <code className="font-mono text-xs">{event.metadata.tenant}</code></div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
