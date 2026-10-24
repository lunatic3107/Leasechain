import React from 'react';
import type { LeaseStatus } from '@/lib/data/types';
import { 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  AlertTriangle, 
  XCircle, 
  CalendarX 
} from 'lucide-react';

interface StatusBadgeProps {
  status: LeaseStatus;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<LeaseStatus, { 
  label: string; 
  color: string; 
  bgColor: string; 
  icon: React.ReactNode;
}> = {
  Available: {
    label: 'Tersedia',
    color: 'text-success',
    bgColor: 'bg-success/10',
    icon: <CheckCircle2 />,
  },
  PendingFinalization: {
    label: 'Menunggu Finalisasi',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    icon: <Clock />,
  },
  Leased: {
    label: 'Disewa',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    icon: <FileCheck />,
  },
  Disputed: {
    label: 'Sengketa',
    color: 'text-danger',
    bgColor: 'bg-danger/10',
    icon: <AlertTriangle />,
  },
  Cancelled: {
    label: 'Dibatalkan',
    color: 'text-gray-500',
    bgColor: 'bg-gray-100',
    icon: <XCircle />,
  },
  Expired: {
    label: 'Berakhir',
    color: 'text-gray-400',
    bgColor: 'bg-gray-50',
    icon: <CalendarX />,
  },
};

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-2xl px-6 py-4',
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 32,
  };

  return (
    <div 
      className={`
        inline-flex items-center gap-2 rounded-full font-semibold
        ${config.color} ${config.bgColor} ${sizeClasses[size]}
      `}
    >
      {React.cloneElement(config.icon as React.ReactElement, { 
        size: iconSizes[size],
        className: 'flex-shrink-0'
      })}
      <span>{config.label}</span>
    </div>
  );
}
