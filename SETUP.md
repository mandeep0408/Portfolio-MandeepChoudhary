# Portfolio Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Line ~43: Change "Your Name" to your actual name
   - Line ~50: Update the role/title
   - Line ~56: Customize the value proposition

2. **About Section** (`components/About.tsx`):
   - Lines ~35-39: Update the professional summary
   - Lines ~14-17: Update stats (Years Experience, Projects, Technologies, Domains)

3. **Experience Section** (`components/Experience.tsx`):
   - Update the `experiences` array (lines ~11-51) with your actual work experience
   - Modify company names, roles, durations, and bullet points

4. **Projects Section** (`components/Projects.tsx`):
   - Update the `projects` array (lines ~13-62) with your actual projects
   - Add real GitHub and demo links
   - Update tech stacks and descriptions

5. **Research Section** (`components/Research.tsx`):
   - Update the `publications` array (lines ~11-23) with your publications
   - Add real DOIs and links

6. **Contact Section** (`components/Contact.tsx`):
   - Lines ~7-17: Update email, LinkedIn, and GitHub links
   - Implement form submission (currently uses placeholder)

7. **Footer** (`components/Footer.tsx`):
   - Line ~5: Update social media links
   - Line ~28: Update copyright name

8. **Metadata** (`app/layout.tsx`):
   - Update title and description in metadata (lines ~8-12)

### Resume
- Add your resume PDF file to the `public` folder
- Update the resume link in `components/Hero.tsx` (line ~76) if the filename is different from `resume.pdf`

### Form Submission
The contact form currently uses a placeholder submission handler. To enable real form submission:

1. Set up a backend service (e.g., Formspree, SendGrid, or your own API)
2. Update the `handleSubmit` function in `components/Contact.tsx` (lines ~34-42)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This Next.js application can be deployed to:
- **Vercel** (recommended - seamless Next.js integration)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js

## Features Included

✅ Dark/Light mode toggle
✅ Smooth scroll animations
✅ Responsive design (mobile-first)
✅ SEO-friendly structure
✅ Accessible navigation
✅ Professional animations (Framer Motion)
✅ All 8 required sections

## Color Customization

Colors are defined in `tailwind.config.ts`. The current palette:
- Primary: #0B1C2D (Deep Navy)
- Secondary: #2563EB (Blue)
- Accent: #10B981 (Emerald)
- Light Background: #F8FAFC
- Dark Background: #020617

You can customize these colors in the `tailwind.config.ts` file.

