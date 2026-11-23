# SonoJS Mock 

Fake REST APIs with real JSON - a docs-first playground for frontends, demos, and prototypes.

Hit live endpoints, get predictable seeded responses, try auth flows, then wire the same URLs into your UI. No backend scaffolding required.

## Features

- **10 live resources** - Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries
- **Temporary API** - paste your own JSON and get a short-lived public REST URL (`/api/t/…`), no account, up to 5 live at a time
- **Fake Data Generator** - schema-driven fake JSON at `/generator` (people, ecommerce, content, and more); copy, download, or Create API
- **Image Generator** - placeholder SVG or real photos by URL at `/image/{w}/{h}` (optional `?type=real`, `?seed=`)
- **JSON Workbench** (in development) - format, validate, diff, search, and transform JSON in the browser at `/json` (TypeScript, Zod, YAML, CSV, utilities)
- **Playground** - in-browser request runner; request/response state survives client-side navigation between resources and routes
- **JSONPlaceholder-style catalog** - stable GET on shared seed data; writes return `403 READ_ONLY` in production (set `CATALOG_WRITABLE=true` locally for real CRUD)
- **English-only data** - all seeded resources and generated records use English text
- **Docs** - platform guide plus per-resource docs and live Preview UIs
- **Mock controls** - `?delay=` and `?status=` for loading and error UI demos
- **OpenAPI 3.1** - downloadable at `/openapi.json` for Postman, Insomnia, or codegen
- **Shared demo DB** - one Postgres seed for all visitors; no automatic wipe

## Quick start

```bash
cp .env.example .env.local
# set DATABASE_URL (Neon Postgres recommended)

npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | Yes | Postgres connection string |
| `CATALOG_WRITABLE` | Local dev optional | Set to `true` to allow POST/PATCH/DELETE on catalog APIs (default: writable in dev, read-only in production) |

## Product surfaces

| Path | Purpose |
|------|---------|
| `/` | Resource catalog + search |
| `/docs` | Platform guide (requests, errors, rate limit, shared data) |
| `/playground` | Try live requests in the browser (state kept across SPA navigation) |
| `/temporary` | Paste JSON → short-lived public REST URL |
| `/generator` | Fake Data Generator → copy / download / Create API |
| `/image-generator` | Build placeholder image URLs (SVG or real) |
| `/json` | JSON Workbench (in development) - format, compare, transform |
| `/image/{w}/{h}` | Image API - SVG body or 302 to Picsum (`?type=real`) |
| `/users`, `/posts`, … | Per-resource docs (+ Preview where available) |
| `/api/…` | Live JSON APIs (seeded resources) |
| `/api/t/…` | Temporary user-published JSON APIs |
| `/openapi.json` | OpenAPI 3.1 document |

## Shared demo data

Everyone reads the same seeded catalog (like JSONPlaceholder). **GET** always works. **POST, PATCH, and DELETE** on `/api/users`, `/api/posts`, and other catalog routes return `403` with `error.code: "READ_ONLY"` in production so the dataset stays stable.

For mutable data, use **Temporary API** (`/temporary` → `/api/t/…`).

Locally, reload seed data with:

```bash
npm run db:seed
```

Optional: `CATALOG_WRITABLE=true` in `.env.local` to exercise real CRUD against Postgres during development.

## Resources

| Resource | Base path | Notes |
|----------|-----------|--------|
| Auth | `/api/auth` | Login + current user |
| Users | `/api/users` | Search, role filters |
| Posts | `/api/posts` | Tags, published flag |
| Comments | `/api/comments` | Filter by `postId` |
| Albums | `/api/albums` | Filter by `userId` |
| Photos | `/api/photos` | Filter by `albumId` |
| Todos | `/api/todos` | Filter by `completed`, `userId` |
| Products | `/api/products` | Price, stock, category |
| Notifications | `/api/notifications` | Type + read flags |
| Countries | `/api/countries` | ISO code, region, population |

### Auth

```bash
# password is always "password" for seeded users
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"avachen","password":"password"}'

curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer <token>"
```

### Temporary API

Paste your own JSON at [/temporary](https://mock.sonojs.com/temporary) (or locally `/temporary`). You get a public URL like `/api/t/<id>` that lasts 1–24 hours.

```bash
# After creating in the UI, call the public URL:
curl http://localhost:3000/api/t/<id>
curl -X POST http://localhost:3000/api/t/<id> \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada"}'
```

No account required. Treat the link like a password - anyone with it can read and change the data until it expires. This is separate from the shared catalog resources above.

You can also publish from the **Fake Data Generator** (`Create API`) - same Temporary backend and limits.

**Limits**

| Limit | Value |
|-------|--------|
| Active APIs per browser | 5 |
| Creates per IP per hour | 20 (then HTTP 429) |
| Lifetime options | 1h, 6h, 12h, 24h (default 12h) |
| JSON size | 64 KB |
| Nesting depth | 8 |
| Array length | 500 |
| Object keys | 200 |
| After expiry | HTTP 410 |
| Global `/api` rate limit | ~60 req/IP/min (same as other routes) |

### Fake Data Generator

Open [/generator](https://mock.sonojs.com/generator) (or locally `/generator`). Generation runs **in the browser** - no backend call for the JSON itself.

| Capability | Detail |
|------------|--------|
| Data types | People, ecommerce, content, media, business, location (users, products, orders, posts, …) |
| Quantity | Presets up to **1,000** records |
| Output shape | **POST body** (no id/timestamps) or **API record** (with id / createdAt / updatedAt) |
| Locale packs | English country packs for generated names, places, and addresses |
| Preview | Live sample card for the selected type and fields |
| Export | Copy JSON or TypeScript types, download `.json` |
| Create API | Same Temporary API flow (lifetime select + publish); max **500** items / **64 KB** per publish |
| Session | Generator selections and results survive client-side route changes (cleared on full reload) |

### Image Generator

Open [/image-generator](https://mock.sonojs.com/image-generator) (or locally `/image-generator`) to pick size and mode, then copy a URL.

| Mode | URL | Behavior |
|------|-----|----------|
| SVG (default) | `/image/800/600` | Neutral placeholder SVG from SonoJS Mock |
| Real photo | `/image/800/600?type=real` | `302` redirect to [Picsum](https://picsum.photos) |
| Stable | add `?seed=my-seed` | Same SVG colors or same real photo every time |

```html
<img src="https://mock.sonojs.com/image/400/400" alt="Avatar" />
<img src="https://mock.sonojs.com/image/1200/630?type=real" alt="Cover" />
```

Optional query: `bg` / `fg` (hex) for custom SVG colors when you want full control.

### Playground

[/playground](https://mock.sonojs.com/playground) sends live requests against the seeded APIs. Resource choice, action, URL, body, and last responses are kept **per resource** while you navigate the site (SPA). A full page reload starts fresh (Bearer token may still be in `sessionStorage`).

### CRUD pattern

Most resources follow the same shape:

```
GET|POST           /api/<resource>
GET|PATCH|DELETE   /api/<resource>/:id
```

Lists return `{ data, pagination }`. Single items return `{ data }`. Errors return `{ error: { code, message } }`.

### Example

```bash
curl "http://localhost:3000/api/posts?limit=6&published=true"
```

```js
const res = await fetch("/api/posts?limit=6");
const { data, pagination } = await res.json();
```

## Mock controls

Append to any API request:

| Query | Effect |
|-------|--------|
| `?delay=800` | Artificial latency (0–5000 ms) |
| `?status=500` | Force an HTTP error (400–599) |

```bash
curl "http://localhost:3000/api/users?delay=1000"
curl "http://localhost:3000/api/posts/1?status=404"
```

## English-only API

Responses are **English by default**. The API accepts English data only; no language query parameter is required:

```bash
curl "http://localhost:3000/api/users?limit=3"
```

```js
const res = await fetch("/api/users?limit=3");
const { data } = await res.json();
```

- Works on list, single-item, create/update, and auth responses

## Rate limit

`/api/*` allows about **60 requests per IP per minute**.

Responses include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. Over limit returns `429` with `Retry-After`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Next.js dev server |
| `npm run build` / `start` | Production build & serve |
| `npm run lint` | ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Apply migrations |
| `npm run db:seed` | Wipe seed tables and reload defaults |
| `npm run db:studio` | Drizzle Studio |

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS
- **Drizzle ORM** + Neon / Postgres
- **Zod** request validation
- Deployed on **Vercel** (read-only catalog in production by default)
