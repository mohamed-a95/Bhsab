#!/usr/bin/env node

// This file starts a Vite server directly for frontend development
const { createServer } = require('vite');
const path = require('path');

async function startViteServer() {
  try {
    // Create Vite server
    const server = await createServer({
      configFile: path.resolve(__dirname, 'frontend-vite.config.ts'),
      server: {
        port: 5000,
        host: '0.0.0.0',
      }
    });

    // Start the development server
    await server.listen();

    server.printUrls();
    console.log('Vite frontend server running at http://localhost:5000');
  } catch (error) {
    console.error('Error starting Vite server:', error);
    process.exit(1);
  }
}

startViteServer();