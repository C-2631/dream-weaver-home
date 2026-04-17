# 🌟 Dream Weaver Home - Lumen

> **Immersive Real Estate in 3D | Walk through extraordinary homes, design interiors with AI, and find your perfect space.**

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Flow](#-project-flow)
- [Architecture](#-architecture)
- [Implementation Plan](#-implementation-plan)
- [Development Tasks](#-development-tasks)
- [Setup Instructions](#-setup-instructions)
- [Development Scripts](#-development-scripts)
- [Project Structure](#-project-structure)
- [Contributing Guidelines](#-contributing-guidelines)

---

## 🎯 Project Overview

**Dream Weaver Home (Lumen)** is a next-generation real estate platform that combines immersive 3D technology, augmented reality, and artificial intelligence to revolutionize how people explore, design, and purchase homes.

### Vision
Transform the real estate experience by enabling users to:
- 🏠 Explore properties in stunning 3D environments
- 🎨 Visualize interior design possibilities with AR furniture placement
- 🤖 Get AI-powered design recommendations
- 💰 Make informed purchasing decisions with interactive property tours
- 🌍 Access a global marketplace of properties

### Mission
To democratize access to premium real estate visualization tools, making it affordable and accessible for agents, developers, and homebuyers worldwide.

---

## ✨ Key Features

### 🎬 3D Virtual Tours
- Interactive 360° property walkthroughs
- Real-time lighting and material customization
- Multi-floor navigation
- Measurement tools for accurate dimensions

### 🪑 AR Furniture Visualization
- Place furniture in real spaces using AR
- Browse furniture catalog
- Visualize different layouts
- Share furniture placements with clients

### 🤖 AI Interior Design Assistant
- Room analysis and design recommendations
- Color palette suggestions
- Furniture compatibility checks
- Budget optimization
- Style preference learning

### 🏪 Real Estate Marketplace
- Advanced property search and filtering
- Price trends and market analytics
- Property comparisons
- Saved favorites and watchlists
- Agent communication tools

### 👥 User Management System
- Secure authentication (OAuth2, Email/Password)
- User profiles and preferences
- Saved properties and designs
- Design history and collections
- Social sharing capabilities

### 📊 Admin Dashboard
- Property management
- User analytics
- Revenue tracking
- Content moderation
- System monitoring

---

## 💻 Tech Stack

### Frontend
| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3.1 |
| **Language** | TypeScript 5.8.3 |
| **Build Tool** | Vite 5.4.19 |
| **Styling** | Tailwind CSS 3.4.17 |
| **3D Rendering** | Three.js 0.160.0 |
| **3D with React** | React Three Fiber 8.18.0 |
| **3D Utilities** | Drei 9.122.0 |
| **Component Library** | shadcn/ui (Radix UI) |
| **Router** | React Router DOM 6.30.1 |
| **State Management** | React Query (@tanstack) 5.83.0 |
| **Forms** | React Hook Form 7.61.1 |
| **Form Validation** | Zod 3.25.76 |
| **Animation** | Framer Motion 12.38.0 |
| **Charts** | Recharts 2.15.4 |
| **Map Integration** | Leaflet 1.9.4, React Leaflet 4.2.1 |
| **Icons** | Lucide React 0.462.0 |
| **Notifications** | Sonner 1.7.4 |
| **UI Utilities** | clsx 2.1.1, tailwind-merge 2.6.0 |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.32.0 | Code linting |
| **Vitest** | 3.2.4 | Unit testing |
| **Testing Library** | 16.0.0 | React component testing |
| **PostCSS** | 8.5.6 | CSS processing |
| **TypeScript ESLint** | 8.38.0 | TypeScript linting |

### Package Manager
- **npm** / **Bun** (for dependency management)

---

## 🔄 Project Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                       USER JOURNEY                              │
└─────────────────────────────────────────────────────────────────┘

1. LANDING PAGE & AUTHENTICATION
   ↓
   ├─→ Sign Up / Login
   ├─→ OAuth Integration (Google, Facebook)
   └─→ Profile Setup

2. PROPERTY DISCOVERY
   ↓
   ├─→ Search Filters (Location, Price, Size, Features)
   ├─→ Property Listings with Cards
   ├─→ Advanced Filtering & Sorting
   └─→ Saved Favorites

3. PROPERTY EXPLORATION
   ↓
   ├─→ Load 3D Model
   ├─→ Interactive Navigation (First-person/Orbit)
   ├─→ Lighting & Material Customization
   └─→ Measurement Tools

4. INTERIOR DESIGN
   ↓
   ├─→ Select Room
   ├─→ AR Furniture Placement
   ├─→ AI Design Recommendations
   ├─→ Save Designs
   └─→ Share with Agents

5. TRANSACTION
   ↓
   ├─→ Schedule Tour
   ├─→ Contact Agent
   ├─→ Make Offer
   └─→ Complete Purchase

6. ADMIN OPERATIONS
   ↓
   └─→ Property Management, Analytics, User Management
```

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (React)                          │
├──────────────────────────────────────────────────────────────────┤
│  Landing  │  Auth  │  Property  │  3D Viewer  │  AI Design  │    │
│  Page     │ Module │ Catalog    │   Module    │  Assistant  │    │
└──────────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────────┐
│                API GATEWAY & MIDDLEWARE                           │
├──────────────────────────────────────────────────────────────────┤
│  Auth Middleware  │  Error Handling  │  Request Logging  │        │
└──────────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────────┐
│              BACKEND SERVICES (Node.js/Express)                   │
├──────────────────────────────────────────────────────────────────┤
│ Auth Service  │  Property Service  │  Design Service  │  User    │
│               │                    │                  │  Service  │
└──────────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                                 │
├──────────────────────────────────────────────────────────────────┤
│  User Data  │  Property Data  │  Design Data  │  Transaction      │
└──────────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────────┐
│              EXTERNAL INTEGRATIONS                                │
├──────────────────────────────────────────────────────────────────┤
│  3D Models Provider  │  Maps API  │  Payment Gateway  │  AI API   │
└──────────────────────────────────────────────────────────────────┘
```

### Module Architecture

```
src/
├── components/          # Reusable UI components
│   ├── 3D/             # 3D viewer components
│   ├── AR/             # AR furniture components
│   ├── Common/         # Shared components
│   └── Dashboard/      # Admin dashboard components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API service layer
├── store/              # State management
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── main.tsx            # Entry point
```

---

## 📋 Implementation Plan

### Phase 1️⃣: Foundation & Core Infrastructure (Weeks 1-4)
**Goal**: Establish project foundation and core systems

#### Deliverables:
- ✅ Project setup and configuration
- ✅ CI/CD pipeline setup
- ✅ Authentication system (JWT, OAuth)
- ✅ User management backend
- ✅ Database schema design
- ✅ API documentation

#### Tasks:
1. Initialize Vite + React + TypeScript project
2. Set up ESLint and code formatting
3. Configure Tailwind CSS
4. Create authentication service
5. Design database schemas
6. Set up API routes

---

### Phase 2️⃣: Property Management & 3D Integration (Weeks 5-12)
**Goal**: Build property catalog and 3D visualization

#### Deliverables:
- ✅ Property catalog with search/filter
- ✅ 3D model integration
- ✅ Interactive 3D viewer
- ✅ Property detail pages
- ✅ Image gallery system

#### Tasks:
1. Create property data models
2. Build property listing components
3. Implement Three.js 3D viewer
4. Integrate 3D model loader
5. Add lighting controls
6. Implement measurement tools
7. Create property search API

---

### Phase 3️⃣: AR & AI Features (Weeks 13-20)
**Goal**: Implement AR furniture and AI design assistant

#### Deliverables:
- ✅ AR furniture placement system
- ✅ AI design recommendations
- ✅ Furniture catalog
- ✅ Design saving system
- ✅ AI integration APIs

#### Tasks:
1. Set up AR.js or WebAR
2. Create furniture model library
3. Build AR placement interface
4. Integrate AI design API
5. Create design recommendation engine
6. Build furniture database

---

### Phase 4️⃣: User Features & Marketplace (Weeks 21-28)
**Goal**: Add user-centric features and marketplace functionality

#### Deliverables:
- ✅ User dashboard
- ✅ Saved favorites system
- ✅ Design collections
- ✅ Agent messaging
- ✅ Property comparison tools

#### Tasks:
1. Create user dashboard
2. Build saved properties system
3. Implement design collections
4. Add messaging system
5. Create comparison tools
6. Build notification system

---

### Phase 5️⃣: Admin, Analytics & Optimization (Weeks 29-36)
**Goal**: Admin tools, monitoring, and performance optimization

#### Deliverables:
- ✅ Admin dashboard
- ✅ Analytics system
- ✅ Performance optimization
- ✅ Security hardening
- ✅ Load testing

#### Tasks:
1. Build admin interface
2. Implement analytics tracking
3. Create reporting system
4. Optimize bundle size
5. Implement caching strategies
6. Security audit and fixes

---

## 🎯 Development Tasks

### Module 1: Core 3D Engine 🎮

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 1.1 | Set up Three.js scene with proper lighting | Medium | 2 days |
| 1.2 | Create 3D model loader (GLTF/GLB support) | Medium | 2 days |
| 1.3 | Implement camera controls (Orbit/First-person) | Medium | 2 days |
| 1.4 | Add shadow mapping and realistic lighting | Hard | 3 days |
| 1.5 | Create material and color customization | Medium | 2 days |
| 1.6 | Implement measurement tools | Hard | 3 days |
| 1.7 | Add floor navigation system | Medium | 2 days |
| 1.8 | Performance optimization (LOD, culling) | Hard | 3 days |

### Module 2: AR Furniture & Visualization 🪑

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 2.1 | Set up AR.js or WebAR framework | Hard | 3 days |
| 2.2 | Create furniture model library | Medium | 2 days |
| 2.3 | Build furniture selector UI | Easy | 1 day |
| 2.4 | Implement furniture placement detection | Hard | 3 days |
| 2.5 | Add furniture rotation/scaling controls | Medium | 2 days |
| 2.6 | Create furniture comparison feature | Medium | 2 days |
| 2.7 | Build AR visualization preview | Hard | 3 days |
| 2.8 | Add furniture sharing functionality | Medium | 2 days |

### Module 3: AI Interior Design 🤖

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 3.1 | Integrate AI API (OpenAI/Custom Model) | Medium | 2 days |
| 3.2 | Create room analysis algorithm | Hard | 3 days |
| 3.3 | Build color palette recommendation | Medium | 2 days |
| 3.4 | Implement furniture suggestion engine | Hard | 3 days |
| 3.5 | Create budget optimization logic | Medium | 2 days |
| 3.6 | Build style preference learning | Hard | 3 days |
| 3.7 | Add design history tracking | Medium | 2 days |
| 3.8 | Create design comparison UI | Medium | 2 days |

### Module 4: Property Management 🏠

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 4.1 | Design property data schema | Medium | 1 day |
| 4.2 | Build property listing API | Medium | 2 days |
| 4.3 | Create advanced search filters | Hard | 3 days |
| 4.4 | Implement property detail pages | Easy | 1 day |
| 4.5 | Build image gallery system | Medium | 2 days |
| 4.6 | Add property comparison feature | Medium | 2 days |
| 4.7 | Create price trending system | Hard | 3 days |
| 4.8 | Build property export functionality | Easy | 1 day |

### Module 5: User Management & Authentication 👥

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 5.1 | Implement JWT authentication | Medium | 2 days |
| 5.2 | Set up OAuth integration (Google/Facebook) | Medium | 2 days |
| 5.3 | Create user profile system | Easy | 1 day |
| 5.4 | Build password reset functionality | Medium | 2 days |
| 5.5 | Implement email verification | Medium | 2 days |
| 5.6 | Create user preferences system | Easy | 1 day |
| 5.7 | Add social profile integration | Medium | 2 days |
| 5.8 | Build user activity logging | Medium | 2 days |

### Module 6: Admin Dashboard 📊

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 6.1 | Create admin authentication | Medium | 2 days |
| 6.2 | Build property management interface | Medium | 2 days |
| 6.3 | Implement user management panel | Medium | 2 days |
| 6.4 | Create analytics dashboard | Hard | 3 days |
| 6.5 | Build reporting system | Medium | 2 days |
| 6.6 | Add content moderation tools | Medium | 2 days |
| 6.7 | Create system monitoring dashboard | Hard | 3 days |
| 6.8 | Implement audit logging | Medium | 2 days |

### Module 7: Testing & Quality Assurance ✅

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 7.1 | Write unit tests for utilities | Easy | 2 days |
| 7.2 | Create component tests | Medium | 3 days |
| 7.3 | Implement integration tests | Hard | 3 days |
| 7.4 | Set up E2E testing | Hard | 3 days |
| 7.5 | Performance testing & optimization | Hard | 3 days |
| 7.6 | Security testing & audits | Hard | 3 days |
| 7.7 | Accessibility testing (WCAG) | Medium | 2 days |
| 7.8 | Cross-browser testing | Medium | 2 days |

### Module 8: Deployment & DevOps 🚀

| # | Task | Difficulty | Est. Time |
|---|------|-----------|-----------|
| 8.1 | Set up Docker containerization | Medium | 2 days |
| 8.2 | Configure CI/CD pipeline (GitHub Actions) | Medium | 2 days |
| 8.3 | Set up cloud hosting (AWS/GCP/Azure) | Hard | 3 days |
| 8.4 | Configure CDN for static assets | Medium | 2 days |
| 8.5 | Implement database backups | Medium | 2 days |
| 8.6 | Set up monitoring & alerting | Medium | 2 days |
| 8.7 | Create deployment documentation | Easy | 1 day |
| 8.8 | Set up SSL/TLS certificates | Medium | 2 days |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ or Bun runtime
- npm or yarn package manager
- Git for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/C-2631/dream-weaver-home.git
   cd dream-weaver-home
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   bun run build
   ```

---

## 📝 Development Scripts

```bash
# Development
npm run dev              # Start development server on localhost:5173

# Production
npm run build            # Build optimized production bundle
npm run build:dev        # Build with development mode enabled
npm run preview          # Preview production build locally

# Testing
npm test                 # Run tests once
npm run test:watch      # Run tests in watch mode

# Code Quality
npm run lint            # Run ESLint to check code quality

# Other
npm run type-check      # Check TypeScript types
npm run format          # Format code with Prettier
```

---

## 📂 Project Structure

```
dream-weaver-home/
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Viewer.tsx
│   │   │   ├── Controls.tsx
│   │   │   ├── Models.tsx
│   │   │   └── Lighting.tsx
│   │   ├── AR/
│   │   │   ├── FurnitureViewer.tsx
│   │   │   ├── Placement.tsx
│   │   │   └── Catalog.tsx
│   │   ├── Common/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── Dashboard/
│   │       ├── AdminPanel.tsx
│   │       ├── Analytics.tsx
│   │       └── UserManagement.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PropertyDetail.tsx
│   │   ├── Design.tsx
│   │   ├── Dashboard.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProperty.ts
│   │   └── useDesign.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── property.ts
│   │   └── design.ts
│   ├── store/
│   │   └── store.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── api.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── styles/
│   │   └── globals.css
│   └── main.tsx
├── public/
│   └── models/           # 3D model files
├── .github/
│   └── workflows/        # GitHub Actions CI/CD
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── vitest.config.ts
└── README.md
```

---

## 🤝 Contributing Guidelines

### Getting Started
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "feat: add new feature"`
3. Push to your branch: `git push origin feature/your-feature-name`
4. Create a Pull Request

### Code Standards
- Follow ESLint rules defined in `eslint.config.js`
- Use TypeScript for type safety
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Pull Request Process
1. Ensure all tests pass: `npm test`
2. Ensure code is linted: `npm run lint`
3. Write clear PR description
4. Request review from team members
5. Address feedback and make necessary changes
6. Merge when approved

### Naming Conventions
- Components: PascalCase (e.g., `PropertyCard.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useProperty.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- Files: Match export name, use .tsx for React components

---

## 📞 Support & Resources

- **Documentation**: [View Full Docs](./docs)
- **Issues**: [Report Issues](https://github.com/C-2631/dream-weaver-home/issues)
- **Discussions**: [Join Discussions](https://github.com/C-2631/dream-weaver-home/discussions)
- **Email**: support@dreamweaverhome.com

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🎉 Acknowledgments

Built with passion using:
- ⚛️ React
- 🎨 Three.js & Fiber
- 🎯 TypeScript
- 🎨 Tailwind CSS
- 🚀 Vite

---

**Last Updated**: April 16, 2026
**Project Status**: 🚀 In Development
**Version**: 0.0.0

> Dream Weaver Home - Transform how people experience real estate 🌟
