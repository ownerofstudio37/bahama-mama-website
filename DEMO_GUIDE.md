# Bahama Mama Website — Live Pitch Runbook (3–5 min)

This runbook helps you demo the CRM/CMS + lead-gen experience for a smoke shop franchise. It’s demo-first: no database writes; all success flows and UX are real.

## 0:30 — Setup (optional)

```bash
# Start locally
npm run dev
# Open
open http://localhost:3000
```

Optional env (for a clear banner):

```bash
# In .env.local
NEXT_PUBLIC_DEMO_MODE=true
```

## 0:45 — What they’re seeing (context)

- Modern Next.js site optimized for SEO and speed
- Always-on assistant (chatbot) and a clear contact form
- Admin area and CRM/CMS scaffolding to manage leads/content later

## 1:15 — Chatbot lead capture (primary)

- Click the chat button (bottom-right).
- Say: “Do you handle vape supplies? my email is `demo@example.com`. budget under 1000.”
- Show:
  - AI reply returns immediately (scripted demo).
  - Lead chips appear (service/budget/email if detected).
  - Mention: “In production this writes to Supabase; here it logs to console.”

Talk track:

- “This bot qualifies leads: service, budget, contact. It can auto-route to a quote or 10‑min consult. In production, we plug in Google AI + Supabase for full CRM tracking.”

## 2:15 — Contact form UX

- Scroll to the contact form (or navigate to Contact page if present).
- Submit a realistic inquiry; validation is live.
- Show toast success and mention console log in API.

Talk track:

- “Every touchpoint becomes a lead. No DB now, but the same handlers seamlessly switch to Supabase when keys are provided.”

## 3:00 — Admin & SEO

- Visit `/admin` (shows demo dashboard card with planned features).
- Highlight route protection via middleware (`admin_session` cookie).
- View page source to show LocalBusiness schema (in `app/layout.tsx`).
- Note performance/image config in `next.config.js` (Cloudinary, AVIF/WebP).

Talk track:

- “Admin lists leads, statuses, notes, follow-ups and content. We already have the types and schema defined.”

## 4:00 — What happens when they say “Go”

- Provide Supabase keys → writes activate (existing types in `lib/supabase.ts`, tables in `supabase/schema.sql`).
- Implement AI route (`/api/chat/respond`) with Google Generative AI.
- Expand `/admin` with filters, logs, and reminders using existing types.

## Screenshot checklist (drop in your deck)

- Hero + navigation
- Chatbot open + lead chips (email/budget)
- Contact form after submit (success toast)
- Admin demo page
- Snippet of LocalBusiness JSON-LD from page source

## Appendix — Key files

- Chatbot: `components/EnhancedChatBot.tsx`
- Demo AI API: `app/api/chat/respond/route.ts`
- Contact API: `app/api/contact/route.ts`
- Data types + mock Supabase: `lib/supabase.ts`
- SEO config + schema: `lib/seo-config.ts` and `app/layout.tsx`
- Admin demo: `app/admin/page.tsx`
- Netlify/Next config: `netlify.toml`, `next.config.js`
