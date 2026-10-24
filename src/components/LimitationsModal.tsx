import React from 'react';
import { X, AlertCircle } from 'lucide-react';

interface LimitationsModalProps {
  onClose: () => void;
}

export function LimitationsModal({ onClose }: LimitationsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-text-dark">Keterbatasan Sistem</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <AlertCircle className="text-warning flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-warning">
              <strong>Penting:</strong> LeaseChain adalah prototipe untuk demonstrasi hackathon. 
              Sistem ini TIDAK menggantikan proses hukum atau lembaga resmi.
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Yang Kami TIDAK Lakukan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-danger">•</span>
                <span><strong>Menggantikan notaris atau BPN:</strong> Kami tidak memverifikasi kepemilikan tanah secara fisik.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-danger">•</span>
                <span><strong>Menjual atau mentransfer tanah:</strong> Ini hanya catatan status sewa.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-danger">•</span>
                <span><strong>Mendeteksi suap otomatis:</strong> Sistem tidak dapat membuktikan apakah notaris menerima suap atau bertindak dengan itikad buruk di luar blockchain.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-danger">•</span>
                <span><strong>Resolver sungguhan:</strong> Dalam demo ini, resolver adalah simulasi. Implementasi nyata membutuhkan oracle atau multisig yang terintegrasi dengan pengadilan/BPN.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Yang Kami Tawarkan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-success">✓</span>
                <span><strong>Transparansi publik:</strong> Status sewa dan rekam jejak notaris dapat dilihat siapa saja.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success">✓</span>
                <span><strong>Anti-double-lease:</strong> Sistem menolak pendaftaran sewa ganda pada tanah yang sama.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success">✓</span>
                <span><strong>Masa keberatan:</strong> Periode jeda sebelum sewa resmi, memberi kesempatan publik untuk mengajukan keberatan.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success">✓</span>
                <span><strong>Audit trail:</strong> Semua transaksi tercatat permanen di blockchain, memudahkan investigasi jika ada masalah.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Roadmap Masa Depan:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Integrasi dengan BPN untuk verifikasi kepemilikan</li>
              <li>• Zero-knowledge proofs untuk privasi data sensitif</li>
              <li>• Mekanisme staking/slashing untuk notaris</li>
              <li>• Oracle untuk keputusan resolver otomatis</li>
              <li>• Multisig untuk governance yang lebih terdesentralisasi</li>
            </ul>
          </div>

          <div className="text-center text-sm text-gray-600 italic">
            "Resolver dan verifikasi BPN di demo ini masih simulasi. Sistem tidak bisa mendeteksi suap secara otomatis. 
            Yang kami tawarkan adalah transparansi dan masa keberatan."
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <button onClick={onClose} className="btn-primary w-full">
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
}
