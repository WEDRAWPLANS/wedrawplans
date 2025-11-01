# WEDRAWPLANS — Next.js Lead Gen Site

## Quick Start (Local)
1. `npm install`
2. Create `.env.local` (see `.env.example`)
3. `npm run dev`
4. Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. Import the repo at https://vercel.com/new
3. In Vercel → Project → Settings → Environment Variables, add:
   - NEXT_PUBLIC_LIVE=1
   - NEXT_PUBLIC_MAP_EMBED_URL=https://your-google-my-maps-embed-url
   - SMTP_HOST=...
   - SMTP_PORT=587
   - SMTP_USER=...
   - SMTP_PASS=...
   - LEAD_TO=info@wedrawplans.com
   - LEAD_FROM=no-reply@wedrawplans.co.uk
   - REPLY_FROM=WEDRAWPLANS <no-reply@wedrawplans.co.uk>
4. Deploy

## Notes
- The homepage includes Diagnostics tests (Run tests) to verify behaviour.
- The /api/lead route uses Nodemailer. Ensure SMTP values are correct.
- TailwindCSS is configured in tailwind.config.js and styles/globals.css.
