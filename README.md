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

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and content |
| `styles.css` | Styling, layout and responsive rules |
| `script.js` | Mobile menu, footer year, booking form handling |

## Notes

The booking form is a front-end demo: it validates input and shows a confirmation
message, but does not send data anywhere. Wire it up to a backend or form service
(e.g. Formspree, Netlify Forms) to receive real bookings.
