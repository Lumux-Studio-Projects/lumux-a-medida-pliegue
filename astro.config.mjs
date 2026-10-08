import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://pliegue.lumux.demo',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
