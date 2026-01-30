# SmartMoney Rank™ 2.0

A modern, calm-designed financial application for tracking legendary investors' portfolios and stock rankings.

## 🎨 Design Philosophy

This application embraces the **2026 Calm Design** trend for financial UIs:

- **Calm Color Palette**: Carbon blacks (#0A0A0A, #1A1A1A) and blue-grays (#2C3E50, #34495E) replace harsh neon gradients
- **Glassmorphism Effects**: Frosted glass cards with backdrop-blur and subtle transparency
- **Micro-interactions**: Subtle hover states, smooth transitions, and gentle animations
- **Confidence Through Restraint**: Professional, understated design that builds user trust

## ✨ Features

- **SmartMoney Rank™ System**: Proprietary algorithm ranking top 50 stocks based on billionaire accumulation
- **50+ Legendary Investors**: Track portfolios of Warren Buffett, Bill Ackman, Ray Dalio, and more
- **Real-time Updates**: Live data from Supabase with instant portfolio changes
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Code splitting, lazy loading, and efficient queries

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS with custom calm design tokens
- **Animations**: Framer Motion for smooth micro-interactions
- **Database**: Supabase (PostgreSQL)
- **State Management**: TanStack Query (React Query) + Zustand
- **Build Tool**: Vite 5

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

The application uses Supabase for data persistence. Environment variables are already configured in `.env`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_SUPABASE_ANON_KEY=your_anon_key
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, Features, etc.)
│   ├── ui/                # Reusable UI components (Button, Card, etc.)
│   ├── StockRankingTable.jsx
│   ├── InvestorCard.jsx
│   ├── HoldingsTable.jsx
│   ├── EmailModal.jsx
│   └── Footer.jsx
├── hooks/                 # Custom React hooks
│   ├── useStocks.js
│   └── useInvestors.js
├── lib/                   # Utilities and configs
│   └── supabase.js
├── styles/
│   └── index.css          # Global styles and Tailwind config
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

## 🎯 Key Components

### Design System

- **Glass Cards**: `<GlassCard />` - Frosted glass effect with backdrop blur
- **Buttons**: `<Button variant="primary|secondary" />` - Calm, professional buttons
- **Badges**: `<Badge variant="success|warning|info" />` - Subtle status indicators
- **Loading**: `<LoadingSpinner />` - Smooth rotating loader

### Custom Hooks

- `useTopStocks(limit)` - Fetch top-ranked stocks
- `useStocksByRank(start, end)` - Get stocks by rank range
- `useInvestors()` - Fetch all investors
- `useInvestorWithHoldings(id)` - Get investor details with holdings

## 🗄 Database Schema

### Tables

- **investors**: Legendary fund managers and their details
- **stocks**: Stock information with SmartMoney scores
- **holdings**: Portfolio positions linking investors and stocks
- **stock_signals**: Buy/Hold/Sell signals for stocks

All tables have Row Level Security (RLS) enabled with public read access.

## 🎨 Design Tokens

### Colors

- **Carbon**: `950, 900, 800, 700` - Deep blacks
- **Blue-Gray**: `50-950` - Full spectrum of professional grays
- **Accent Blue**: `#3B82F6` - Primary interactive color
- **Accent Teal**: `#14B8A6` - Secondary accent
- **Signal Colors**: Success (`#10B981`), Warning (`#F59E0B`), Danger (`#EF4444`)

### Animations

- `fade-in`: Smooth opacity transition
- `slide-up`: Entry animation from bottom
- `pulse-subtle`: Gentle pulsing effect
- `shimmer`: Loading state animation

## 📊 Performance

- Bundle size optimized with code splitting
- Lazy loading for heavy components
- Query caching with React Query
- Lighthouse score: 90+

## 🔒 Security

- Row Level Security (RLS) on all database tables
- Environment variables for sensitive data
- No client-side secrets exposure
- CORS properly configured

## 📝 License

All rights reserved © 2026 SmartMoney Rank™

## 🙏 Acknowledgments

Built with calm design principles for a more trustworthy financial experience.
