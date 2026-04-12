# ParaglideSpot

ParaglideSpot is an open project built to support the free flight community in Italy and, ideally, beyond.

The goal is simple: make it easier for pilots to find useful, practical, spot-specific information in one place, including local site details, contacts, takeoff and landing references, webcams, and weather links.
It starts from Piedmont, but the project is intentionally open to growth. If the structure proves useful, it can support more Italian regions and eventually spots in other countries as well.

## Why this project exists

Flying communities often rely on fragmented information:

- club websites
- WhatsApp groups
- local knowledge
- weather tools scattered across different platforms
- spot details that are hard to keep updated

ParaglideSpot tries to reduce that fragmentation with a lightweight, open, data-driven site.

This is not meant to replace pilot judgement, local briefing, club rules, or official sources. It is a practical community tool to help pilots reach the right information faster.

## Open project

ParaglideSpot is open by design.

There are two ways to contribute:

1. Developers can collaborate by improving the application, proposing features, refining the UI, or improving the data model.
2. Non-technical contributors can help by providing the data for new flying spots using the location template below.

That distinction matters. A project like this becomes valuable not only because of code, but because local pilots, clubs, and site managers can contribute reliable information without needing to be developers.

## What the app currently does

- Shows a curated list of flying spots
- Organizes spots by region
- Displays spot-specific information such as:
  - takeoffs
  - landing
  - contacts
  - shuttle info
  - webcams
  - weather links
- Supports Italian and English UI switching
- Uses a JSON-based structure so adding new locations stays simple

## Tech stack

- Vite
- Vanilla JavaScript modules
- Static JSON data files
- Plain CSS

The application is intentionally lightweight. There is no backend, no database, and no heavy framework requirement at the moment.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
src/
  components/        UI rendering and interaction logic
  data/
    sites/           One JSON file per flying spot
    sources.js       Shared weather source definitions
  i18n.js            UI translations
  main.js            App bootstrap and global state
  styles/            Main stylesheet
public/
  logo.png
  no-webcam.svg
```

## How developers can contribute

Developers can contribute in several ways:

- improve architecture and maintainability
- add new UI features
- improve mobile usability
- expand localization
- add validation for spot data
- improve accessibility
- improve weather source handling
- add contribution tooling for non-technical users

Typical workflow:

1. Fork the project
2. Create a branch
3. Implement the change
4. Run `npm run build`
5. Open a pull request

Feature ideas are welcome even before code exists. If you want to propose a new capability, a better UX, or a new data structure, open an issue or PR with a clear description.

## How non-technical contributors can help

You do not need to write code to make ParaglideSpot better.

If you know a flying spot and want it added, you can simply fill in the information using the template below and send it to the maintainers or submit it through a contribution channel when available.

The most useful contributions are:

- accurate takeoff and landing coordinates
- preferred wind directions
- reliable local contacts
- shuttle information
- webcam links
- weather links that local pilots actually use
- official rules or club pages

## New spot template

Each location is stored as one JSON file in `src/data/sites/`.

Here is the template currently used by the project:

```json
{
  "id": "spot-slug",
  "name": "Spot Name - Subtitle",
  "region": "piemonte",
  "province": "TO",

  "website": "https://...",
  "joinUrl": "https://...",
  "rulesUrl": "https://...",

  "contacts": [
    { "label": "Italian (Mario)", "phone": "333 123 4567" },
    { "label": "English (John)", "phone": "334 765 4321" }
  ],

  "shuttle": {
    "label": "Shuttle Service",
    "contactLabel": "Mario",
    "phone": "333 123 4567"
  },

  "altitude": "400–1500 m",
  "windDirs": ["N", "NW"],

  "lat": 44.0,
  "lon": 7.5,

  "takeoffs": [
    {
      "name": "Main Takeoff",
      "lat": 44.0,
      "lon": 7.5,
      "altitude": 1500,
      "windDirs": ["NW"],
      "type": "Easy - paraglider",
      "season": "All year",
      "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=44.0,7.5"
    }
  ],

  "landing": {
    "name": "Town - Area",
    "lat": 44.0,
    "lon": 7.5,
    "altitude": 400,
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&destination=44.0,7.5",
    "notes": ""
  },

  "webcams": [
    {
      "label": "Main Takeoff",
      "url": "https://example.com/cam.jpg",
      "embedUrl": "https://example.com/cam.jpg",
      "type": "jpg",
      "refreshSeconds": 120
    }
  ],

  "meteo": {
    "meteoParapente": "https://meteo-parapente.com/#/44.0,7.5,11",
    "windyUrl": "https://www.windy.com/44.0/7.5?44.0,7.5,11",
    "windy": { "lat": 44.0, "lon": 7.5, "zoom": 10, "overlay": "wind" },
    "meteoblue": "https://www.meteoblue.com/it/tempo/settimana/nome_italia",
    "xcmeteor": "https://www.xcmeteor.com/meteo?lat=44.0&lon=7.5"
  },

  "alerts": [
    {
      "title": "Important notice",
      "message": "Important message shown in a highlighted alert widget."
    }
  ],

  "notes": ""
}
```

## Minimal contribution checklist for a new spot

If you want to submit a new location, try to provide at least:

- spot name
- region
- province
- main coordinates
- at least one takeoff
- landing
- useful wind directions
- one local contact
- at least one weather source

The more accurate the input, the more useful the site becomes.

## Final note

If you are a developer, propose features, fixes, refactors, and ideas.

If you are a pilot, club member, or local expert, share the spot data.

Both kinds of contribution are equally valuable.

Good flights to everyone.
