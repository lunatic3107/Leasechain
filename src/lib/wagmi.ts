import { http, createConfig, createStorage } from 'wagmi';
import { monadTestnet } from './config';

export const config = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
  storage: createStorage({ storage: window.localStorage }),
});
