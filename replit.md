# Batu Medikal - Medical E-commerce Platform

## Overview

Batu Medikal is a Turkish-language medical e-commerce platform for selling medical devices and healthcare products. The application is built as a full-stack web application with a React frontend and Express backend, featuring product catalog management, admin capabilities, and a clean medical-themed design system. The platform emphasizes trust, professionalism, and accessibility with Turkish language optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React** with TypeScript for component-based UI
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component Strategy**
- **Shadcn/ui** component library built on Radix UI primitives
- Material Design principles with medical e-commerce aesthetics
- Comprehensive design system defined in `design_guidelines.md`
- Custom theming with CSS variables for light/dark mode support
- Tailwind CSS for utility-first styling with custom configuration

**State Management Approach**
- TanStack Query for server state (API data, caching)
- React hooks for local component state
- No global state management library (Redux/Zustand) currently implemented

**Key Design Decisions**
- Turkish language throughout the application
- Medical blue and green color palette for trust and health associations
- System fonts (sans-serif for body, serif for headings) for excellent Turkish character support
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js
- TypeScript for type safety across the stack
- ESM (ES Modules) module system

**Database Layer**
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the target database (via Neon serverless driver)
- Schema-first approach with TypeScript types generated from Drizzle schemas
- Database schema includes:
  - `users` table for authentication
  - `products` table for medical product catalog

**Storage Abstraction**
- Interface-based storage pattern (`IStorage`) for flexibility
- In-memory storage implementation (`MemStorage`) for development/testing
- Designed to be swapped with database-backed implementation

**API Design**
- RESTful API structure with `/api` prefix convention
- JSON request/response format
- Express middleware for request logging and error handling
- Session-based authentication pattern (using `connect-pg-simple` for PostgreSQL sessions)

**Development Workflow**
- Hot Module Replacement (HMR) via Vite in development
- Separate build process for client (Vite) and server (esbuild)
- TypeScript compilation checking without emit

### Data Models

**User Schema**
- UUID primary key
- Username (unique)
- Password (stored as text, should implement hashing)

**Product Schema**
- UUID primary key
- Name, description, category (text fields)
- Price (decimal with precision)
- Image URL

**Validation**
- Zod schemas generated from Drizzle schemas via `drizzle-zod`
- Type-safe insert schemas for data validation

### Authentication Strategy

Current implementation shows:
- Mock authentication in AdminLogin component (marked with TODO)
- Session infrastructure in place (connect-pg-simple)
- User schema defined but authentication not fully implemented

**Security Considerations**
- Passwords stored as plain text (requires bcrypt/argon2 implementation)
- No JWT or session management fully configured
- CORS and security headers not explicitly configured

## External Dependencies

### Database Services
- **Neon Serverless PostgreSQL** - Cloud-hosted PostgreSQL database accessed via `@neondatabase/serverless` driver
- Connection managed through `DATABASE_URL` environment variable

### UI Component Libraries
- **Radix UI** - Comprehensive set of unstyled, accessible UI primitives:
  - Dialog, Dropdown, Popover, Tooltip, and 20+ other components
  - Built-in accessibility (ARIA) support
  - Keyboard navigation and focus management
- **Shadcn/ui** - Pre-built component layer on top of Radix UI with custom styling

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **class-variance-authority** - Type-safe variant management for components
- **clsx** & **tailwind-merge** - Utility functions for conditional className composition

### Form Management
- **React Hook Form** - Form state management and validation
- **@hookform/resolvers** - Integration with validation libraries (Zod)

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **embla-carousel-react** - Carousel/slider component
- **lucide-react** - Icon library with 1000+ consistent icons
- **cmdk** - Command palette/search component

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Error overlay for development
- **@replit/vite-plugin-cartographer** & **dev-banner** - Replit-specific development aids

### Asset Management
- Static images stored in `attached_assets/generated_images/` directory
- Product images, company logo, and hero images
- Imported directly via Vite's asset handling

### Build & Deployment
- **esbuild** - Fast JavaScript bundler for server-side code
- **tsx** - TypeScript execution for development server
- Production build creates static client assets and bundled server code