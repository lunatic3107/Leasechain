import React, { useState } from 'react';
import { FileText, Zap, AlertCircle, ExternalLink, Info } from 'lucide-react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { keccak256, toBytes, isAddress } from 'viem';
import { CONTRACT_ADDRESS } from '@/lib/config';
import LeaseRegistryABI from '@/lib/LeaseRegistry.abi.json';

export function NotaryPanelPage() {
  const [formData, setFormData] = useState({
    landId: '',
    tenant: '',
    durationDays: '',
    docHash: '',
  });
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [txHash, setTxHash] = useState('');

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: hash as `0x${string}` | undefined
  });

  const demoData = {
    landId: 'LAND-004',
    tenant: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
    durationDays: '365',
    docHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
  };

  const handleQuickFill = () => {
    setFormData(demoData);
    setDemoMode(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setTxHash('');

    if (!formData.landId || !formData.tenant || !formData.durationDays || !formData.docHash) {
      setError('Semua field harus diisi');
      return;
    }

    if (!isAddress(formData.tenant)) {
      setError('Alamat penyewa tidak valid');
      return;
    }

    try {
      const landIdHash = keccak256(toBytes(formData.landId));
      const durationSeconds = BigInt(parseInt(formData.durationDays) * 86400);
      const docHashBytes = formData.docHash.startsWith('0x')
        ? formData.docHash as `0x${string}`
        : `0x${formData.docHash}` as `0x${string}`;

      writeContract({
        address: CONTRACT_ADDRESS,
        abi: LeaseRegistryABI,
        functionName: 'registerLease',
        args: [landIdHash, formData.tenant as `0x${string}`, durationSeconds, docHashBytes],
      });

      if (hash) {
        setTxHash(hash);
        setSuccess(`Sewa berhasil didaftarkan untuk ${formData.landId}. Status: Menunggu Finalisasi`);
      }
    } catch (err: any) {
      setError(err?.message || 'Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-dark mb-2">
              Panel Notaris
            </h1>
            <p className="text-gray-600">
              Daftarkan sewa tanah baru
            </p>
          </div>
          <button
            onClick={handleQuickFill}
            className="btn-secondary flex items-center gap-2"
          >
            <Zap size={16} />
            Quick Fill (Demo)
          </button>
        </div>

        {demoMode && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
            <div className="text-sm text-blue-800">
              <strong>Mode Demo:</strong> Form terisi otomatis untuk mempercepat demo
            </div>
          </div>
        )}

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kode Tanah *
              </label>
              <input
                type="text"
                value={formData.landId}
                onChange={(e) => setFormData({ ...formData, landId: e.target.value })}
                placeholder="LAND-004"
                className="input-field"
              />
              <p className="text-xs text-gray-500 mt-1">
                Contoh: LAND-001, LAND-002
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Alamat Penyewa *
              </label>
              <input
                type="text"
                value={formData.tenant}
                onChange={(e) => setFormData({ ...formData, tenant: e.target.value })}
                placeholder="0x..."
                className="input-field font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Durasi (hari) *
              </label>
              <input
                type="number"
                value={formData.durationDays}
                onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                placeholder="365"
                className="input-field"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hash Dokumen *
              </label>
              <input
                type="text"
                value={formData.docHash}
                onChange={(e) => setFormData({ ...formData, docHash: e.target.value })}
                placeholder="0x..."
                className="input-field font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Sidik jari dokumen (hash SHA-256 atau IPFS CID)
              </p>
            </div>

            {error && (
              <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-danger flex-shrink-0" size={20} />
                <div className="text-danger text-sm">{error}</div>
              </div>
            )}

            {isPending && (
              <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 animate-pulse" size={20} />
                <div className="text-blue-800 text-sm">Menunggu konfirmasi wallet...</div>
              </div>
            )}

            {isConfirming && (
              <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 animate-pulse" size={20} />
                <div className="text-blue-800 text-sm">Transaksi sedang dikonfirmasi...</div>
              </div>
            )}

            {success && (
              <div className="p-4 bg-success/10 border border-success/30 rounded-lg flex items-start gap-3">
                <FileText className="text-success flex-shrink-0" size={20} />
                <div className="text-success text-sm">
                  <div>{success}</div>
                  {txHash && (
                    <a
                      href={`https://testnet.monadscan.com/tx/${txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-success hover:underline flex items-center gap-1 font-mono text-xs font-bold"
                    >
                      Lihat transaksi <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isPending || isConfirming}
            >
              {isPending ? 'Menunggu...' : isConfirming ? 'Mengirim...' : 'Daftarkan Sewa'}
            </button>
          </form>
        </div>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Catatan:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Sewa akan masuk status <strong>Menunggu Finalisasi</strong></li>
            <li>• Masa keberatan dimulai setelah pendaftaran</li>
            <li>• Sistem akan menolak pendaftaran jika tanah sudah disewa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
