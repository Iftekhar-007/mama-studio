# Mama Studio Furniture — README

A clean, modern furniture e‑commerce site built with the Next.js App Router. This README covers a short project description, setup & installation, and a route summary so anyone can run and explore the project fast.

> **Note:** The text is bilingual (English + Bangla) where helpful so teammates can follow along comfortably.

---

## 🛋️ Short Project Description (সংক্ষিপ্ত বিবরণ)

**Mama Studio Furniture** is a responsive storefront for browsing, searching, and purchasing furniture. It features product listings, detailed pages with specs & images, cart & checkout flow, and a protected dashboard for admins. Auth is handled with NextAuth (Google OAuth). Data is persisted in MongoDB. Styling uses Tailwind CSS (with optional DaisyUI/MUI components).

**Key Features**

- Google Sign‑In via NextAuth

- API routes for products, auth/session, and orders
- Deployed to Vercel (recommended)

---

## ⚙️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript or JavaScript (project supports either)
- **Styles:** Tailwind CSS (+ DaisyUI / MUI optional)
- **Auth:** NextAuth.js (Google provider)
- **Database:** MongoDB (Atlas or self‑hosted)
- **State/Data:** React, TanStack Query (optional)
- **Deployment:** Vercel

---

## 🚀 Setup & Installation (ইনস্টলেশন)

### 1) Prerequisites

- Node.js 18+ (LTS)
- npm or pnpm or yarn
- MongoDB connection string (MongoDB Atlas recommended)
- Google OAuth credentials (Client ID & Secret)

### 2) Clone & Install

```bash
# Clone
git clone <your-repo-url> mama-studio-furniture
cd mama-studio-furniture

# Install deps (choose one)
npm install
# or
yarn
# or
pnpm install
```

### 3) Environment Variables

Create a `.env.local` file in the project root:

```ini
# App
NEXT_PUBLIC_SITE_NAME=Mama Studio Furniture
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_long_random_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
MONGO_URI=your_mongodb_connection_uri

# (Optional) Stripe — enable later if online payments are added
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

> **Tip (Bangla):** `NEXTAUTH_SECRET` generate করতে `openssl rand -base64 32` (Linux/Mac) বা অনলাইন জেনারেটর ব্যবহার করতে পারেন।

### 4) Development

```bash
# Start dev server
npm run dev
# Visit http://localhost:3000
```

### 5) Build & Start

```bash
npm run build
npm run start
```

### 6) Deploy (Vercel)

- Push to GitHub
- Import the repo into Vercel dashboard
- Add all env vars in **Project Settings → Environment Variables**
- Set **Framework Preset: Next.js**
- Deploy

---

## 📁 Suggested Project Structure

```
src/
  app/
    (public)/
      layout.tsx
      page.tsx                 # Home
    products/
      page.tsx                 # All products
      [id]/page.tsx            # Product details
    cart/page.tsx
    checkout/page.tsx
    about/page.tsx
    contact/page.tsx
    dashboard/
      layout.tsx               # Protected layout
      page.tsx                 # User dashboard
      admin/
        page.tsx               # Admin dashboard
    api/
      auth/[...nextauth]/route.ts
      products/route.ts        # GET/POST
      products/[id]/route.ts   # GET/PATCH/DELETE
      orders/route.ts          # POST user order
  lib/
    db.ts                      # Mongo client
    auth.ts                    # NextAuth config
    utils.ts
  components/
    ui/*
    shared/*
  styles/globals.css
```

---

## 🧭 Route Summary (রুট সংক্ষেপ)

> App Router ( `/src/app` ) ভিত্তিক। আপনার প্রকল্পে route ভিন্ন হলে এখানে আপডেট করুন।

### Public Routes

- `/` — Home: hero, featured products, categories
- `/products` — Product listing with filters/sort/search
- `/products/[id]` — Product details (images, specs, add‑to‑cart)
- `/about` — Brand story, values
- `/contact` — Contact form / showroom info
- `/api/products` — `GET` list products, `POST` create (admin only)
- `/api/products/[id]` — `GET` by id, `PATCH`/`DELETE` (admin only)

### Auth & User

- `/api/auth/[...nextauth]` — NextAuth route handler
- `/cart` — Shopping cart (client state + persisted if authed)
- `/checkout` — Checkout page (requires sign‑in)
- `/dashboard` — User dashboard (orders, profile)

### Admin

- `/dashboard/admin` — Admin overview
- `/dashboard/admin/products` — CRUD products
- `/dashboard/admin/orders` — Manage orders

> **Guards/Middleware**

- **Protected**: `/checkout`, `/dashboard/**` — requires authenticated session
- **Admin‑only**: `/dashboard/admin/**`, `POST/PATCH/DELETE` under `/api/products*`

---

## 🔐 Authentication (NextAuth)

- Provider: **Google**
- Session strategy: `jwt`
- Role stored in DB (e.g., `user`, `admin`) and checked in server components/middleware

**Example checks**

- Server component: read session via `getServerSession`
- Middleware: block unauthorized access to `/dashboard/admin/*`

---

## 🗄️ Database (MongoDB)

- Collections: `products`, `orders`, `users`
- Indexes: consider `products.slug`, `products.category`, `products.price`

---

## 🧪 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## ✅ Quality & Conventions

- ESLint + Prettier configured
- Commit messages: Conventional Commits (e.g., `feat: add sofa filters`)
- PR checks: build, lint, typecheck

---

## 🧰 Common Tasks

- **Add a product:** Dashboard → Admin → Products → Add
- **Update stock/price:** Dashboard → Admin → Products → Edit
- **Promote to Admin:** Update `users.role` in DB

---

## 📎 Notes

- Replace placeholder copy (logo, brand story, contact info)
- If Stripe is enabled, secure webhooks at `/api/webhooks/stripe`
- Images should be optimized via `next/image`

---

## 📜 License

Proprietary – © Mama Studio Furniture. All rights reserved.
