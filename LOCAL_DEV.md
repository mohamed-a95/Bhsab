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

## 3. Starta utvecklingsservern

### På macOS/Linux:
```bash
# Lägg till detta i package.json scripts
# "dev": "cross-env NODE_ENV=development tsx server/index.ts"
npm run dev
```

### På Windows:
```bash
# Skapa ett nytt script i package.json
# "dev:win": "set NODE_ENV=development&& tsx server/index.ts"
npm run dev:win
```

## 4. Bygg för produktion

### På macOS/Linux:
```bash
npm run build
```

### På Windows:
```bash
npm run build
```

## 5. Starta produktionsservern

### På macOS/Linux:
```bash
# Lägg till detta i package.json scripts
# "start": "cross-env NODE_ENV=production node dist/index.js"
npm start
```

### På Windows:
```bash
# Skapa ett nytt script i package.json
# "start:win": "set NODE_ENV=production&& node dist/index.js"
npm run start:win
```

## 6. Deployment på Vercel

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