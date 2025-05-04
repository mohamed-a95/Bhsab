# BHS Transport & Service

En modern och responsiv webbplats för BHS Transport & Service, ett företag som erbjuder biluthyrning, transport och flytthjälp.

## Funktioner

- Responsiv design som fungerar på mobil, surfplatta och dator
- Detaljerad information om tjänster (biluthyrning, flytt, transport)
- Tydliga och lättlästa prislistor
- Kontaktformulär för förfrågningar
- Modern och användarvänlig design

## Installation och konfiguration

### Förutsättningar

- Node.js (v18+)
- npm eller yarn

### Installation

1. Klona projektet
   ```bash
   git clone [repository-url]
   cd bhs-website
   ```

2. Installera beroenden
   ```bash
   npm install
   ```

3. Konfigurera miljövariabler
   Kopiera `.env.example` till `.env` och anpassa värdena:
   ```bash
   cp .env.example .env
   ```
   
   Redigera `.env` och lägg till din SendGrid API-nyckel (om du vill aktivera e-postfunktionen):
   ```
   CONTACT_EMAIL=info@bhs.se
   SENDER_EMAIL=noreply@bhs.se
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```
   
4. Starta utvecklingsservern
   ```bash
   npm run dev
   ```

5. Öppna webbläsaren och gå till `http://localhost:5000`

### E-postkonfiguration

För att aktivera e-postfunktionaliteten behöver du:

1. Skapa ett konto på [SendGrid](https://sendgrid.com/)
2. Skapa en API-nyckel i SendGrid-kontot
3. Verifiera ditt domän eller email-adress i SendGrid
4. Lägg till API-nyckeln i `.env`-filen

Om ingen API-nyckel anges kommer systemet att simulera e-postfunktionen och skriva data till konsolen istället.

## Användning

### Utveckling

Under utveckling kan du köra:

```bash
npm run dev
```

### Bygg för produktion

För att bygga projektet för produktion:

```bash
npm run build
```

### Starta produktionsservern

Efter bygge:

```bash
npm start
```

## Teknisk struktur

- Frontend: React med TypeScript, Tailwind CSS
- Backend: Node.js med Express
- E-post: SendGrid API
- Datalagring: In-memory storage (utveckling)

## Anpassning

Webbplatsen är byggd för att vara enkel att anpassa:

- Ändra färger och typsnitt i Tailwind-konfigurationen
- Uppdatera priser och tjänster i respektive datafiler
- Lägg till eller ta bort sidor genom att skapa/redigera komponenter i `/client/src/pages`