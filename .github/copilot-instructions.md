# Bahama Mama Website — AI Agent Guide (Demo-first)

This is a demo-first Next.js 14 site showcasing CRM/CMS + lead-gen for a smoke shop franchise. No database is required for local runs; Supabase and AI integrations are mocked until real keys are provided.

## Big picture
- App Router with mixed server/client components; performance and SEO-first.
- Lead flow (demo): EnhancedChatBot and LeadCaptureForm collect info → POST to lightweight routes → console/log + success UX.
- Production path: Same flow persists, but writes to Supabase using types in `lib/supabase.ts` and schema in `supabase/schema.sql`.

## Where things live (examples)
- Lead gen UI: `components/EnhancedChatBot.tsx`, `components/LeadCaptureForm.tsx`
- Demo API: `app/api/contact/route.ts` (logs + success). Chatbot calls `/api/chat/respond` and gracefully falls back if unimplemented.
- Data layer: `lib/supabase.ts` (singleton client; auto‑mock when env vars missing; includes types + `getPaginatedData`).
- SEO/perf: `app/layout.tsx` (LocalBusiness schema, GA, error boundaries), `lib/seo-config.ts`, `next.config.js`, `netlify.toml`.
- Admin: `app/admin/page.tsx` (demo scaffold). Access is gated by `middleware.ts` via `admin_session` cookie.

## Demo mode behaviors
- Missing Supabase envs → `lib/supabase.ts` returns a mock client; no network writes.
- Contact form → toast success only; API returns `{ success: true }` and logs payload.
- Chatbot → if `/api/chat/respond` is absent, shows friendly fallback; `saveLead` logs data.
- Admin → placeholder page lists planned CRM features.

## Develop and run
```bash
npm run dev      # Start Next.js locally (no DB required)
npm run build    # Validate performance/SSR build
```
Optional envs (enable prod integrations when ready):
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (real DB)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION`
- `GOOGLE_AI_API_KEY` (chatbot intelligence; not required for demo)

## Project patterns that matter here
- Client-heavy features use `"use client"` + `dynamic(..., { ssr: false })`.
- Error isolation with `ClientErrorBoundary` around Navigation/page/chatbot in `app/layout.tsx`.
- React Query provided via `components/QueryProvider` for future server state.
- Tailwind design system with `primary`/`secondary` palette and Inter/Playfair fonts.
- Images via Cloudinary/remote patterns; `unoptimized` on Netlify.

## When converting this demo to production
1) Provide Supabase envs; replace demo inserts with real `supabase.from('leads').insert(...)` inside form/chat handlers.
2) Implement `/api/chat/respond` to call Google Generative AI with business context.
3) Flesh out `/admin` screens (filters by lead `status`, communication logs, follow-ups) using types in `lib/supabase.ts`.

## Quick pitch checklist (what to show live)
- Chatbot capturing service, budget, and email + graceful AI fallback.
- Contact form validation + success UX (no DB).
- SEO schema in page source, Lighthouse/Core Web Vitals friendly.
- Admin demo page + route protection via middleware.