import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'feat-1',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
