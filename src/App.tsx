import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './lib/wagmi';
import { AppShell } from './components/AppShell';
import { LandLookupPage } from './pages/LandLookupPage';
import { NotaryAuditPage } from './pages/NotaryAuditPage';
import { NotaryPanelPage } from './pages/NotaryPanelPage';
import { ChallengePanelPage } from './pages/ChallengePanelPage';
import { ResolverPanelPage } from './pages/ResolverPanelPage';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<LandLookupPage />} />
              <Route path="/audit" element={<NotaryAuditPage />} />
              <Route path="/notary" element={<NotaryPanelPage />} />
              <Route path="/challenge" element={<ChallengePanelPage />} />
              <Route path="/resolver" element={<ResolverPanelPage />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
