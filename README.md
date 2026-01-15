# India Blockchain Week - Next.js Application

This is the Next.js version of the India Blockchain Week application, migrated from Rails.

## Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL (same database as Rails app)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file (already created, but verify DATABASE_URL):
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/india_blockchain_week_development?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-in-production"
```

3. Generate Prisma Client:
```bash
npx prisma generate
```

4. (Optional) Pull database schema if needed:
```bash
npx prisma db pull
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
app/
├── api/              # API routes (Next.js API routes)
├── admin/            # Admin panel pages
├── ibw-2023/        # IBW 2023 pages
├── ibw-2024/        # IBW 2024 pages  
├── ibw-2025/        # IBW 2025 pages
├── components/       # React components
└── lib/              # Utilities, Prisma client

prisma/
└── schema.prisma    # Database schema

public/
└── assets/          # Static assets (images, videos, etc.)
```

## Migration Status

✅ **Completed:**
- Next.js project setup
- Prisma schema creation
- Database connection setup
- Basic project structure

🚧 **In Progress:**
- API routes
- Page components
- Admin panel

📋 **Todo:**
- Convert all pages from Rails views
- Set up authentication
- Migrate assets
- Admin panel implementation
- Testing

See `MIGRATION_GUIDE.md` for detailed migration plan.

## Database

The application uses the same PostgreSQL database as the Rails application. Prisma is used as the ORM instead of ActiveRecord.

## Key Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **NextAuth.js** - Authentication (to be implemented)

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Prisma Studio (database GUI)
npx prisma studio
```

## Notes

- The database schema matches the Rails application
- Assets need to be copied from the Rails `app/assets` directory
- Active Storage files will need to be handled separately (either keep Rails for file serving or migrate to cloud storage)
