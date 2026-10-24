import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface CountdownTimerProps {
  deadline: number; // Unix timestamp
  onExpire?: () => void;
}

export function CountdownTimer({ deadline, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(deadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = deadline - Date.now();
      setTimeLeft(remaining);
      
      if (remaining <= 0 && onExpire) {
        onExpire();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline, onExpire]);

  if (timeLeft <= 0) {
    return (
      <div className="flex items-center gap-3 p-6 bg-danger/10 border-2 border-danger/30 rounded-xl">
        <AlertCircle className="text-danger flex-shrink-0" size={32} />
        <div>
          <div className="text-danger font-bold text-xl">Masa Keberatan Habis</div>
          <div className="text-danger/80 text-sm mt-1">Dapat difinalisasi sekarang</div>
        </div>
      </div>
    );
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const isUrgent = timeLeft < 5 * 60 * 1000; // Less than 5 minutes

  return (
    <div className={`
      flex items-center gap-4 p-6 rounded-xl border-2 transition-colors
      ${isUrgent 
        ? 'bg-danger/10 border-danger/30 animate-pulse' 
        : 'bg-warning/10 border-warning/30'
      }
    `}>
      <Clock 
        className={isUrgent ? 'text-danger' : 'text-warning'} 
        size={32} 
      />
      <div className="flex-1">
        <div className={`font-bold text-sm mb-1 ${isUrgent ? 'text-danger' : 'text-warning'}`}>
          Masa Keberatan Berakhir Dalam:
        </div>
        <div className="flex gap-2 items-baseline">
          {days > 0 && (
            <div className="text-center">
              <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>
                {days}
              </div>
              <div className="text-xs text-gray-600">hari</div>
            </div>
          )}
          <div className="text-center">
            <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>
              {hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600">jam</div>
          </div>
          <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>:</div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>
              {minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600">menit</div>
          </div>
          <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>:</div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${isUrgent ? 'text-danger' : 'text-warning'}`}>
              {seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600">detik</div>
          </div>
        </div>
      </div>
    </div>
  );
}
