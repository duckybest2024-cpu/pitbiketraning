# Little Riders Pit Bike Academy 🏍️

A single-page marketing website for a kids' pit bike training school. Built with
plain HTML, CSS and JavaScript — no build step, no dependencies.

## Sections

- **Hero** — headline, key stats and a beginner "first ride" card
- **Programs** — Tiny Treads (5–7), Trail Blazers (8–12), Race Ready (11–15)
- **Safety** — gear, speed limiters, fenced track, first aid + a safety pledge
- **Coaches** — meet-the-team cards
- **Pricing** — taster, 4-week course and membership
- **Testimonials** — parent quotes
- **FAQ** — accordion of common questions
- **Contact** — booking form with front-end validation

## Run locally

Open `index.html` directly in a browser, or run the bundled server:

```bash
npm start          # serves on http://localhost:3000 (or $PORT)
```

## Deploy to Railway

This repo is Railway-ready. Two options:

1. **Dashboard (no setup):** In Railway, choose **New Project → Deploy from GitHub repo**
   and pick this repository / branch. Railway auto-detects Node via Nixpacks, runs
   `npm start`, and serves the site. Click **Generate Domain** to get a public URL.
2. **CLI:** With the Railway CLI installed and logged in:
   ```bash
   railway up
   ```

`server.js` binds to Railway's `$PORT` automatically, and `railway.json` sets the
start command and restart policy.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `styles.css` | Styling, layout and responsive rules |
| `script.js` | Mobile menu, footer year, booking form handling |
| `server.js` | Zero-dependency static server (binds to `$PORT`) |
| `package.json` | `npm start` script + Node engine |
| `railway.json` | Railway build/deploy config |

## Notes

The booking form is a front-end demo: it validates input and shows a confirmation
message, but does not send data anywhere. Wire it up to a backend or form service
(e.g. Formspree, Netlify Forms) to receive real bookings.
