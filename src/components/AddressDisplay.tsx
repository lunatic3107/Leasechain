import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface AddressDisplayProps {
  address: string;
  label?: string;
  showFull?: boolean;
  explorerUrl?: string;
}

export function AddressDisplay({ 
  address, 
  label, 
  showFull = false,
  explorerUrl 
}: AddressDisplayProps) {
  const [copied, setCopied] = useState(false);

  const truncate = (addr: string) => 
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      {label && (
        <span className="text-sm text-gray-600 font-medium">{label}:</span>
      )}
      <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
        {showFull ? address : truncate(address)}
      </code>
      <button
        onClick={handleCopy}
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        title="Salin alamat"
      >
        {copied ? (
          <Check size={16} className="text-success" />
        ) : (
          <Copy size={16} className="text-gray-500" />
        )}
      </button>
      {explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          title="Lihat di explorer"
        >
          <ExternalLink size={16} className="text-gray-500" />
        </a>
      )}
    </div>
  );
}
