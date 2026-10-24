import React, { useState } from 'react';
import { AlertTriangle, Zap, Info, ExternalLink } from 'lucide-react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, keccak256, toBytes } from 'viem';
import { CONTRACT_ADDRESS, BOND_AMOUNT } from '@/lib/config';
import LeaseRegistryABI from '@/lib/LeaseRegistry.abi.json';

export function ChallengePanelPage() {
  const [formData, setFormData] = useState({
    landId: '',
    evidenceHash: '',
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
    landId: 'LAND-001',
    evidenceHash: '0xdef456789abcdef456789abcdef456789abcdef456789abcdef456789abcdef4',
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

    if (!formData.landId || !formData.evidenceHash) {
      setError('Semua field harus diisi');
      return;
    }

    try {
      const landIdHash = keccak256(toBytes(formData.landId));
      const evidenceHashBytes = formData.evidenceHash.startsWith('0x')
        ? formData.evidenceHash as `0x${string}`
        : `0x${formData.evidenceHash}` as `0x${string}`;

      writeContract({
        address: CONTRACT_ADDRESS,
        abi: LeaseRegistryABI,
        functionName: 'challenge',
        args: [landIdHash, evidenceHashBytes],
        value: parseEther(BOND_AMOUNT),
      });

      if (hash) {
        setTxHash(hash);
        setSuccess(`Keberatan berhasil diajukan untuk ${formData.landId}. Status tanah berubah menjadi Sengketa. Bond ${BOND_AMOUNT} MON telah disetor.`);
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
              Ajukan Keberatan
            </h1>
            <p className="text-gray-600">
              Laporkan pendaftaran sewa yang mencurigakan
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

        <div className="card mb-6">
          <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <Info className="text-warning flex-shrink-0" size={20} />
            <div className="text-sm text-warning">
              <strong>Tentang Bond:</strong> Anda harus menyetor <strong>{BOND_AMOUNT} MON</strong> sebagai jaminan.
              Jika keberatan Anda <strong>valid</strong>, bond akan dikembalikan dan sewa dibatalkan.
              Jika keberatan Anda <strong>tidak valid</strong>, bond akan hangus dan proses finalisasi dilanjutkan.
            </div>
          </div>
        </div>

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
                placeholder="LAND-001"
                className="input-field"
              />
              <p className="text-xs text-gray-500 mt-1">
                Tanah harus dalam status Menunggu Finalisasi
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hash Bukti *
              </label>
              <input
                type="text"
                value={formData.evidenceHash}
                onChange={(e) => setFormData({ ...formData, evidenceHash: e.target.value })}
                placeholder="0x..."
                className="input-field font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Sidik jari dokumen bukti Anda (hash atau IPFS CID)
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-700 mb-2">
                <strong>Bond yang harus disetor:</strong>
              </div>
              <div className="text-2xl font-bold text-primary">
                {BOND_AMOUNT} MON
              </div>
            </div>

            {error && (
              <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg flex items-start gap-3">
                <AlertTriangle className="text-danger flex-shrink-0" size={20} />
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
                <AlertTriangle className="text-success flex-shrink-0" size={20} />
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
              className="btn-danger w-full"
              disabled={isPending || isConfirming}
            >
              {isPending ? 'Menunggu...' : isConfirming ? 'Mengirim...' : `Ajukan Keberatan (Setor ${BOND_AMOUNT} MON)`}
            </button>
          </form>
        </div>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Proses Keberatan:</h4>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            <li>Anda menyetor bond dan mengajukan bukti</li>
            <li>Status tanah berubah menjadi <strong>Sengketa</strong></li>
            <li>Resolver (simulasi pengadilan/BPN) meninjau bukti</li>
            <li>Jika valid: sewa dibatalkan, bond dikembalikan</li>
            <li>Jika tidak valid: sewa dilanjutkan, bond hangus</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
