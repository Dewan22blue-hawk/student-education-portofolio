# Denny Irawan - Professional Portfolio Website

> Modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion

## 🌟 Features

- **Modern Design**: Glassmorphism effects with dark mode theme
- **Smooth Animations**: Powered by Framer Motion for 60fps animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation support
- **Fast Performance**: Optimized build with Vite

## 🚀 Tech Stack

- **Framework**: React 18.3+ with Vite
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 11.0+
- **Icons**: Lucide React
- **Build Tool**: Vite 7.3+

## 📁 Project Structure

```
portfolio-website/
├── public/               # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation with glassmorphism
│   │   ├── Hero.jsx     # Hero section with animations
│   │   ├── About.jsx    # Professional summary & stats
│   │   ├── Experience.jsx  # Work history timeline
│   │   ├── Skills.jsx   # Skills & certifications
│   │   ├── Projects.jsx # Project showcase
│   │   ├── Education.jsx   # Academic background
│   │   ├── Contact.jsx  # Contact form
│   │   └── Footer.jsx   # Footer with links
│   ├── data/
│   │   └── cvData.js    # Centralized CV data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20.18+ (recommended: 20.19+ or 22.12+)
- npm 10.8+

### Install Dependencies

```bash
cd portfolio-website
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Updating CV Data

All personal information is centralized in `src/data/cvData.js`. To update your portfolio content:

1. Open `src/data/cvData.js`
2. Modify the exported objects:
   - `profileData` - Personal information and summary
   - `experienceData` - Work history
   - `volunteeringData` - Volunteer activities
   - `educationData` - Academic background
   - `skillsData` - Technical and interpersonal skills
   - `certificationsData` - Professional certifications
   - `projectsData` - Portfolio projects
   - `socialLinks` - Social media links

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { ... },    // Blue tones
  secondary: { ... },  // Purple tones
  accent: { ... },     // Green tones
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation item to `src/data/cvData.js` in `navItems`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📄 License

© 2026 Denny Irawan. All rights reserved.

## 👨‍💻 Author

**Denny Irawan, A.Md.Kom.**
- Email: dennyirawan70204@gmail.com
- LinkedIn: [denny_irawan22](https://linkedin.com/in/denny_irawan22)
- Location: Surakarta, Indonesia

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
