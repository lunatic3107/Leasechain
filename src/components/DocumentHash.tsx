import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface DocumentHashProps {
  hash: string;
  label?: string;
}

export function DocumentHash({ hash, label = 'Sidik Jari Dokumen' }: DocumentHashProps) {
  const truncate = (h: string) => `${h.slice(0, 10)}...${h.slice(-8)}`;
  
  // Mock IPFS link (in real app, this would be actual IPFS gateway)
  const mockLink = `https://ipfs.io/ipfs/${hash.slice(2)}`;

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <FileText size={20} className="text-gray-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-600 mb-1">{label}</div>
        <code className="font-mono text-xs text-gray-800 break-all">
          {truncate(hash)}
        </code>
      </div>
      <a
        href={mockLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
        title="Lihat dokumen (simulasi)"
      >
        <ExternalLink size={16} className="text-gray-600" />
      </a>
    </div>
  );
}
