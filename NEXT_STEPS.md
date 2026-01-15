# Next Steps for Pixel-Perfect Migration

## ✅ Completed

1. **Project Setup**
   - Next.js 14+ with TypeScript and Tailwind CSS
   - Prisma ORM configured
   - Database schema created
   - Assets copied (images, videos, CSS, JS)

2. **API Routes Created**
   - `/api/speakers` - Fetch speakers by year
   - `/api/sponsors` - Fetch sponsors by year
   - `/api/partners` - Fetch partners by year
   - `/api/activations` - Fetch activations by year
   - `/api/agendas` - Fetch agendas by year

3. **Components Created**
   - Layout with Header, Footer, Social Icons
   - Banner section
   - Conference section
   - Speakers section with slider
   - Sponsors section
   - Partners section
   - Tickets section
   - FAQ section
   - And more...

## 🔧 Things to Fix/Complete

### 1. Image Handling
- **Active Storage Images**: The Rails app uses Active Storage for speaker/sponsor images. You need to:
  - Either migrate images from Active Storage to a public folder
  - Or create an API endpoint to serve Active Storage images
  - Update `SpeakerCard` and `SponsorCard` to use proper image URLs

### 2. Missing Sections
- **Activations Section**: Currently returns null - needs Active Storage image handling
- **Overview Section**: Partially implemented - needs all logo images
- **Highlights Section**: Needs verification of all image paths

### 3. JavaScript Dependencies
- Ensure jQuery, Bootstrap, and Slick are properly loaded
- Verify all custom scripts work in Next.js environment
- May need to convert some jQuery code to React/Next.js

### 4. Environment Variables
- Create `.env.local` with proper `DATABASE_URL`
- Set `NEXT_PUBLIC_BASE_URL` if deploying

### 5. Testing
- Test all API routes
- Verify database connections
- Test all page sections render correctly
- Check responsive design
- Verify all links work

### 6. Additional Pages Needed
- `/ibw_2025/speakers` - All speakers page
- `/ibw_2025/agendas` - Agenda page
- `/ibw_2025/demoday` - Demo day page
- `/ibw-2024` - IBW 2024 pages
- `/ibw-2023` - IBW 2023 pages
- `/tickets` - Tickets page
- `/terms-and-conditions` - Terms page
- `/thank-you` - Thank you page

### 7. Form Handling
- Registration forms need API endpoints
- User details submission
- Email subscription

### 8. Active Storage Migration
The biggest challenge is handling Active Storage images. Options:
1. **Keep Rails for file serving**: Run Rails API alongside Next.js just for file serving
2. **Migrate to cloud storage**: Upload all Active Storage files to S3/Cloudinary and update URLs
3. **Local migration**: Copy all Active Storage files to public folder (if feasible)

## 🚀 To Run

1. **Set up environment**:
   ```bash
   cd india-blockchain-week-nextjs
   # Create .env.local with DATABASE_URL
   ```

2. **Generate Prisma client**:
   ```bash
   npx prisma generate
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Access**: http://localhost:3000

## 📝 Notes

- All CSS and JS from Rails app are included
- Bootstrap and Slick slider are loaded
- The structure matches the Rails app exactly
- Some components may need refinement based on actual data
- Image paths assume assets are in `/public/assets/images/2025/`

## 🎨 Styling

The app uses the exact same CSS files from Rails:
- `/public/assets/stylesheets/2025/bootstrap.min.css`
- `/public/assets/stylesheets/2025/slick.css`
- `/public/assets/stylesheets/2025/style.css`

All styling should match pixel-perfect once images are properly configured.
