# GDGoC UGM Front-End

A two-page React web app built from the official Figma design and powered by the GDGoC UGM API. It was made for the GDGoC UGM Open Recruitment 2026/27 Front-End assignment.

## Demo

- **Live site:** https://study-case-assignment-fe-gd-go-c.vercel.app/
- **Video walkthrough:** https://drive.google.com/drive/folders/1ZoC0Xj1EpTzm0h7rE244KENIuQ--cdMn
- **Design:** https://www.figma.com/design/yx06YRA90jBEX0Mmu64RBx/GDGoC-%E2%80%93-Open-Recruitment?t=GfHHA5dSz65btJjj-0 
          : This project implements the **Home** and **Overview** pages.

## Table of Contents

- [Features](#features)
- [Pages and Routes](#pages-and-routes)
- [Data and API](#data-and-api)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Notes and Design Decisions](#notes-and-design-decisions)
- [Known Limitations](#known-limitations)

## Features

- Two pages built from Figma: **Home** (landing page) and **Overview**.
- Live data from the GDGoC UGM API: navigation, learning tracks, learning formats, learning journey, and FAQs.
- Every data section handles three states: a loading spinner, an error message with a "Try Again" button, and an empty state.
- Client-side routing with React Router, including a "Coming Soon" page for routes that are not built yet.
- Anchor links on the Overview page that scroll smoothly to each section.
- Colors and font from Figma are defined once as Tailwind theme tokens.
- Ready for Vercel: a rewrite rule makes a page refresh work on any route, such as `/overview`.

## Pages and Routes

- `/` is the **Home** page (`pages/LandingPage.jsx`). It shows the hero, community introduction, learning tracks, learning formats, project ideas, getting started, belonging statement, FAQs, invitation, and footer.
- `/overview` is the **Overview** page (`pages/Overview.jsx`). It shows the page intro, section links, learning tracks, learning outcomes, learning formats, learning journey, starting-point guidance, invitation, and footer.
- Any other path shows the **Coming Soon** page (`pages/ComingSoon.jsx`), a placeholder with a link back to Home.

The route is written as `/Overview` in `src/App.jsx`. React Router matches paths without case sensitivity, so `/overview` works too. The About and Contact links in the navigation bar lead to the Coming Soon page.

## Data and API

The app reads data from `https://gdgoc-ugm-api.vercel.app/api`. Each response has the shape `{ success, count, data }`, and the app uses the `data` field.

These endpoints are used:

- `/navigation` is used by `Navigation` and `Footer`, on both pages.
- `/tracks` is used by `TrackSection`, on both pages.
- `/formats` is used by `LearningFormats` on the Home page (first three items only) and by `Formats` on the Overview page.
- `/journey` is used by `Journey`, on the Overview page.
- `/faqs` is used by `Faqs`, on the Home page.

### How the data flows

1. `api/api.js` has one helper, `get(path)`. It calls `fetch`, throws an error when the response is not OK, and returns `json.data`. Each endpoint has its own small function (`getTracks`, `getFAQs`, `getFormats`, `getJourney`, `getNavigation`).
2. `src/hooks/useFetch.js` is a custom hook. It takes one of those functions, runs it when the component first appears, and returns `{ data, loading, error, retry }`.
3. Each section component reads those values and chooses what to render:
   - `loading` is true: `<Spinner />`
   - `error` is set: `<ErrorMessage />` with a retry button
   - `data` is empty: `<EmptyState />`
   - otherwise: the real content

The three status components live in `src/components/StatusViews.jsx`. Components never call `fetch` directly, so the API address and the response handling stay in one place.

The folder `api/` also contains saved sample responses (`*.json`). They are for reference only and the app does not import them.

## Tech Stack

- [React](https://react.dev) `^19.3.1` for the UI components
- [Vite](https://vite.dev) `^8.3.5` as the dev server and build tool
- [Tailwind CSS](https://tailwindcss.com) `^4.3.4` for styling, through the `@tailwindcss/vite` plugin
- [React Router](https://reactrouter.com) `^7.18.5` for page navigation (`react-router-dom`)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) `^1.89.0` for linting
- [Vercel](https://vercel.com) for hosting

The project uses plain JavaScript (JSX), not TypeScript.

## Project Structure

```text
.
├── api/                         # API helper and saved sample responses
│   ├── api.js                   # get() helper and one function per endpoint
│   └── *.json                   # sample API responses (reference only)
├── pages/                       # One file per route
│   ├── LandingPage.jsx
│   ├── Overview.jsx
│   └── ComingSoon.jsx
├── public/                      # Static files: SVG icons, illustrations, one PNG
├── src/
│   ├── components/
│   │   ├── common/              # Used on both pages: Navigation, Footer, CommunityInvitation
│   │   │   └── track/           # TrackSection, TrackCard
│   │   ├── icons/               # Small SVG icon components
│   │   ├── landing_page/        # Sections used only on the Home page
│   │   ├── overview/            # Sections used only on the Overview page
│   │   ├── SectionIntro.jsx     # Reusable section label, title, and link
│   │   └── StatusViews.jsx      # Spinner, ErrorMessage, EmptyState
│   ├── hooks/
│   │   └── useFetch.js          # Data fetching hook (loading, error, retry)
│   ├── App.jsx                  # Route definitions
│   ├── index.css                # Tailwind import and theme tokens
│   └── main.jsx                 # App entry point, wraps the app in BrowserRouter
├── index.html                   # HTML shell and Google Fonts link
├── vercel.json                  # Rewrite rule for client-side routing
├── vite.config.js               # Vite configuration
├── .oxlintrc.json               # Lint rules
└── package.json                 # Dependencies and scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20.19 or newer, or 22.12 or newer (required by Vite 8)
- npm (installed together with Node.js)
- Git
- An internet connection, because the data comes from the live API

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173`. The page reloads automatically when you save a file.

### Available Scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the code with Oxlint.

## Design System

Design values from Figma are saved as theme tokens in `src/index.css`. Tailwind turns each `--color-*` token into utility classes, for example `bg-primary` or `text-paragraph`.

- `--color-primary` (`#4285F4`): brand blue
- `--color-boxes` (`#4284F4`): blue buttons and accent boxes
- `--color-textPrimary` (`black`): primary text color
- `--color-textSecondary` (`#1967D2`): links and active navigation items
- `--color-paragraph` (`#5F6368`): body text
- `--color-backgroundPrimary` (`#FFF`): page background
- `--color-backgroundSecondary` (`#F1F3F4`): alternate section background and footer
- `--color-insideBoxes` (`#FFFFFF`): color for content inside the blue boxes

The font is **Google Sans**, loaded from Google Fonts in `index.html` and set as the default sans-serif font in the theme.

## Deployment

The app is deployed on Vercel with these settings:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

The app is a single-page application, so `vercel.json` sends every path to `index.html`. Without this rule, refreshing the page on `/overview` would return a 404 error.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

When the repository is connected to Vercel, every push to the `main` branch starts a new deployment.

## Notes and Design Decisions

- **API first.** Text that exists in the API (track names, formats, journey steps, FAQs, navigation labels) comes from the API. Copy from the Figma design is used only where the API has no matching field, such as section headings and hero text.
- **Some content is static on purpose.** The three-item community promise strip and the learning outcomes table are written directly in the code. In the footer, the link list comes from the navigation endpoint, while the description, social links, and copyright text are static.
- **Data fetching is separate from the UI.** The API helper and the `useFetch` hook are the only places that deal with requests, so components stay focused on what to display.
- **Each section loads its own data.** This keeps components independent. The trade-off is that `Navigation` and `Footer` both request `/navigation`. A shared data layer or a cache could remove the duplicate request.
- **Small, reusable components.** `SectionIntro`, `StatusViews`, and the track and format cards are used in more than one place.

## Known Limitations

- The layout is desktop-first and follows the 1440 px Figma frames. Tablet and mobile breakpoints are not implemented yet.
- Only two pages are built, as the assignment requires. Other routes (About, Contact) show the Coming Soon page.
- There are no automated tests.

## Acknowledgements

The Figma design and the API were provided by GDGoC UGM for the Open Recruitment 2026/27 Front-End assignment.