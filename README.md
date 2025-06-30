# 🚀 DEVLOP.ME Portfolio

A modern, accessible, and high-performance developer portfolio built with **Next.js 15**, **React 19**, and **Tailwind CSS**. This project demonstrates advanced frontend development skills including responsive design, accessibility, performance optimization, and modern React patterns.

## ✨ Features

### 🎨 Design & UI
- **Pixel-perfect responsive design** - Matches Figma designs exactly across all devices
- **Dark/Light theme toggle** - Seamless theme switching with localStorage persistence
- **Modern glassmorphism effects** - Contemporary design with backdrop blur and transparency
- **Smooth animations** - Powered by Framer Motion for enhanced user experience
- **Mobile-first approach** - Optimized for all screen sizes from mobile to desktop

### ⚡ Performance & Optimization
- **Skeleton loading states** - Improved perceived performance during content loading
- **Virtualized lists** - Efficient rendering of large datasets using react-window
- **Image optimization** - Next.js Image component with lazy loading and WebP support
- **Code splitting** - Automatic code splitting for optimal bundle sizes
- **SSR/SSG ready** - Server-side rendering and static generation capabilities

### 🛡️ Error Handling & Reliability
- **Custom ErrorBoundary** - Graceful error handling with fallback UI
- **TypeScript support** - Type-safe development (if applicable)
- **Robust state management** - Clean state handling with React hooks

### ♿ Accessibility
- **ARIA labels and roles** - Comprehensive screen reader support
- **Keyboard navigation** - Full keyboard accessibility
- **Focus management** - Proper focus indicators and tab order
- **Color contrast compliance** - WCAG 2.1 AA compliant color schemes
- **Semantic HTML** - Proper heading hierarchy and landmark roles

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Component-based architecture with hooks
- **TypeScript** - Type-safe JavaScript (if applicable)

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **react-icons** - Comprehensive icon library


### Performance & Optimization

- **Next.js Image** - Optimized image loading
- **Dynamic imports** - Code splitting and lazy loading

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting


## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NajibHossain49/Technical-Assessment-Raintor.git
   cd Technical-Assessment-Raintor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
devlop-me-portfolio/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, About, Projects)
│   └── common/           # Common components (ErrorBoundary, Loading)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and constants
├── public/               # Static assets
├── styles/               # Additional CSS files
└── types/                # TypeScript type definitions
```

## 🎯 Key Components

### Theme System
- **ThemeProvider** - Context-based theme management
- **ThemeToggle** - Interactive theme switching component


### Error Handling
- **ErrorBoundary** - Catches and displays errors gracefully
- **Loading states** - Skeleton loaders and spinners


### Performance Features
- **VirtualizedList** - Efficient rendering of large lists
- **LazyImage** - Optimized image loading with placeholders
- **Memoized components** - Prevent unnecessary re-renders

## 🌟 Highlights





### Developer Experience
- **Component-driven development** with reusable components
- **Clean architecture** with separation of concerns
- **Type safety** with TypeScript 
- **Consistent code style** with ESLint and Prettier





### Typography
- **Font family**: Modern, web-safe fonts
- **Font sizes**: Responsive scale from mobile to desktop
- **Line heights**: Optimized for readability

### Spacing
- **Consistent spacing** using Tailwind's spacing scale


## 🧑‍💻 Author

Developed with ❤️ by **Najib Hossain**  
[GitHub](https://github.com/NajibHossain49) | [LinkedIn](https://www.linkedin.com/in/md-najib-hossain)



---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*This project demonstrates advanced frontend development skills including responsive design, accessibility, performance optimization, and modern React patterns.*