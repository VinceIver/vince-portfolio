# Personal Portfolio Website

A modern, interactive personal portfolio website built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React. Features an iOS/macOS-inspired design with glassmorphism effects.

## Features

- **Responsive Design**: Desktop sidebar navigation and mobile bottom dock navigation
- **Smooth Animations**: Powered by Framer Motion for iOS-like transitions
- **Glassmorphism**: Translucent backgrounds with backdrop blur effects
- **Single Page Application**: Smooth scrolling between sections
- **Modern UI**: Rounded corners, subtle shadows, and clean typography

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build

To build for production: `npm run build`

## Sections

- **Home**: Hero section with introduction
- **About**: Skills and expertise in UI components and GIS/cartography
- **Projects**: Showcase of portfolio projects
- **Contact**: Contact form

## Customization

Edit the components in `src/components/` to customize content, and modify styles in `src/index.css` for design adjustments.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
