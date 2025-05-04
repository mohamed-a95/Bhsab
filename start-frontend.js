#!/usr/bin/env node

/**
 * Detta skript startar en Vite-server för frontend-utveckling
 * Det är designat att fungera i både Replit och lokala utvecklingsmiljöer
 */

import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startViteServer() {
  try {
    console.log('Startar Vite utvecklingsserver...');
    
    // Skapa Vite-server med anpassad konfiguration
    const server = await createServer({
      configFile: resolve(__dirname, 'frontend-vite.config.ts'),
      server: {
        port: 5000,      // Använd samma port som express tidigare använde
        host: '0.0.0.0', // Binda till alla tillgängliga interfaces (viktigt för Replit)
        open: false      // Öppna inte webbläsaren automatiskt
      }
    });

    // Starta utvecklingsservern
    await server.listen();

    server.printUrls();
    console.log('BHS webbplats körs nu som frontend-only applikation!');
  } catch (error) {
    console.error('Error starting Vite server:', error);
    process.exit(1);
  }
}

startViteServer();