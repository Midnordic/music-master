Update the Music Master landing page.

IMPORTANT:
- Change ONLY the English version of the website.
- Do not modify Polish or any other localized content.
- Keep the current light, friendly visual identity of the website and the existing cat mascot.
- Do NOT redesign the site into a dark/cinematic theme.
- Reuse the existing design system, spacing, colors, typography, components and responsive conventions where possible.
- Do not change unrelated pages or functionality.
- Inspect the existing project structure before implementing and reuse existing components/assets rather than introducing unnecessary dependencies.
- Preserve the existing header/navigation unless changes are necessary to accommodate the new sections.
- Keep the existing top 3 blog picks section unchanged.
- Keep the existing footer unchanged.

The new landing page structure should be:

1. Hero
2. Four main feature showcases
3. Showcase video
4. Collapsible "Full feature list"
5. Download section with splash image
6. Trial vs Full comparison table
7. Existing top 3 blog picks
8. Existing footer


==================================================
1. HERO
==================================================

Change the hero title to:

"Make the players feel the scene!"

Change the hero subtitle to:

"Music Master gives Game Masters live control over music, ambience and sound effects - from simple playlists and soundboards to reactive transitions, cinematic effects and automated soundscapes."

Keep the existing download button.

Directly below the download button add a small secondary label:

"Windows & Android · Free sample pack included"

The label should be visually understated compared with the CTA.

Keep the existing mascot and overall hero visual identity.


==================================================
2. MAIN FEATURE SHOWCASE
==================================================

Replace/rework the current feature showcase into four substantial feature sections.

GENERAL LAYOUT

Do NOT make all four sections carousels.

Use four large full-width feature sections with alternating desktop composition:

1. Cinematiques:
   text left / visual right

2. Reactive Audio:
   visual left / text right

3. Layered Soundscapes:
   text left / visual right

4. Play Offline or Online:
   visual left / text right

On mobile:
- always place title/subtitle/introduction first
- visual second
- supporting feature points afterwards
- everything must stack cleanly

Use plenty of whitespace between sections.

Each feature should contain:
- feature title
- emotional subtitle
- short introduction
- one strong visual presentation
- four compact supporting points

Do not turn every supporting point into a large card.
Prefer simple compact rows or a 2-column mini-grid on desktop.

Use a combination of:
- real Music Master screenshots
- simple explanatory graphics
- existing mascot illustrations where appropriate

Avoid generic stock/fantasy artwork.

--------------------------------------------------
FEATURE 1 — CINEMATIQUES
--------------------------------------------------

Title:

"Cinematiques"

Subtitle:

"Turn ordinary moments into unforgettable ones."

Introduction:

"Use techniques inspired by movie sound design straight to your tabletop sessions. Pick from premade techniques to create tension, shock, suspense and other dramatic moments, just like in your favourite movies."

VISUAL PRESENTATION:

This is the ONE feature that should use a carousel.

Create a polished Cinematiques carousel containing four items.

Each slide should have:
- technique name
- short description
- relevant existing image/screenshot if available
- READ MORE link
- carousel controls
- dots/current-slide indicator

Carousel must:
- work with mouse/touch
- support keyboard navigation
- have accessible controls / ARIA labels
- work responsively
- not auto-rotate aggressively; manual navigation is preferred

Use the existing English blog routes. Search the project for the correct existing blog URLs instead of inventing routes.

All READ MORE links must open in a new tab and use the appropriate rel attributes.

Slides:

1.

Creeping Dread

"Transform well-known, peaceful track into a nightmare."

[READ MORE]

2.

Shellshock

"A classic cinematic way to simulate disorientation and trauma."

[READ MORE]

3.

Slow Motion

"stretch and emphasise a decisive action or intense moment."

[READ MORE]

4.

Ambient Mix

"Ambient mix weaves background sounds together to support mood, pacing, and narrative."

[READ MORE]


--------------------------------------------------
FEATURE 2 — REACTIVE AUDIO
--------------------------------------------------

Title:

"Reactive Audio"

Subtitle:

"Make the soundtrack obey your imagination."

Introduction:

"Make your soundtrack respond to what happens in the game. Set up custom reactions for any moment - trigger music, sounds, effects, transitions or ambience changes from events, timers or other tracks, and let Music Master handle them during play."

VISUAL PRESENTATION:

Do NOT use a carousel.

Use a large screenshot of the Music Master visual/node editor if an appropriate asset already exists.

The visual should communicate cause → reaction.

If practical using existing styles/assets, add subtle callouts around the editor screenshot such as:

Event triggered
↓
Music fades
↓
Ambience changes
↓
New track begins

Keep these explanatory rather than decorative.

Do not fake app functionality or create screenshots of UI that does not exist.

Supporting points:

"Build tension automatically"

"Let ambience fade, music slow down or unsettling sounds appear as a scene develops."

---

"Create seamless transitions"

"Start the next track, crossfade into a new mood or change several audio layers at once when the moment calls for it."

---

"Trigger whole sequences with one action"

"A single event can launch music, sound effects, fades and other reactions together - so complex moments stay easy to run during play."

---

"Make it entirely your own"

"Use Music Master’s visual editor to connect tracks, events, controllers and effects into custom audio logic built around your ideas."


--------------------------------------------------
FEATURE 3 — LAYERED SOUNDSCAPES
--------------------------------------------------

Title:

"Layered Soundscapes"

Subtitle:

"Build worlds your players can hear."

Introduction:

"Combine music, ambience and sound effects to create places that feel alive. Layer multiple sounds at once and change them independently as the scene evolves."

VISUAL PRESENTATION:

Do NOT use a carousel.

Create a visual that communicates multiple simultaneous audio layers.

Prefer combining a real Music Master screenshot with a lightweight explanatory overlay/graphic.

For example, visually represent layers similar to:

Tavern Music
Rain
Fireplace
Crowd
Wind

The purpose is to immediately communicate that multiple elements can play together and be adjusted independently.

If an appropriate mixer/ambient mix screenshot already exists, use it.

Do not invent fake controls that could be mistaken for the actual app UI.

Supporting points:

"Bring locations to life"

"Layer rain, wind, crowds, fire, wildlife or machinery beneath your music to give every place its own atmosphere."

---

"Change the scene without replacing it"

"Fade individual layers in and out as the players move, discover something or alter the environment."

---

"Mix multiple sounds naturally"

"Play several tracks at once and control their volume, balance and behavior separately to create richer, more believable soundscapes."

---

"Keep everything ready for the table"

"Organize your ambience, music and effects into playlists, soundboards and mixes so you can quickly shape the scene during play."


--------------------------------------------------
FEATURE 4 — PLAY OFFLINE OR ONLINE
--------------------------------------------------

Title:

"Play Offline or Online"

Subtitle:

"Run the game your way, wherever your table is."

Introduction:

"Music Master works fully offline, so you can run your session without relying on an internet connection. When you play remotely, you can stream the final mix directly to your players’ browsers or through Discord."

VISUAL PRESENTATION:

Do NOT use a carousel.

Use a simple, modern connection diagram.

Music Master should be the central element.

Visually show these paths:

Music Master
→ In-person table
  "No internet required"

Music Master
→ Browser Broadcast
→ Players
  "Link + PIN"

Music Master
→ Discord
→ Players

Also show Stream Deck as a smaller integration connected to Music Master.

Keep the diagram consistent with the current light visual theme.

Use simple icons, lines and labels rather than a complex technical architecture diagram.

Supporting points:

"Run sessions without an internet connection"

"Your music, soundscapes, effects and automation all work locally, so you are not dependent on a connection during offline games."

---

"Stream directly to your players’ browsers"

"Create a Broadcast room and share a link and PIN. Your players can listen in a modern browser without installing Music Master or creating any accounts."

---

"Use Discord for remote sessions"

"Music Master can also stream its audio through Discord, keeping your soundtrack inside the platform your group already uses."

---

"Integrate with Stream Deck"

"Connect Music Master with Stream Deck for fast physical controls during play."


==================================================
3. SHOWCASE VIDEO
==================================================

Immediately after the four feature sections, place the existing showcase video section.

Reuse the current showcase video and existing functionality.

The video should remain prominent and responsive.

Do not introduce another separate feature section between the four features and the video.


==================================================
4. FULL FEATURE LIST
==================================================

Directly below the showcase video, add a collapsible/foldable container.

Collapsed by default.

Title:

"Full feature list"

Use an accessible native <details>/<summary> implementation if it fits the existing codebase, otherwise implement an equivalent accessible accordion.

When expanded, show the following six feature categories in a clean responsive layout.

Prefer:
- 2 or 3 columns on desktop
- 1 column on mobile

CONTENT:

## Playback & Organization

- Playlists and soundboards
- Track looping, trimming, speed, volume and panning
- Smooth crossfades between tracks
- Simultaneous layered playback
- Boundle your projects into a single file

## Soundscapes & Mixing

- Layer music, ambience and sound effects
- Mix various audio effects
- Smooth timed transitions
- Ambient Mixes with multiple presets
- Up to 12 simultaneous audio streams

## Automation & Reactive Audio

- Visual node-based editor
- Manual and timed events
- Reactions to play, pause, stop, loop and finish
- Trigger multiple actions from a single event
- Automate volume, speed and other parameters

## Effects & Cinematiques

- Audio effects: amplify, echo, chamber echo, swirler, pitch shift, old radio and muffle
- Premade Cinematiques: Ambient Mix, Creeping Dread, Crossfade, Muffle, Shellshock, Silent Aftershock, Slow Motion and Sound Sequence
- Chain multiple audio effects together
- Build or customize your own cinematic audio behavior

## Live Play

- Dedicated Now Playing view for controlling everything
- Trigger tracks, events and Cinematiques during the session
- Global pause, resume and stop controls
- Adjust playing tracks in real time
- Soundboards for quick effects and actions
- Record audio directly inside Music Master

## Online & Integrations

- Fully functional offline play
- Browser Broadcast for remote players
- Share a link and PIN — no listener account or installation needed
- Up to 6 browser listeners
- Discord audio streaming
- Stream Deck integration
- Windows and Android support


==================================================
5. DOWNLOAD SECTION
==================================================

After the Full feature list, place the main download section.

Reuse the existing splash image.

Keep the download CTA clearly visible.

Maintain the existing download behavior/links unless the current implementation requires restructuring.

This should feel like the main conversion point after the visitor has seen the product capabilities.


==================================================
6. TRIAL VS FULL COMPARISON
==================================================

Below the download CTA/splash image, display a feature comparison between Trial and Full.

The table must be responsive.

On desktop use a normal comparison table.

On narrow mobile screens:
- preserve readability
- avoid tiny text
- allow horizontal scrolling if necessary, or use a mobile-friendly equivalent while keeping the same information

Table:

| Capability | Trial | Full |
| --- | --- | --- |
| Project size | 10 tracks | ✓ Unlimited |
| Track Length | 4:30 | ✓ Unlimited |
| Playlist / soundboard | 5 tracks | ✓ Unlimited |
| Simultaneous audio | 4 streams | ✓ 12 streams |
| Effects | Limited selection | ✓ All effects |
| Cinematiques | Limited selection | ✓ All Cinematiques |
| Editor and events | Not included | ✓ Full automation |
| Recording | Up to 31 seconds | ✓ Unlimited |
| Sample Pack Shop | Free packs | ✓ Full shop access |
| Integrations | Not included | ✓ Broadcast, Discord, Stream Deck |

Visually emphasize the Full column slightly, but do not make the Trial option look deliberately bad.

Keep styling consistent with the rest of the site.


==================================================
7. BLOG
==================================================

Next, keep the existing "top 3 blog picks" section.

NO content or functional changes to that section unless required because of layout restructuring.


==================================================
8. FOOTER
==================================================

Keep the existing footer unchanged.


==================================================
VISUAL / UX REQUIREMENTS
==================================================

The current website and mascot should remain the visual foundation.

Desired appearance:
- modern
- light
- welcoming
- polished
- creative
- suitable for tabletop RPG Game Masters
- not corporate SaaS
- not grimdark
- not overly fantasy-themed

Use:
- current light background/theme
- current brand colors
- subtle background tints where useful
- rounded corners consistent with the current website
- restrained shadows/borders
- generous whitespace
- clear visual hierarchy

The four main feature sections should feel visually related but not identical.

Suggested rhythm:

Cinematiques
text | carousel

Reactive Audio
editor visual | text

Layered Soundscapes
text | layered-audio visual

Play Offline or Online
connection diagram | text

Avoid:
- four identical card grids
- a carousel for every feature
- excessive animations
- generic stock imagery
- unnecessary decorative effects
- changing the site into a dark theme


==================================================
RESPONSIVENESS
==================================================

Verify the page at common breakpoints.

Desktop:
- alternate the visual/text layouts
- supporting points may use 2 columns

Tablet:
- avoid cramped side-by-side layouts
- allow sections to transition naturally toward stacked layout

Mobile:
- title/subtitle/intro first
- visual second
- supporting points below
- carousel must support touch
- comparison table must remain readable
- no horizontal page overflow
- CTA buttons should remain easy to tap


==================================================
ACCESSIBILITY
==================================================

Ensure:
- proper semantic heading hierarchy
- descriptive alt text for meaningful images
- decorative images have empty alt attributes
- carousel controls are keyboard accessible
- carousel controls have accessible labels
- expandable Full feature list is keyboard accessible
- focus states remain visible
- links opening in a new tab use target="_blank" with rel="noopener noreferrer"
- text contrast remains accessible


==================================================
IMPLEMENTATION GUIDELINES
==================================================

Before changing code:

1. Inspect the existing English landing-page implementation.
2. Locate the localization/i18n structure.
3. Identify existing screenshots, mascot assets and video assets.
4. Identify the existing English blog routes for:
   - Creeping Dread
   - Shellshock
   - Slow Motion
   - Ambient Mix
5. Reuse existing components where practical.

Do not:
- modify other languages
- alter unrelated pages
- replace existing site architecture unnecessarily
- add a large UI dependency solely for the carousel
- invent product screenshots
- invent blog URLs

Prefer CSS and the project's existing frontend framework/components for the carousel and diagrams.

After implementation:

1. Build the project.
2. Fix any build/type/lint errors caused by the changes.
3. Verify all four Cinematique READ MORE links.
4. Verify the English homepage at desktop, tablet and mobile sizes.
5. Verify no localized versions other than English changed.
6. Verify download links still work.
7. Verify the showcase video still works.
8. Verify the Full feature list expands/collapses correctly.
9. Verify there is no horizontal overflow on mobile.
10. Summarize the files changed and major implementation decisions.