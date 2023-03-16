import path from 'path';
import { UserConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json'

export default {
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [crx({ manifest })],
  server: {
    port: 8080,
    hot: true
  }
} as UserConfig
