# Rails to Next.js Migration Guide

## Overview
This document outlines the migration of the India Blockchain Week Rails application to Next.js.

## Architecture Decision
- **Frontend**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (can be migrated to separate API later if needed)
- **Database**: PostgreSQL (same database, using Prisma ORM)
- **Admin Panel**: Custom Next.js admin (replacing ActiveAdmin)
- **Authentication**: NextAuth.js (replacing Devise)
- **File Storage**: Local storage initially (can migrate to S3/Cloudinary later)

## Migration Steps

### Phase 1: Setup ✅
- [x] Create Next.js project
- [x] Install Prisma
- [ ] Create Prisma schema
- [ ] Set up database connection
- [ ] Copy assets (images, videos, CSS)

### Phase 2: Database & API
- [ ] Create Prisma models matching Rails schema
- [ ] Set up API routes for all resources
- [ ] Create database utilities and helpers
- [ ] Migrate file upload handling

### Phase 3: Pages & Components
- [ ] Home page (IBW 2025)
- [ ] IBW 2024 pages
- [ ] IBW 2023 pages
- [ ] Speakers pages
- [ ] Agenda pages
- [ ] Demoday pages
- [ ] Side events pages
- [ ] Tickets page
- [ ] Thank you page
- [ ] Terms and conditions

### Phase 4: Admin Panel
- [ ] Set up NextAuth for admin authentication
- [ ] Create admin dashboard
- [ ] Speakers management
- [ ] Agenda management
- [ ] Sponsors/Partners management
- [ ] All other admin CRUD operations

### Phase 5: Features
- [ ] User details/registration
- [ ] Calendar integration (add to calendar)
- [ ] Reclaim sessions (for IBW 2024)
- [ ] Twitter iframe loading
- [ ] Countdown timers
- [ ] Form submissions

### Phase 6: Testing & Deployment
- [ ] Test all functionality
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Deployment setup

## Key Differences

### Rails → Next.js
- **Views** → React Components (TSX)
- **Controllers** → API Routes or Server Components
- **Models** → Prisma Models
- **ActiveAdmin** → Custom Admin Panel
- **Devise** → NextAuth.js
- **Active Storage** → File uploads (local or cloud)
- **Sprockets** → Next.js Image optimization

### Database
- Same PostgreSQL database
- Prisma replaces ActiveRecord
- Migrations handled by Prisma

## File Structure

```
india-blockchain-week-nextjs/
├── app/
│   ├── api/              # API routes
│   ├── admin/            # Admin panel pages
│   ├── ibw-2023/         # IBW 2023 pages
│   ├── ibw-2024/         # IBW 2024 pages
│   ├── ibw-2025/         # IBW 2025 pages
│   ├── components/       # React components
│   └── lib/              # Utilities, Prisma client
├── prisma/
│   └── schema.prisma     # Database schema
├── public/
│   └── assets/           # Static assets
└── styles/               # Global styles
```

## Notes
- We'll keep the same database, so data migration is not needed
- Assets need to be copied from Rails app
- Active Storage blobs need to be handled (either migrate files or keep Rails for file serving initially)
