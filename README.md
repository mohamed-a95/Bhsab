# BHS Transport & Service

En modern och responsiv webbplats för BHS Transport & Service, ett företag som erbjuder biluthyrning, transport och flytthjälp.

## Funktioner

- Responsiv design som fungerar på mobil, surfplatta och dator
- Detaljerad information om tjänster (biluthyrning, flytt, transport)
- Tydliga och lättlästa prislistor
- Kontaktformulär med e-postfunktionalitet
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
   npm install --save-dev cross-env
   ```

3. Konfigurera miljövariabler
   Kopiera `.env.local.example` till `.env.local` och anpassa värdena:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Redigera `.env.local` och lägg till dina SMTP-uppgifter:
   ```
   CONTACT_EMAIL=info@bhs.se
   SENDER_EMAIL=noreply@bhs.se
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=user@example.com
   SMTP_PASSWORD=your_password_here
   ```
   
4. Starta utvecklingsservern
   
   **macOS/Linux:**
   ```bash
   NODE_ENV=development tsx server/index.ts
   ```
   
   **Windows:**
   ```bash
   set NODE_ENV=development&& tsx server/index.ts
   ```
   
   Se `LOCAL_DEV.md` för mer detaljerade instruktioner för lokal utveckling.

5. Öppna webbläsaren och gå till `http://localhost:5000`

### E-postkonfiguration

För att aktivera e-postfunktionaliteten behöver du:

1. Konfigurera en SMTP-server i `.env`-filen
2. Om ingen SMTP-server konfigureras kommer systemet att använda Ethereal för testmejl
3. Ethereal genererar en förhandsgranskningslänk som visas i konsolen

## Deployment på Vercel

För att deploya projektet på Vercel via GitHub:

1. Pusha projektet till ett GitHub-repo
2. Skapa ett nytt projekt på Vercel
3. Importera GitHub-repot
4. Lägg till miljövariabler under "Environment Variables":
   - `CONTACT_EMAIL`: info@bhs.se
   - `SENDER_EMAIL`: noreply@bhs.se
   - `SMTP_HOST`: Din SMTP-server
   - `SMTP_PORT`: Din SMTP-port
   - `SMTP_SECURE`: true/false
   - `SMTP_USER`: Ditt SMTP-användarnamn
   - `SMTP_PASSWORD`: Ditt SMTP-lösenord

Projektet är förberett med `vercel.json` för optimala inställningar på Vercel.

## Teknisk struktur

- Frontend: React med TypeScript, Tailwind CSS, Shadcn UI
- Backend: Node.js med Express
- E-post: Nodemailer med Ethereal för testning
- Datalagring: In-memory storage (utveckling)

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
├── server/                     # Backend-kod
│   ├── index.ts                # Serverens startpunkt
│   ├── routes.ts               # API-routes
│   ├── storage.ts              # Datalagring
│   ├── mailer.ts               # E-postfunktionalitet
│   └── vite.ts                 # Vite-konfiguration
├── shared/                     # Delad kod
│   └── schema.ts               # Datamodeller
├── .env.example                # Exempel på miljövariabler
├── .env.local.example          # Exempel för lokal utveckling
├── tsconfig.json               # TypeScript-konfiguration
├── vite.config.ts              # Vite-konfiguration
└── vercel.json                 # Vercel-konfiguration
```

## Anpassning

Webbplatsen är byggd för att vara enkel att anpassa:

- Ändra färger och typsnitt i Tailwind-konfigurationen
- Uppdatera priser och tjänster i respektive datafiler
- Lägg till eller ta bort sidor genom att skapa/redigera komponenter i `/client/src/pages`

## Lokal utveckling

För detaljerade instruktioner om lokal utveckling i VS Code, se `LOCAL_DEV.md`.