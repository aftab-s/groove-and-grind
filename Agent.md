# Agent Prompt - Recreate the Full Groove and Grind Website

Use the following prompt with an AI coding agent to rebuild this website end-to-end, including AI-generated image assets.

## Master Build Prompt
You are a senior frontend engineer and AI art director. Build a polished, production-ready React + Vite single-page website called Groove and Grind.

The site theme is premium specialty coffee x vintage analog audio.
The visual language must feel airy, elegant, tactile, and editorial.

### Primary Objective
Recreate the complete website with:
- exact section architecture
- smooth scroll and motion behavior
- premium visual styling
- responsive behavior (desktop and mobile)
- matching CTA style consistency
- AI-generated image assets placed in the correct paths

### Required Tech Stack
- React 19
- Vite 6
- Framer Motion
- Lenis smooth scrolling
- Vanilla CSS with design tokens in a central stylesheet

Do not use Tailwind.
Do not use component libraries.

### File and Component Structure
Create these files:
- src/App.jsx
- src/main.jsx
- src/index.css
- src/components/Navbar.jsx
- src/components/Navbar.css
- src/components/Hero.jsx
- src/components/Hero.css
- src/components/BentoGrid.jsx
- src/components/BentoGrid.css
- src/components/Lookbook.jsx
- src/components/Lookbook.css
- src/components/Subscription.jsx
- src/components/Subscription.css
- src/components/Footer.jsx
- src/components/Footer.css
- src/components/ScrollToTop.jsx
- src/components/ScrollToTop.css

Images should be in:
- public/images/

### Site Architecture and IDs
Build sections in this exact order with these IDs:
1. Hero section with id hero
2. Blends section with id products
3. Experience section with id experience
4. Subscription section with id record-club
5. Footer

Also include:
- fixed top navigation
- bottom-right scroll-to-top button

### Brand and Design Direction
Tone:
- premium, warm, modern, curated
- not playful-cartoon, not corporate-minimal

Typography:
- Display font: Instrument Serif
- Body font: Space Grotesk
- Accent italic font: Syne

Color system:
- Background: #f8f9fa
- Elevated surface: #ffffff
- Primary text: #1a1a1a
- Secondary text: rgba(26, 26, 26, 0.7)
- Muted text: rgba(26, 26, 26, 0.4)
- Brand amber: #e8a838
- Bright amber: #ffc857
- Warm accent: #ff6b35
- Gold accent: #c9a84c
- Border: rgba(0, 0, 0, 0.08)

Spacing scale:
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 2.5rem
- 2xl: 3.5rem
- 3xl: 4.5rem

Radius scale:
- sm: 6px
- md: 12px
- lg: 20px
- xl: 32px
- full: 9999px

### Motion Requirements
Use Framer Motion for:
- nav entrance
- hero stagger reveal
- scroll indicator animation
- section reveal on scroll
- lookbook cards reveal
- mobile menu fade
- scroll-to-top button entrance/exit

Use Lenis in App.jsx for smooth scrolling with requestAnimationFrame loop.
Expose Lenis instance as window.__lenis for cross-component scroll control.

### Component-Level Requirements
#### 1. Navbar
- Fixed floating glassmorphic pill nav
- Brand text Groove and Grind with italic ampersand
- Desktop links: Home, Our Blends, Experience, The Club
- Right CTA label: Get started
- Mobile hamburger with animated three lines
- Mobile full-screen menu overlay

#### 2. Hero
- Full-height section with image background
- Background image parallax: subtle downward movement on scroll
- White rounded squarcle foreground card
- Foreground card slight upward parallax
- Hero copy slight upward parallax stronger than card
- Heading: Groove and Grind
- Subtext:
  Turn your mornings into masterpieces. Tuned to perfection. Every roast is a master mix - crafted with the warmth and precision of vintage analog audio.
- Two CTAs: Explore Blends and Join the Club
- CTA style must match navbar Get started button exactly
- Bottom center scroll indicator

#### 3. Blends Section
- Section heading and short intro copy
- Three large editorial cards with alternating layout
- Data-driven card rendering from an array
- Each card includes:
  - number badge
  - eyebrow label
  - blend name
  - origin
  - description
  - specs row
  - tags row
  - image with soft glow and hover lift
- Top-right button: View All Blends, same CTA style family

#### 4. Experience Section
- Heading with centered eyebrow and subtitle
- Horizontal draggable carousel using Framer Motion drag x
- Six visual cards, each with image, tag, title, description
- Drag hint text below carousel
- Bottom marquee strip with repeating keywords and dot separators

#### 5. Subscription Section
- Large card with two columns
- Left: title, description, perks list with small icons
- Right: form card with name and email input
- Submit button label: Press Play
- On submit with valid name and email, show success state:
  - icon
  - title: You're In, {name}
  - short confirmation copy
- CTA button style must remain consistent with navbar button style system

#### 6. Footer
- Brand and short tagline
- Two nav columns: Navigate and Connect
- Wide image strip with subtle overlay
- Bottom row with copyright and short socials
- Signature text in lower-right with subtle hover opacity increase

#### 7. Scroll-to-top
- Floating button at bottom-right
- Show after user scrolls past around 420px
- If Lenis exists, use Lenis scrollTo(0)
- Otherwise fallback to window.scrollTo smooth
- Glass style with hover inversion

### Global Styling Requirements
- Centralize tokens in index.css under :root
- Add subtle noise overlay and ambient radial glow background layers
- Keep body background light and elegant
- Keep readability high on all text areas
- Add responsive behavior for <=768px

### Accessibility and Quality
- Use semantic elements and aria labels where needed
- Ensure good text contrast
- Ensure keyboard access to nav and buttons
- Ensure mobile layout does not overflow
- Keep animations smooth but not excessive

### Performance
- Use image loading lazy where appropriate
- Use optimized dimensions and compressed images
- Avoid unnecessary re-renders

### Content and Copy
Use coffee + music editorial voice throughout.
Preserve these section labels:
- Our Blends
- The Experience
- The Record Club

### AI Image Generation Requirements
Generate all images in a cohesive visual style.
Style: premium coffee editorial, soft morning light, warm highlights, subtle analog mood, clean composition, photoreal realism.

Global image instructions for all prompts:
- Ultra-detailed photorealistic style
- Natural lighting, warm highlights, soft shadows
- Premium product photography composition
- No logos, no visible text, no watermark
- No people faces unless explicitly requested

#### Asset Prompt Sheet
1) Filename: premium-coffee-field-bg.png
- Target size: 2560x1440
- Prompt: Wide cinematic background of a premium coffee farm and artisanal brew setup in soft golden morning light, shallow depth of field, warm bokeh, hints of polished metal coffee tools, elegant editorial color grading, airy composition with room for centered text overlay.
- Negative prompt: text, logo, watermark, harsh contrast, low resolution, noise artifacts.

2) Filename: blend-1-floral.png
- Target size: 1200x1400
- Prompt: Premium matte coffee bag hero shot on clean neutral background, floral-inspired color accents, elegant soft shadow, high-end studio lighting, front-facing packshot for ecommerce, photorealistic.
- Negative prompt: text overlays, watermark, distorted package, cluttered background.

3) Filename: blend-2-sunlit.png
- Target size: 1200x1400
- Prompt: Premium coffee bag packshot with warm sunlit caramel mood, refined studio setup, subtle golden reflection, high-end product photography, front-facing, photorealistic.
- Negative prompt: text overlays, watermark, logo clutter, bad perspective.

4) Filename: blend-3-crystal.png
- Target size: 1200x1400
- Prompt: Minimal premium coffee bag packshot with clean crystal-like lighting, cool-neutral highlights mixed with warm undertone, editorial studio environment, front-facing, photorealistic.
- Negative prompt: text overlays, watermark, over-saturated colors, low-detail packaging.

5) Filename: lookbook_1.png
- Target size: 1600x1100
- Prompt: Sleek acrylic pour-over coffee station in botanical daylight interior, premium styling, clean composition, editorial photography.
- Negative prompt: text, watermark, messy background.

6) Filename: lookbook_2.png
- Target size: 1600x1100
- Prompt: Ethically sourced coffee beans in warm golden hour light on premium surface, cinematic close framing, rich texture detail.
- Negative prompt: text, logo, noisy grain, low quality.

7) Filename: lookbook_3.png
- Target size: 1600x1100
- Prompt: Espresso extraction close-up into minimalist glassware, luminous highlights, luxury coffee lab aesthetic, ultra clean and detailed.
- Negative prompt: text, watermark, overexposed highlights.

8) Filename: lookbook_4.png
- Target size: 1600x1100
- Prompt: Bright modern morning coffee setup with subtle analog vinyl element in scene, soft daylight, airy neutral palette, premium lifestyle editorial.
- Negative prompt: text, watermark, human portrait focus, clutter.

9) Filename: lookbook_5.png
- Target size: 1600x1100
- Prompt: Premium single-origin coffee reserve display, matte black and gold packaging on frosted shelf, controlled studio lighting, sophisticated composition.
- Negative prompt: text overlays, watermark, chaotic shelves.

10) Filename: lookbook_6.png
- Target size: 1600x1100
- Prompt: Minimalist tasting bar interior with natural wood, clean lines, high-end analog audio gear in background, warm neutral lighting, editorial architecture style.
- Negative prompt: text, logo, fisheye distortion, clutter.

### Output Expectations
- Build complete working website
- Use all required IDs and sections
- Use provided tokens and design direction
- Ensure smooth animation and interactions
- Ensure responsive behavior
- Place generated images in public/images with exact filenames
- Return final summary of what was built and where

### Final Acceptance Checklist
- Navbar floats and works on mobile
- Hero has layered parallax and white squarcle card
- All major CTA buttons share one visual style
- Blends cards and lookbook are fully rendered with images
- Subscription form shows success state
- Scroll-to-top appears and works
- Footer is complete
- Visual quality matches premium coffee x analog editorial direction

