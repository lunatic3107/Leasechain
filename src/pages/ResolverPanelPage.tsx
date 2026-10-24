import React, { useState, useEffect } from 'react';
import { Gavel, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { dataProvider } from '@/lib/data/dataProvider';
import type { Land } from '@/lib/data/types';
import { AddressDisplay } from '@/components/AddressDisplay';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState';

export function ResolverPanelPage() {
  const [disputes, setDisputes] = useState<Land[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLand, setSelectedLand] = useState<string | null>(null);
  const [resolving, setResolving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    loadDisputes();
  }, []);

  const loadDisputes = async () => {
    try {
      const allLands = await dataProvider.getAllLands();
      const disputedLands = allLands.filter(land => land.status === 'Disputed');
      setDisputes(disputedLands);
    } finally {
      setLoading(false);
    }
  };

  const handleResolve = async (landId: string, upheld: boolean) => {
    setResolving(true);
    setMessage(null);
    setSelectedLand(landId);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (upheld) {
        setMessage({
          type: 'success',
          text: `Keberatan untuk ${landId} diterima. Sewa dibatalkan, bond dikembalikan ke penantang.`
        });
      } else {
        setMessage({
          type: 'success',
          text: `Keberatan untuk ${landId} ditolak. Sewa dilanjutkan, bond hangus.`
        });
      }

      // Reload disputes after resolution
      setTimeout(() => {
        loadDisputes();
        setSelectedLand(null);
      }, 2000);
    } catch (err) {
      setMessage({
        type: 'error',
        text: 'Terjadi kesalahan saat memproses keputusan.'
      });
    } finally {
      setResolving(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <LoadingSpinner message="Memuat sengketa..." />
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Gavel size={32} className="text-primary" />
          <h1 className="text-3xl font-bold text-text-dark">
            Panel Resolver
          </h1>
        </div>
        <p className="text-gray-600">
          Simulasi keputusan pengadilan/BPN untuk menyelesaikan sengketa
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
          <div className="text-sm text-blue-800">
            <strong>Catatan:</strong> Ini adalah simulasi. Dalam implementasi nyata, 
            resolver akan diganti dengan mekanisme multisig atau oracle yang terintegrasi 
            dengan lembaga resmi seperti BPN atau pengadilan.
          </div>
        </div>
      </div>

      {message && (
        <div className={`
          mb-6 p-4 rounded-lg flex items-start gap-3
          ${message.type === 'success' 
            ? 'bg-success/10 border border-success/30' 
            : 'bg-danger/10 border border-danger/30'
          }
        `}>
          {message.type === 'success' ? (
            <CheckCircle className="text-success flex-shrink-0" size={20} />
          ) : (
            <XCircle className="text-danger flex-shrink-0" size={20} />
          )}
          <div className={`text-sm ${message.type === 'success' ? 'text-success' : 'text-danger'}`}>
            {message.text}
          </div>
        </div>
      )}

      {disputes.length === 0 ? (
        <EmptyState
          type="no-data"
          title="Tidak Ada Sengketa"
          description="Semua sewa dalam kondisi normal"
        />
      ) : (
        <div className="grid gap-6">
          {disputes.map((land) => (
            <div key={land.landId} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    {land.landId}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-danger/10 text-danger rounded-full text-sm font-semibold">
                    <AlertCircle size={16} />
                    Sengketa Aktif
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {land.challengeCount} keberatan
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                {land.tenant && (
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Penyewa</div>
                    <AddressDisplay address={land.tenant} />
                  </div>
                )}
                {land.notary && (
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Notaris</div>
                    <AddressDisplay address={land.notary} />
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleResolve(land.landId, true)}
                  disabled={resolving && selectedLand === land.landId}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <CheckCircle size={20} />
                  Terima Keberatan
                </button>
                <button
                  onClick={() => handleResolve(land.landId, false)}
                  disabled={resolving && selectedLand === land.landId}
                  className="btn-danger flex-1 flex items-center justify-center gap-2"
                >
                  <XCircle size={20} />
                  Tolak Keberatan
                </button>
              </div>

              {resolving && selectedLand === land.landId && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <LoadingSpinner size="sm" />
                  Memproses keputusan...
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
