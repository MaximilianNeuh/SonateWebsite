# Sonate KulturForum e.V. – Website

Gebaut mit [React](https://react.dev/) + [Vite](https://vitejs.dev/), Inhaltspflege über [Decap CMS](https://decapcms.org/).

---

## Lokale Entwicklung

```bash
npm install
npm run dev
# → http://localhost:8080
```

## Build

```bash
npm run build   # erzeugt dist/
npm run preview # Vorschau des Production-Builds
```

---

## Einrichtung (einmalig, ~15 Minuten)

### 1. GitHub Repository anlegen
1. Geh auf [github.com](https://github.com) → „New repository"
2. Name z.B. `sonate-website`, auf **Private** oder Public stellen
3. Diesen Projektordner hochladen (alle Dateien reinziehen oder per Git push)

### 2. Netlify verbinden
1. [netlify.com](https://netlify.com) → „Add new site" → „Import from Git"
2. GitHub-Repo auswählen
3. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen (Build: `npm run build`, Publish: `dist`)
4. „Deploy site" klicken → Seite ist live!

### 3. Decap CMS aktivieren (für das Admin-Interface)
1. In Netlify: **Site settings → Identity** → „Enable Identity"
2. Unter Identity → **Registration**: auf „Invite only" stellen
3. Unter Identity → **Services**: „Enable Git Gateway" aktivieren
4. Unter **Identity** oben: „Invite users" → deine E-Mail eintragen
5. Du bekommst eine Einladungs-E-Mail → Passwort setzen
6. CMS erreichbar unter: `https://deineseite.netlify.app/admin`

### 4. Kontaktformular (optional)
1. Kostenlosen Account bei [formspree.io](https://formspree.io) anlegen
2. Neues Formular erstellen, die ID kopieren (Teil nach `/f/`)
3. Im CMS unter „Seiteninhalt" → Formspree-ID eintragen

---

## Inhalte bearbeiten

Nach der Einrichtung: einfach `deineseite.de/admin` aufrufen und einloggen.

- **Veranstaltungen** → neue Events anlegen, bearbeiten, löschen
- **Seiteninhalt** → Texte auf der Startseite anpassen (Hero, Über uns, Mitmachen, Kontakt)

CMS-Änderungen landen als Git-Commits direkt in `src/data/` und lösen einen neuen Netlify-Build aus.

---

## Projektstruktur

```
public/
  admin/                    ← Decap CMS (config.yml, index.html)
  assets/                   ← statische Assets (Logo, Uploads)
src/
  data/
    site.json                ← Seitentexte (vom CMS bearbeitet)
    events/*.json            ← eine Datei pro Veranstaltung
  components/
    layout/                  ← Nav, Footer
    hero/                    ← Hero-Section
    about/                   ← Über-uns-Section
    events/                  ← Veranstaltungen-Section + Card
    join/                    ← Mitmachen-Section, Mitgliedschaften, Kontaktformular
  pages/
    HomePage.jsx              ← Startseite (alle Sections)
    ImpressumPage.jsx          ← /impressum
  hooks/                     ← useEvents, useContactForm
  utils/                     ← formatDate
  styles/global.css           ← Reset, Farbvariablen, geteilte Utility-Klassen
  App.jsx                    ← React-Router-Setup
  main.jsx                   ← Einstiegspunkt
netlify.toml                 ← Build- & Redirect-Einstellungen
```
