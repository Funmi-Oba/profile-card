 # Profile Card

A clean, accessible, and responsive Profile Card component built with semantic HTML, vanilla CSS, and vanilla JavaScript. Built as a Stage 1B frontend task for my internship.

## Live Demo
[View Live](https://funmi-oba.github.io/profile-card/)

## GitHub Repo
[View Code](https://github.com/Funmi-Oba/profile-card)

---

## How to Run Locally

1. Clone the repository:
   git clone https://github.com/Funmi-Oba/profile-card.git

2. Open the project folder:
   cd profile-card

3. Open index.html in your browser.
   No installations, no build tools, no dependencies needed.

---

## Features

- Displays user avatar, name, bio, social links, hobbies and dislikes.
- Live epoch time in milliseconds that updates every second using setInterval and Date.now().
- Fully responsive layout — single column on mobile, two column (avatar left, info right) on desktop.
- All data-testid attributes match the exact specification for automated testing compatibility.
- Social links open in a new tab with rel="noopener noreferrer" for security.
- Keyboard navigable — all links are focusable with visible focus rings.

---

## Decisions Made

- Used semantic HTML throughout — article, figure, nav, section, h2, h3, p, time, ul, li — for accessibility and readability.
- Mobile first CSS approach — base styles target mobile, media queries add desktop layout on top.
- CSS Grid used for the two column desktop layout (grid-template-columns: 200px 1fr).
- font-variant-numeric: tabular-nums applied to the epoch time so the layout does not jump as digits change every second.
- Avatar wrapped in figure and figcaption for semantic correctness.
- sr-only class used to hide elements visually while keeping them readable by screen readers.
- aria-live="polite" on the time element so screen readers announce updates without interrupting the user.
- aria-labelledby used on each section to link it to its heading for better screen reader navigation.

---

## Accessibility Notes

- Avatar has meaningful alt text describing the person.
- All social links have aria-label attributes.
- Focus styles are visible on all interactive elements meeting WCAG AA requirements.
- Sections use aria-labelledby to associate headings with their content regions.
- Time element uses aria-live="polite" for dynamic update announcements.
- Color contrast meets WCAG AA standards throughout.

---

## Trade-offs

- Avatar uses a generated DiceBear avatar URL instead of a real photo. Replace the src in index.html with any image URL to use a real photo.
- Profile data is hardcoded in HTML. In a real app this would come from an API.
- Epoch time updates every second — in a real app you might debounce this or only update on demand to reduce unnecessary DOM updates.

---

## Known Limitations

- No image upload functionality — avatar must be a URL.
- Profile data cannot be edited through the UI.

---

## Built With
- HTML5
- CSS3
- Vanilla JavaScript