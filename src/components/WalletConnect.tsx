import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet } from 'lucide-react';

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    const injected = connectors.find(c => c.name === 'MetaMask');
    if (injected) {
      connect({ connector: injected });
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <button
      onClick={isConnected ? () => disconnect() : handleConnect}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
        ${isConnected
          ? 'bg-green-100 text-green-700 border border-green-300'
          : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300'
        }
      `}
    >
      <Wallet size={18} />
      {isConnected ? formatAddress(address!) : 'Connect Wallet'}
    </button>
  );
}
