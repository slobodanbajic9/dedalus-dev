# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode support and smooth animations.

## Features

- 🌓 Dark/Light mode with system preference detection
- 🎨 Responsive design for all devices
- ✨ Smooth page transitions and animations using Framer Motion
- 📧 Contact form with email integration using Resend
- 🎯 SEO optimized
- 🚀 Fast page loads with Next.js 14
- 💅 Styled with Tailwind CSS
- 🔍 TypeScript for type safety

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend (for email)
- Radix UI (for UI components)
- Next Themes

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Create a `.env` file in the root directory and add your Resend API key:

```bash
RESEND_API_KEY=your_resend_api_key
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   └── page.tsx         # Home page
├── components/          # React components
├── data/               # Static data
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/            # Global styles
```

## Key Components

- **ThemeSwitcher**: Handles dark/light mode switching
- **Layout**: Main layout wrapper with responsive design
- **Contact Form**: Interactive form with email integration
- **Projects Gallery**: Showcase of portfolio projects
- **About Section**: Personal information and work experience
- **Navbar**: Responsive navigation with mobile menu

## Deployment

The project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

Required environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
