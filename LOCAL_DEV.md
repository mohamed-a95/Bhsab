# Lokal utveckling i VS Code

För att köra projektet lokalt i VS Code, följ dessa instruktioner:

## 1. Installera beroenden

```bash
npm install
# Installera även cross-env för plattformsoberoende miljövariabler
npm install --save-dev cross-env
```

## 2. Konfigurera miljövariabler

Kopiera `.env.local.example` till `.env.local` och anpassa värdena:

```bash
cp .env.local.example .env.local
```

## 3. Uppdatera package.json-scripts

För att säkerställa att Vite används korrekt, ändra följande scripts i package.json:

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development tsx server/index.ts",
  "dev:win": "set NODE_ENV=development&& tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "build:client": "vite build",
  "build:server": "esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "cross-env NODE_ENV=production node dist/index.js",
  "start:win": "set NODE_ENV=production&& node dist/index.js",
  "check": "tsc",
  "preview": "vite preview"
}
```

Notera att den nuvarande scriptet:
```
"build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
```

Bygger både frontend (med Vite) och backend (med esbuild). Detta är korrekt och bör behållas.

## 4. Starta utvecklingsservern

### På macOS/Linux:
```bash
npm run dev
```

### På Windows:
```bash
npm run dev:win
```

## 5. Bygg för produktion

```bash
npm run build
```

Detta kommando bygger både frontend med Vite och backend med esbuild.

## 6. Starta produktionsservern

### På macOS/Linux:
```bash
npm start
```

### På Windows:
```bash
npm run start:win
```

## 7. Deployment på Vercel

För att deploya projektet på Vercel via GitHub:

1. Pusha projektet till ett GitHub-repo
2. Skapa ett nytt projekt på Vercel
3. Importera GitHub-repot
4. I projektinställningarna under "Build & Development Settings":
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Lägg till miljövariabler under "Environment Variables":
   - `CONTACT_EMAIL`: info@bhs.se
   - `SENDER_EMAIL`: noreply@bhs.se
   - `SMTP_HOST`: Din SMTP-server
   - `SMTP_PORT`: Din SMTP-port
   - `SMTP_SECURE`: true/false
   - `SMTP_USER`: Ditt SMTP-användarnamn
   - `SMTP_PASSWORD`: Ditt SMTP-lösenord
6. Deploya projektet

Vercel kommer att hantera resten via `vercel.json`-konfigurationen som finns i projektet.

## Anmärkningar om build-processen

Projektet använder följande byggprocess:

1. **Frontend (React)**: Byggs med Vite (`vite build`) och hamnar i `dist/public`
2. **Backend (Express)**: Byggs med esbuild och hamnar i `dist/`-roten

När du kör i produktion startar du bara Node.js med entry-point `dist/index.js` som kommer att servera både API:et och den byggda frontend-appen.