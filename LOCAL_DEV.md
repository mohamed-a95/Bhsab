# Lokal utveckling i VS Code (Frontend-only)

För att köra projektet lokalt i VS Code, följ dessa instruktioner:

## 1. Installera beroenden

```bash
npm install
```

## 2. Uppdatera package.json

Kopiera innehållet från `FRONTEND_PACKAGE.json` till din `package.json`-fil för att uppdatera projektet till en frontend-only applikation.

Alternativt, uppdatera manuellt scripts-delen i din package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:frontend": "vite build",
  "preview": "vite preview",
  "check": "tsc"
}
```

## 3. Konfigurera Vite

Använd den medföljande `frontend-vite.config.ts`-filen eller skapa en egen vite.config.ts med detta innehåll:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});
```

## 4. Starta utvecklingsservern

```bash
npm run dev
```

Vite startar automatiskt en utvecklingsserver på http://localhost:5173 (eller annan tillgänglig port).

## 5. Bygg för produktion

```bash
npm run build
```

Detta kommando bygger din React-applikation med Vite och placerar resultatet i `dist`-mappen.

## 6. Förhandsgranska produktionsbygget

```bash
npm run preview
```

Startar en lokal server som serverar den byggda produktionsversionen så du kan testa den innan deployment.

## 7. Deployment på Vercel

För att deploya projektet på Vercel via GitHub:

1. Pusha projektet till ett GitHub-repo
2. Skapa ett nytt projekt på Vercel
3. Importera GitHub-repot
4. I projektinställningarna finns redan optimal konfiguration i vercel.json:
   - Build Command: `npm run build:frontend`
   - Output Directory: `dist`
5. Deploya projektet

Vercel kommer att hantera resten via `vercel.json`-konfigurationen som finns i projektet.

## Hantera kontaktformuläret

Kontaktformuläret är nu implementerat med `mailto:`-länkar istället för backend-integration. När användaren skickar formuläret:

1. Data valideras med Zod-schemat
2. En mailto-länk genereras med formulärinformationen
3. Användarens e-postklient öppnas med förifyllt innehåll
4. Användaren kan göra eventuella justeringar och skicka e-posten

## Rensa backend-filer

Eftersom detta nu är ett frontend-only projekt kan du ta bort följande mappar och filer om de inte redan är borttagna:

- `server/` (hela mappen)
- `shared/` (hela mappen)
- `.env.example` (behövs inte längre, ingen backend som kräver miljövariabler)
- `.env.local.example` (behövs inte längre)
- `drizzle.config.ts` (databasrelaterad fil)

## Filstruktur efter konvertering

```
├── client/                     # Frontend-kod
│   ├── src/                    # React-källkod
│   │   ├── assets/             # Bilder och resurser
│   │   ├── components/         # UI-komponenter
│   │   ├── hooks/              # React hooks
│   │   ├── lib/                # Hjälpbibliotek
│   │   ├── pages/              # Sidkomponenter
│   │   ├── App.tsx             # Huvudapplikation
│   │   └── main.tsx            # Entrypoint
│   └── index.html              # HTML-mall
├── attached_assets/            # Bifogade tillgångar/bilder
├── public/                     # Statiska filer
├── frontend-vite.config.ts     # Vite-konfiguration för frontend
├── vite.config.ts              # Vite-konfiguration
├── tsconfig.json               # TypeScript-konfiguration
├── package.json                # Projektberoenden och skript
└── vercel.json                 # Vercel-konfiguration
```