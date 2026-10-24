import React, { useEffect, useState } from 'react';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import { dataProvider } from '@/lib/data/dataProvider';
import type { NotaryStats } from '@/lib/data/types';
import { AddressDisplay } from '@/components/AddressDisplay';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState';

export function NotaryAuditPage() {
  const [notaries, setNotaries] = useState<NotaryStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotaries();
  }, []);

  const loadNotaries = async () => {
    try {
      const data = await dataProvider.getAllNotaryStats();
      setNotaries(data);
    } finally {
      setLoading(false);
    }
  };

  const calculateDisputeRatio = (stats: NotaryStats): number => {
    if (stats.totalLeases === 0) return 0;
    return (stats.totalDisputed / stats.totalLeases) * 100;
  };

  const isSuspicious = (stats: NotaryStats): boolean => {
    const disputeRatio = calculateDisputeRatio(stats);
    const cancellationRatio = stats.totalLeases > 0 
      ? (stats.totalCancelled / stats.totalLeases) * 100 
      : 0;
    
    return disputeRatio > 40 || cancellationRatio > 25;
  };

  if (loading) {
    return (
      <div className="page-container">
        <LoadingSpinner message="Memuat data notaris..." />
      </div>
    );
  }

  if (notaries.length === 0) {
    return (
      <div className="page-container">
        <EmptyState
          type="no-data"
          title="Belum Ada Data Notaris"
          description="Data notaris akan muncul setelah ada pendaftaran sewa"
        />
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">
          Audit Trail Notaris
        </h1>
        <p className="text-gray-600">
          Rekam jejak publik setiap notaris yang terdaftar di sistem
        </p>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Notaris
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Total Sewa
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Sengketa
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Dibatalkan
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Rasio Sengketa
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {notaries.map((notary) => {
                const disputeRatio = calculateDisputeRatio(notary);
                const suspicious = isSuspicious(notary);

                return (
                  <tr 
                    key={notary.address} 
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <AddressDisplay address={notary.address} />
                    </td>
                    <td className="text-center py-4 px-4 font-semibold">
                      {notary.totalLeases}
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={notary.totalDisputed > 0 ? 'text-danger font-semibold' : ''}>
                        {notary.totalDisputed}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={notary.totalCancelled > 0 ? 'text-warning font-semibold' : ''}>
                        {notary.totalCancelled}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center gap-1">
                        {disputeRatio > 30 && (
                          <TrendingUp size={16} className="text-danger" />
                        )}
                        <span className={disputeRatio > 30 ? 'text-danger font-semibold' : ''}>
                          {disputeRatio.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      {suspicious ? (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-danger/10 text-danger rounded-full text-sm font-semibold">
                          <AlertTriangle size={14} />
                          Pola Mencurigakan
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">
                          Normal
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Kriteria Pola Mencurigakan:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Rasio sengketa &gt; 40%</li>
            <li>• Rasio pembatalan &gt; 25%</li>
            <li>• Banyak sewa pada tanah yang sama dalam waktu singkat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
