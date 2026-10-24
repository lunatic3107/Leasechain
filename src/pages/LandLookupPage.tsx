import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { dataProvider } from '@/lib/data/dataProvider';
import type { Land, LeaseEvent } from '@/lib/data/types';
import { StatusBadge } from '@/components/StatusBadge';
import { CountdownTimer } from '@/components/CountdownTimer';
import { AddressDisplay } from '@/components/AddressDisplay';
import { DocumentHash } from '@/components/DocumentHash';
import { Timeline } from '@/components/Timeline';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState';

export function LandLookupPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [land, setLand] = useState<Land | null>(null);
  const [events, setEvents] = useState<LeaseEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(true);
    
    try {
      const landData = await dataProvider.getLand(searchQuery.trim().toUpperCase());
      setLand(landData);
      
      if (landData) {
        const landEvents = await dataProvider.getEventsForLand(landData.landId);
        setEvents(landEvents);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return '-';
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(timestamp));
  };

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-dark mb-2">
            Cek Status Tanah
          </h1>
          <p className="text-gray-600">
            Masukkan kode tanah untuk melihat status sewa dan riwayat
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Contoh: LAND-001"
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary flex items-center gap-2">
              <Search size={20} />
              Cari
            </button>
          </div>
        </form>

        {loading && <LoadingSpinner message="Memuat data..." />}

        {!loading && searched && !land && (
          <EmptyState
            type="search"
            title="Tanah Tidak Ditemukan"
            description="Periksa kembali kode tanah yang Anda masukkan"
          />
        )}

        {!loading && land && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-dark mb-2">
                    {land.landId}
                  </h2>
                  <StatusBadge status={land.status} size="lg" />
                </div>
              </div>

              {land.status === 'PendingFinalization' && land.challengeDeadline && (
                <div className="mb-6">
                  <CountdownTimer deadline={land.challengeDeadline} />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {land.tenant && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Penyewa</div>
                    <AddressDisplay address={land.tenant} />
                  </div>
                )}
                {land.notary && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Notaris</div>
                    <AddressDisplay address={land.notary} />
                  </div>
                )}
                {land.startTime && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Tanggal Mulai</div>
                    <div className="font-semibold">{formatDate(land.startTime)}</div>
                  </div>
                )}
                {land.endTime && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Tanggal Berakhir</div>
                    <div className="font-semibold">{formatDate(land.endTime)}</div>
                  </div>
                )}
              </div>

              {land.docHash && (
                <div className="mb-6">
                  <DocumentHash hash={land.docHash} />
                </div>
              )}

              {land.challengeCount > 0 && (
                <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                  <div className="text-sm text-warning font-semibold">
                    Jumlah Keberatan: {land.challengeCount}
                  </div>
                </div>
              )}
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">Riwayat</h3>
              <Timeline events={events} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
