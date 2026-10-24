import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Search, 
  FileText, 
  AlertTriangle, 
  Gavel, 
  Wallet,
  Menu,
  X,
  Info
} from 'lucide-react';
import { LimitationsModal } from './LimitationsModal';
import { WalletConnect } from './WalletConnect';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLimitations, setShowLimitations] = useState(false);

  const navigation = [
    { name: 'Cek Status', path: '/', icon: Search, public: true },
    { name: 'Audit Trail', path: '/audit', icon: FileText, public: true },
    { name: 'Panel Notaris', path: '/notary', icon: Home, public: false },
    { name: 'Ajukan Keberatan', path: '/challenge', icon: AlertTriangle, public: false },
    { name: 'Resolver', path: '/resolver', icon: Gavel, public: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-primary">LeaseChain</div>
              <div className="hidden sm:block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                Monad Testnet
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-primary text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <WalletConnect />

              <button
                onClick={() => setShowLimitations(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Keterbatasan sistem"
              >
                <Info size={20} className="text-gray-600" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-4 py-3">
                <WalletConnect />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              LeaseChain © 2026 • Built on Monad
            </div>
            <button
              onClick={() => setShowLimitations(true)}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              <Info size={16} />
              Keterbatasan Sistem
            </button>
          </div>
        </div>
      </footer>

      {/* Limitations Modal */}
      {showLimitations && (
        <LimitationsModal onClose={() => setShowLimitations(false)} />
      )}
    </div>
  );
}
