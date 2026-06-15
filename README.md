# Sonate KulturForum e.V. – Website

Gebaut mit [Eleventy](https://www.11ty.dev/) und [Decap CMS](https://decapcms.org/).

---

## Einrichtung (einmalig, ~15 Minuten) 

### 1. GitHub Repository anlegen
1. Geh auf [github.com](https://github.com) → „New repository"
2. Name z.B. `sonate-website`, auf **Private** oder Public stellen
3. Diesen Projektordner hochladen (alle Dateien reinziehen oder per Git push)

### 2. Netlify verbinden
1. [netlify.com](https://netlify.com) → „Add new site" → „Import from Git"
2. GitHub-Repo auswählen
3. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen
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

---

## Lokale Entwicklung

```bash
npm install
npm start
# → http://localhost:8080
```

## Projektstruktur

```
src/
  _data/site.json          ← Seitentexte (vom CMS bearbeitet)
  _includes/base.njk       ← HTML-Layout mit CSS
  veranstaltungen/         ← Eine .md-Datei pro Event
  admin/
    config.yml             ← CMS-Konfiguration
    index.html             ← CMS-Interface
  index.njk                ← Startseite
netlify.toml               ← Build-Einstellungen
```
