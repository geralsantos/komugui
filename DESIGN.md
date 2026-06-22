---
name: Komugi
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#51443e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#83746d'
  outline-variant: '#d6c3ba'
  surface-tint: '#80543b'
  primary: '#7e5139'
  on-primary: '#ffffff'
  primary-container: '#9a6950'
  on-primary-container: '#fffbff'
  inverse-primary: '#f4ba9c'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#6c5a35'
  on-tertiary: '#ffffff'
  tertiary-container: '#86724c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#f4ba9c'
  on-primary-fixed: '#311302'
  on-primary-fixed-variant: '#653d26'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#f9dfb1'
  tertiary-fixed-dim: '#dcc497'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#554422'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is built for an artisanal boutique experience that feels personal, high-end, and deeply rooted in craftsmanship. The aesthetic is **Warm Minimalism**—a blend of clean layouts and organic warmth. It evokes the feeling of a sun-drenched atelier in Montevideo, focusing on natural materials and feminine grace.

The visual language prioritizes "breathing room" through generous whitespace, high-quality editorial photography, and a tactile sense of depth. It aims to evoke an emotional response of serenity, quality, and timelessness, appealing to mothers and women who value conscious consumption and artisanal beauty.

## Colors
The palette is grounded in earth-toned neutrals and warm, sun-baked clays. 

- **Primary (Terracotta/Clay):** Used for key calls to action, active states, and brand identifiers.
- **Secondary (Dusty Pink):** A soft accent used for decorative elements, soft highlights, and subtle backgrounds.
- **Tertiary (Light Brown/Muted Gold):** Used for iconography, subtle borders, and sophisticated labels.
- **Background (Cream/Off-White):** The canvas of the design system. Avoid pure white (#FFFFFF) to maintain the "warm" artisanal feel.

Text should primarily use a deep, desaturated charcoal or the tertiary brown for a softer contrast than pure black.

## Typography
The typography strategy relies on the contrast between a romantic, high-contrast Serif and a structured, geometric Sans-serif.

- **Headlines:** Use Playfair Display for all major headings. It provides an editorial, fashion-forward character. Use tighter letter spacing for large display sizes to maintain a premium feel.
- **Body Text:** Montserrat provides a clean, modern counterpoint that ensures readability across product descriptions and stories.
- **Labels:** Use uppercase Montserrat with generous letter-spacing for category tags, navigation items, and small UI labels to evoke a sense of high-end branding.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the editorial "lookbook" feel, while transitioning to a fluid, single-column experience on mobile.

- **Grid:** A 12-column grid on desktop with wide 64px margins to frame the content like a magazine.
- **Rhythm:** Use an 8px base unit. Spacing between sections should be aggressive (e.g., 80px or 120px) to reinforce the premium, minimalist brand positioning.
- **Alignment:** Mix centered text for high-level storytelling with left-aligned text for functional product details.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** rather than heavy shadows.

- **Surface Levels:** Use the secondary Dusty Pink or a slightly darker cream (#F5F2ED) for container backgrounds to separate them from the main canvas.
- **Shadows:** When necessary (e.g., for floating cards), use "Ambient Shadows"—extremely soft, long blurs with very low opacity (3-5%) tinted with the primary clay color to avoid a "grey" or "dirty" look.
- **Borders:** Use thin, 1px strokes in the Tertiary Brown or light Beige to define inputs and sections without creating visual noise.

## Shapes
Shapes are defined by **Soft Roundedness**. While the brand is minimal, sharp corners feel too clinical; the 0.5rem (8px) base radius ensures the UI feels approachable and "organic" like the fabrics sold in-store.

Buttons and selection chips may occasionally use "Pill" shapes (rounded-full) to emphasize a friendly, youthful energy for children's categories.

## Components
- **Buttons:** Primary buttons use a solid Terracotta fill with white text. Secondary buttons use a Tertiary outline with a slight background tint on hover. Always use generous internal padding.
- **Cards:** Product cards should be borderless with a very soft ambient shadow on hover. Images should have the standard 8px corner radius.
- **Input Fields:** Use "Floating Labels" with a simple bottom-border or a very light tinted background. Focus states should transition the border to the Primary Clay color.
- **Chips/Filters:** Small, pill-shaped elements using the Secondary Dusty Pink background with deep brown text.
- **Lists:** Clean, high-contrast list items with subtle dividers. Use Serif icons or thin-line stroke icons.
- **Specialty Components:** Include a "Story Carousel" (Instagram-style) for artisanal process videos and a "Shop the Look" editorial module that overlays product hotspots on lifestyle photography.