---
name: Warm Kinship
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#57423f'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8a716e'
  outline-variant: '#ddc0bb'
  surface-tint: '#a23d30'
  primary: '#9f3b2e'
  on-primary: '#ffffff'
  primary-container: '#bf5343'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a8'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#795600'
  on-tertiary: '#ffffff'
  tertiary-container: '#986d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#82261b'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#f4be55'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system embodies a home-finding and housemate-matching experience that feels safe, organized, empathetic, and joyful. It counters the anxiety, transactional friction, and chaos of apartment hunting through clean composition, soft geometry, and human warmth. 

The aesthetic is a hybrid of Modern Warmth and Soft Tactile Minimal:
- **Atmospheric Warmth:** Anchored in sun-drenched, domestic neutrals rather than sterile digital greys.
- **Approachable Structure:** Information density remains structured, clear, and scannable without ever feeling clinical or bureaucratic.
- **Tactile Softness:** Elements invite interaction with rounded profiles, cushion-like pill buttons, and diffused, glowing micro-shadows that feel pleasant to tap.

## Colors

The palette balances emotional warmth, domestic reassurance, and high behavioral clarity:

- **Primary (`#E26D5C` - Warm Terracotta/Coral):** Used for focal calls-to-action, active indicators, and high-energy interactive nodes. Communicates hospitality and vitality. Foreground text on primary elements is strictly `#FFFFFF`.
- **Secondary (`#2D6A4F` - Forest Canopy):** Applied for affinity indicators, high-compatibility match tags, verified badge icons, and confirmed status messaging. Offers grounding organic stability.
- **Tertiary (`#E9B44C` - Warm Ochre):** Applied for nuance badges, "tolerable differences" tags, lifestyle warnings, and informational alerts. Radiates positivity rather than harsh alarm.
- **Canvas & Surfaces:**
  - Base canvas: `#F8F7F4` (warm linen cream) avoids cold glare and creates a cozy canvas.
  - Cards & modal surfaces: `#FFFFFF` pure white to lift content cleanly off the warm base.
  - Surface muted: `#F0EEE9` for input fills, inactive toggle tracks, and secondary button backgrounds.
- **Text & Borders:**
  - Dominant text: `#262626` for primary headers, titles, and critical labels.
  - Secondary text: `#64748B` for secondary details, metadata, and timestamps.
  - Subtle borders: `#EAE6DF` for hairline dividers and card boundaries.

## Typography

The typographic pairing contrasts a welcoming, geometric geometric headline typeface (Plus Jakarta Sans) with an exceptionally legible, utilitarian workhorse (Inter) for data and body copy.

- **Headlines & Labels (Plus Jakarta Sans):** Geometric curves and open apertures provide an upbeat, friendly demeanor without sacrificing compact horizontal rhythm. Used on titles, card headers, personality tags, metrics, and button actions.
- **Body & Captions (Inter):** High x-height, neutral letterforms, and distinct glyphs guarantee effortless readability across bios, apartment rules, lease terms, and chat interfaces.
- **Hierarchy Rules:**
  - Keep line height generous on body copy (`1.45`–`1.5`) to create an airy, uncrowded reading pace.
  - Numeric match scores and lifestyle affinity metrics pair `Plus Jakarta Sans 700` with small uppercase descriptors.

## Layout & Spacing

The layout system is mobile-first, designed for single-handed ergonomic navigation and clear content chunking.

- **Screen Canvas & Safe Areas:** The default mobile canvas uses an outer margin of `1.25rem` (20px), ensuring content does not touch device edges while maximizing tap real estate on 375px–430px screens.
- **Component Flow & Gaps:**
  - Card internal padding defaults to `space-md` (16px) or `space-lg` (24px) for prominent profile hero units.
  - Stacked list elements and roommate criteria cards maintain a vertical gap of `space-md` (16px).
  - Tightly coupled micro-elements (avatar + name, badge + count) rely on `space-xs` (4px) to `space-sm` (8px).
- **Sticky Footer Rhythm:** Action docks (e.g., "Request Roommate Connection", "Send Message") float pinned above the safe-area bottom with `1rem` horizontal and vertical inset, enveloped in a pill or rounded container.

## Elevation & Depth

Visual hierarchy uses warm, diffuse ambient shadows paired with soft structural borders rather than heavy drop-shadows.

- **Level 0 (Base):** Canvas tone `#F8F7F4` with no elevation.
- **Level 1 (Cards & Inputs):** Background `#FFFFFF`, border `1px solid #EAE6DF`, shadow `0px 4px 12px rgba(38, 38, 38, 0.05)`. This creates a clean, hovering paper-like surface.
- **Level 2 (Active Cards, Popovers, & Tooltips):** Background `#FFFFFF`, border `1px solid rgba(226, 109, 92, 0.15)`, shadow `0px 8px 24px rgba(38, 38, 38, 0.08)`. Used for expanded roommate trait previews and active map markers.
- **Level 3 (Modals & Bottom Sheets):** Background `#FFFFFF`, shadow `0px -8px 32px rgba(38, 38, 38, 0.12)`, overlaid on a backdrop scrim of `rgba(38, 38, 38, 0.35)`.
- **Special Accent Elevation (Primary Action Glow):** Primary buttons use a soft tinted underglow: `box-shadow: 0 6px 16px rgba(226, 109, 92, 0.30)`.

## Shapes

The shape system adopts friendly, human-centric geometry with generous radii that communicate approachability and safety:

- **Buttons & Chips:** Always full pill (`rounded-full` / `9999px`) to create tactile, easy-to-tap targets.
- **Cards & Sheets:** Base cards employ `1.5rem` (24px, `rounded-2xl`). Sheet containers and hero profile blocks use `2rem` (32px, `rounded-3xl`).
- **Inner Micro-Surfaces:** Habit tags, thumbnail photo containers, and mini metric tiles use `1rem` (16px).
- **Avatars:** Perfect circular silhouettes (`rounded-full`) framed with a 2px `#FFFFFF` halo to isolate them cleanly against card backgrounds.

## Components

### Buttons
- **Primary Action:** Full pill shape, height `48px` or `52px`, background `#E26D5C`, typography `label-lg` in `#FFFFFF`. Shadow: `0 6px 16px rgba(226, 109, 92, 0.30)`. On press, slight scale-down (`transform: scale(0.98)`).
- **Secondary Action:** Full pill shape, background `#F0EEE9`, text `#262626`, zero shadow, border `1px solid transparent`.
- **Ghost/Tertiary:** Text-only in `#E26D5C`, padding `space-sm` `space-md`, bold label with minimal tactile tap state.

### Affinity Chips & Badges
- **High Compatibility Badge:** Background `#2D6A4F` tint (10% opacity: `#EAF2ED`), text `#2D6A4F`, border `1px solid rgba(45, 106, 79, 0.20)`. Preceded by a filled leaf or check icon.
- **Lifestyle Difference Badge:** Background `#E9B44C` tint (12% opacity: `#FDF8ED`), text `#8C6511`, border `1px solid rgba(233, 180, 76, 0.30)`.
- **Tag/Interest Pills:** Inactive: `#FFFFFF` fill with `#EAE6DF` outline; Active: `#E26D5C` fill with `#FFFFFF` text.

### Cards
- **Roommate Profile Card:** Surface `#FFFFFF`, border radius `1.5rem`, padding `1rem`, border `1px solid #EAE6DF`, shadow `0 4px 12px rgba(38, 38, 38, 0.05)`. Top hero image with rounded-xl corners, bottom metadata row displaying budget, move-in date, and mutual habits.
- **Housing Listing Card:** Horizontal layout with `96x96px` rounded image on the left, price highlighted in `headline-md` `#262626`, and walking distance badge attached.

### Input Fields
- Height `48px`, background `#F8F7F4`, border radius `1rem`, border `1.5px solid #EAE6DF`.
- Focused state: background `#FFFFFF`, border `1.5px solid #E26D5C`, ring shadow `0 0 0 3px rgba(226, 109, 92, 0.15)`. Placeholder text in `#94A3B8`.

### Checkboxes & Radio Controls
- Radio controls are pill toggles or rounded circular nodes (`22px`). Selected state features a filled `#E26D5C` ring with `#FFFFFF` center bullet.
- Selection tiles (for cleanliness, sleep schedule, smoking): large rounded card switches (`rounded-2xl`) that transition from `#FFFFFF` base to warm coral border (`#E26D5C`) and `#FDF6F5` tinted background when toggled.

### Popups & Tooltips
- Playful speech-bubble styling with a soft micro-pointer, radius `1rem`, padding `0.75rem 1rem`, background `#262626` with `#FFFFFF` text for compact tooltips, or `#FFFFFF` with warm shadow for conversational onboarding hints.