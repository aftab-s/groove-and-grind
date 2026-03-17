# Groove and Grind Brand Guidelines

Version: 1.0  
Last updated: 2026-03-17

## Highlights

Technologies used:
- React 19
- Vite 6
- Framer Motion
- Lenis
- Vanilla CSS3 with design tokens

Primary colors:
- Background: #f8f9fa
- Elevated surface: #ffffff
- Primary text: #1a1a1a
- Brand amber: #e8a838
- Bright amber: #ffc857
- Warm accent: #ff6b35

Fonts:
- Display: Instrument Serif
- Body: Space Grotesk
- Accent italic: Syne

## 1. Brand Overview
Groove and Grind is a premium boutique coffee brand presented through the lens of vintage analog audio culture.

Brand promise:
- Every coffee experience should feel curated, warm, and high fidelity.
- Product quality and visual quality should feel equally intentional.

Brand personality:
- Refined
- Expressive
- Tactile
- Modern
- Warm

## 2. Positioning and Tone
Positioning statement:
- Groove and Grind brings specialty coffee and music-inspired craftsmanship together in one elevated daily ritual.

Voice and tone:
- Confident but never loud
- Poetic but clear
- Premium but approachable
- Short, rhythmic phrases are preferred

Copy principles:
- Use sensory language: warm, bright, floral, tuned, layered, balanced.
- Keep headings concise and lyrical.
- Keep body copy readable and specific.

## 3. Logo and Wordmark Usage
Primary mark:
- Use the Groove and Grind wordmark style with an italic ampersand.

Wordmark typography:
- Display font: Instrument Serif
- Weight: 400
- Ampersand style: italic

Clear space:
- Keep clear space equal to at least 0.5x the cap height around the mark.

Minimum size guidance:
- Digital minimum width: 140px

Do:
- Use dark wordmark on light backgrounds.
- Maintain consistent letter spacing and ampersand styling.

Do not:
- Stretch or condense the wordmark.
- Add shadows or outlines to the wordmark.
- Change the ampersand style independently from brand rules.

## 4. Color System
Core palette:

| Token | Value | Use |
|---|---|---|
| color-bg | #f8f9fa | App background |
| color-bg-elevated | #ffffff | Elevated surfaces |
| color-text | #1a1a1a | Primary text |
| color-text-secondary | rgba(26, 26, 26, 0.7) | Secondary text |
| color-text-muted | rgba(26, 26, 26, 0.4) | Labels and subtle copy |
| color-amber | #e8a838 | Brand highlight |
| color-amber-bright | #ffc857 | Bright accent |
| color-accent-funk | #ff6b35 | Warm accent |
| color-accent-cool | #8b5cf6 | Cool accent, limited use |
| color-gold | #c9a84c | Premium accent |

Gradient system:
- Primary gradient: linear-gradient(135deg, #e8a838, #ff6b35)
- Divider gradient: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)

Usage ratio guidance:
- 75% neutral and light backgrounds
- 20% dark text and structure
- 5% amber and accent colors

## 5. Typography
Primary typefaces:
- Display: Instrument Serif
- Body: Space Grotesk
- Accent italic: Syne

Type hierarchy:
- H1 to H4: Instrument Serif, weight 800, tight tracking
- Body: Space Grotesk, regular to medium weights
- Accent words: Syne italic for emphasis only

Recommended rhythm:
- Headings: line-height around 1.05
- Body: line-height around 1.6
- Tracking for labels and eyebrows: 0.15em to 0.30em

## 6. Spacing and Layout
Spacing scale:
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 2.5rem
- 2xl: 3.5rem
- 3xl: 4.5rem
- huge: 6rem

Container:
- Max width: 1300px
- Horizontal padding: 2rem desktop, 1rem mobile

Shape language:
- Small radius: 6px
- Medium radius: 12px
- Large radius: 20px
- Extra large radius: 32px
- Pill radius: 9999px
- Hero squarcle panel: rounded, soft corners around 30 to 42px

## 7. UI Components
Primary CTA button style:
- Font size: 0.75rem
- Weight: 500
- Padding: 0.7rem 1.4rem
- Background: #111
- Text: #fff
- Radius: 99px
- Hover: background #000 and scale(1.02)

Glass surfaces:
- Use translucent white backgrounds with blur for navbar and overlays.
- Keep borders subtle and light.
- Avoid heavy opacity that reduces readability.

Cards:
- Light, elevated surfaces
- Soft borders and soft shadows
- Keep content spacing generous but consistent

## 8. Motion Guidelines
Motion personality:
- Smooth, airy, and intentional
- Never aggressive or bouncy by default

Core timing:
- Fast: 200ms
- Medium: 400ms
- Slow: 700ms

Core easing:
- ease-out: cubic-bezier(0.16, 1, 0.3, 1)
- bounce accent: cubic-bezier(0.34, 1.56, 0.64, 1)

Motion patterns:
- Staggered reveals for text blocks
- Subtle parallax for layered depth
- Gentle scale on hover for CTAs
- Smooth scroll transitions between sections

## 9. Imagery and Art Direction
Image style:
- Warm daylight, soft highlights, and premium texture
- Editorial composition over generic stock framing
- Coffee, craft, and analog music atmosphere

Visual treatment:
- Use gentle overlays and blur layers when needed
- Preserve natural color richness
- Avoid over-saturation and hard contrast

## 10. Accessibility Standards
Color and contrast:
- Meet WCAG AA contrast for text and controls
- Avoid light text over busy image areas unless shielded by overlays or cards

Interaction:
- Keep hit targets comfortable on mobile
- Preserve visible focus states for keyboard navigation

Motion safety:
- Keep animations subtle and not excessive
- Respect reduced-motion preferences when extended animation is introduced

## 11. Brand Do and Do Not
Do:
- Keep the premium coffee and analog culture blend central.
- Use amber accents with restraint.
- Maintain consistent CTA styling across sections.

Do not:
- Introduce unrelated color themes as primary UI direction.
- Mix too many font families beyond the approved set.
- Use inconsistent button styles across major sections.

## 12. Client Presentation Checklist
Use this checklist before sharing with UI UX clients:
- Wordmark and typography are consistent
- Button styling is consistent across all sections
- Visual hierarchy is clear on desktop and mobile
- Motion feels smooth and intentional
- Full-page screenshot and showcase video are up to date

---

For implementation alignment, keep design tokens and component styling synced with the CSS token definitions in the codebase.
