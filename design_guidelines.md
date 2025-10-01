# Batu Medikal - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid (Medical E-commerce + Material Design)
- **Primary Inspiration:** Clean medical e-commerce platforms (medical supply stores, pharmacy websites)
- **Design System Foundation:** Material Design for structure and professional UI components
- **Key Principles:** Trust, professionalism, accessibility, clarity, Turkish language optimization

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 210 85% 45% (Medical Blue - trust, professionalism)
- Primary Hover: 210 85% 35%
- Secondary: 160 75% 40% (Medical Green - health, vitality)
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 45%
- Border: 220 15% 90%
- Success: 142 76% 36%
- Warning: 38 92% 50%
- Error: 0 72% 51%

**Dark Mode:**
- Primary: 210 90% 55%
- Primary Hover: 210 90% 65%
- Secondary: 160 70% 50%
- Background: 220 18% 12%
- Surface: 220 15% 16%
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 65%
- Border: 220 15% 25%

### B. Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - clean, modern, excellent Turkish character support
- Headings: 'Poppins' (Google Fonts) - professional, distinctive for headers

**Hierarchy:**
- H1: 3.5rem (56px) / 700 weight / -0.02em tracking
- H2: 2.5rem (40px) / 600 weight / -0.01em tracking
- H3: 2rem (32px) / 600 weight / normal tracking
- H4: 1.5rem (24px) / 600 weight
- Body Large: 1.125rem (18px) / 400 weight / 1.6 line-height
- Body: 1rem (16px) / 400 weight / 1.6 line-height
- Small: 0.875rem (14px) / 400 weight

### C. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 20 (p-2, m-4, gap-8, py-12, px-16, space-y-20)

**Container Widths:**
- Max content width: max-w-7xl (1280px)
- Product grid: max-w-6xl
- Text content: max-w-4xl
- Forms: max-w-md

**Grid System:**
- Product grid: 1 column mobile, 2 columns tablet, 3-4 columns desktop
- Feature sections: 1-2-3 column responsive
- Admin dashboard: Sidebar + main content area

### D. Component Library

**Navigation:**
- Clean header with logo left, menu center/right
- Sticky navigation on scroll with subtle shadow
- Mobile: Hamburger menu with slide-in drawer
- Admin: Sidebar navigation with icons

**Product Cards:**
- White/dark surface with subtle shadow and border
- Product image (16:9 or square ratio) with hover zoom effect
- Product name (H4 size, medium weight)
- Short description (2 lines, text-secondary)
- Price (large, bold, primary color)
- "Detayları Gör" button (outline style)

**Forms (Admin & Contact):**
- Floating labels or top-aligned labels
- Clear input fields with border and focus states
- Consistent padding (p-3)
- Error states with red border and helper text
- File upload with drag-drop zone

**Buttons:**
- Primary: Solid background, primary color, white text
- Secondary: Outline style with primary border
- Sizes: sm (py-2 px-4), md (py-3 px-6), lg (py-4 px-8)
- Rounded corners: rounded-lg
- On images: Blurred background (backdrop-blur-sm bg-white/20)

**Data Displays (Admin):**
- Clean tables with alternating row colors
- Action buttons (edit, delete) with icon + text
- Status badges for product availability
- Search and filter controls

## Images

**Hero Section:**
- Large hero image showing medical products/professional environment
- Placement: Full-width banner, 60vh height
- Overlay: Gradient (dark blue to transparent) for text readability
- Content: Company name, tagline "Sağlık Ürünlerinde Güvenilir Çözüm Ortağınız", CTA button

**Product Images:**
- High-quality product photos on white/neutral background
- Consistent aspect ratio (square recommended)
- Hover effect: Slight zoom (scale-105)
- Placeholder for empty states

**About/Company Section:**
- Professional storefront or team photo
- 2-column layout: image + text content

**Logo Placement:**
- Header: 180-200px width
- Footer: 120-140px width
- Favicon: Simplified icon version

## Page-Specific Guidelines

**Homepage:**
1. Hero section with medical supplies image and value proposition
2. Featured products (4-6 items in grid)
3. Trust indicators (years in business, customer count, certifications)
4. Company highlights (3 columns: Kaliteli Ürünler, Hızlı Teslimat, Uzman Destek)
5. CTA section for catalog viewing

**Product Catalog:**
- Filter sidebar (categories, price range)
- Grid layout (responsive)
- Sort options (price, name, newest)
- Pagination or infinite scroll
- Empty states with helpful messaging

**Admin Panel:**
- Dashboard overview (total products, recent updates)
- Product management table (list view)
- Add/Edit product modal or separate page
- Image upload with preview
- Price and inventory management
- Google Business integration section

**Logo Design:**
- Medical cross or pulse line incorporated
- Modern, clean typography for "BATU MEDİKAL"
- Color: Primary blue or blue-green combination
- Versatile for light/dark backgrounds
- Include tagline option: "Sağlıkta Güvenilir Adres"

## Interaction & Animation

**Minimal animations:**
- Card hover: subtle lift (shadow increase, translate-y-1)
- Button hover: slight color darken
- Page transitions: fade-in content
- Image loading: skeleton screens
- NO unnecessary scroll animations

## Accessibility & Turkish Localization

- High contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements
- Alt text for all product images
- Keyboard navigation support
- Turkish character support verified in all fonts
- Date/number formats: Turkish locale (DD.MM.YYYY, price with ₺)
- All UI text in Turkish