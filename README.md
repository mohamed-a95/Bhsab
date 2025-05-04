# BHS Transport & Service

En modern och responsiv webbplats för BHS Transport & Service, ett företag som erbjuder biluthyrning, transport och flytthjälp.

## Funktioner

- Responsiv design som fungerar på mobil, surfplatta och dator
- Detaljerad information om tjänster (biluthyrning, flytt, transport)
- Tydliga och lättlästa prislistor
- Kontaktformulär med mailto-funktionalitet
- Modern och användarvänlig design
- Stöd för både Replit, lokal utveckling (VS Code) och Vercel-deployment

## Installation och konfiguration

### Förutsättningar

- Node.js (v18+)
- npm eller yarn

### Installation på Replit

Projektet är konfigurerat för att köras direkt på Replit utan ytterligare konfiguration.

### Installation lokalt

1. Klona projektet
   ```bash
   git clone [repository-url]
   cd bhs-website
   ```

2. Installera beroenden
   ```bash
   npm install
   ```

3. Starta utvecklingsservern
   ```bash
   npm run dev
   ```
   
   Se `LOCAL_DEV.md` för mer detaljerade instruktioner för lokal utveckling.

4. Öppna webbläsaren och gå till `http://localhost:5173` (eller den port som visas i terminalen)

## Kontaktformulär

Kontaktformuläret använder en `mailto:`-länk för att öppna användarens e-postklient med förfylld information från formuläret. Detta gör att webbplatsen kan fungera utan någon backend-server.

## Deployment på Vercel

För att deploya projektet på Vercel via GitHub:

1. Pusha projektet till ett GitHub-repo
2. Skapa ett nytt projekt på Vercel
3. Importera GitHub-repot

Projektet är förberett med `vercel.json` för optimala inställningar på Vercel.

## Teknisk struktur

- Frontend: React med TypeScript, Tailwind CSS, Shadcn UI
- Routing: wouter för klient-sida routing
- Formulärvalidering: Zod och React Hook Form
- Styling: Tailwind CSS med shadcn/ui-komponenter

## Filstruktur

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
├── tsconfig.json               # TypeScript-konfiguration
└── vercel.json                 # Vercel-konfiguration
```

## Anpassning

Webbplatsen är byggd för att vara enkel att anpassa:

- Ändra färger och typsnitt i Tailwind-konfigurationen
- Uppdatera priser och tjänster i respektive datafiler (`client/src/lib/utils/data.ts`)
- Lägg till eller ta bort sidor genom att skapa/redigera komponenter i `client/src/pages` och registrera dem i `App.tsx`

## Lokal utveckling

För detaljerade instruktioner om lokal utveckling i VS Code, se `LOCAL_DEV.md`.

## Package.json

Vi har inkluderat en exempelfil `FRONTEND_PACKAGE.json` som visar hur package.json bör se ut efter konvertering till frontend-only. Kopiera innehållet till din package.json-fil för att uppdatera projektet.