#!/usr/bin/env node

/**
 * Enkelt skript för att starta Vite från client-mappen
 */
const { spawn } = require('child_process');
const path = require('path');

// Sökväg till client-mappen
const clientDir = path.join(__dirname, 'client');

console.log('Startar Vite från client-mappen på port 5000...');

// Starta Vite-processen
const viteProcess = spawn('npx', ['vite'], {
  cwd: clientDir,
  stdio: 'inherit',
  shell: true
});

// Hantera processavslut
viteProcess.on('close', (code) => {
  console.log(`Vite-processen avslutades med kod ${code}`);
  process.exit(code);
});

// Hantera felhantering
viteProcess.on('error', (err) => {
  console.error('Fel vid start av Vite:', err);
  process.exit(1);
});