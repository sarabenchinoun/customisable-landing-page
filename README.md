# Customizable Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)

A modern, customizable landing page template built with Next.js 14, TypeScript, Tailwind CSS, and Headless UI. Perfect for SaaS products, services, and digital products.

## ✨ Features

- 🎨 **Customizable Theme** - Easily change colors, fonts, and border radius with live preview
- 📱 **Fully Responsive** - Optimized for all screen sizes and devices
- 🔄 **Multiple Section Variants** - Two variants for each section (Hero, Features, CTA, etc.)
- 🎯 **SEO Optimized** - Built-in SEO best practices
- 🚀 **Performance First** - Optimized for Core Web Vitals and fast loading
- 📝 **Type-Safe** - Built with TypeScript for better development experience
- 🎭 **Modern UI Components** - Powered by Headless UI and Tailwind CSS

## 🚀 Quick Start

1. Clone the repository
```bash
git clone https://github.com/sarabenchinoun/customizable-landing-page.git
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                # Next.js app directory
├── components/         # React components
│   ├── ui/            # Base UI components
│   ├── layout/        # Layout components
│   └── sections/      # Landing page sections
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
└── docs/              # Documentation
```

## ⚙️ Configuration

Main configuration files:

- `lib/config.ts` - Site configuration (title, description, navigation)
- `lib/themes.ts` - Theme configuration (colors, fonts, border radius)
- `tailwind.config.ts` - Tailwind CSS configuration

## 🎨 Customization

### Theme

The template includes a built-in theme customizer that allows you to:

- Choose from multiple color schemes
- Adjust border radius for components
- Select different font combinations
- Toggle between section variants

### Content

All content is managed through the `lib/config.ts` file, making it easy to update:

- Site metadata
- Navigation links
- Section content
- Button labels and links
- Feature lists
- Testimonials

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [TypeScript](https://www.typescriptlang.org/)
