# Quick Reference Guide - Common Modifications

## 🎯 Most Common Changes

### 1. Update LinkedIn URL
**File:** `index.html`
**Line:** Search for "linkedin.com"
```html
<!-- FIND THIS -->
<a href="https://www.linkedin.com/in/your-profile" class="connect-button" target="_blank">

<!-- CHANGE TO -->
<a href="https://www.linkedin.com/in/YOUR-ACTUAL-PROFILE" class="connect-button" target="_blank">
```

### 2. Change Primary Color
**File:** `styles.css`
**Search for:** `#4A90E2` (appears multiple times)
```css
/* FIND AND REPLACE ALL INSTANCES */
#4A90E2  →  #YourColorHere

/* Main places it appears: */
.nav-menu a:hover { color: #4A90E2; }
.nav-menu .cta-button { background-color: #4A90E2; }
.connect-button { background-color: #4A90E2; }
.project-link { color: #4A90E2; }
```

### 3. Add a New Service
**File:** `index.html`
**Section:** Services (search for "services-list")
```html
<!-- ADD NEW <li> INSIDE THE <ul class="services-list"> -->
<li>Your new service description here</li>
```

### 4. Add a New Project
**File:** `index.html`
**Section:** Projects (search for "projects-grid")
```html
<!-- COPY THIS ENTIRE BLOCK AND PASTE BELOW -->
<div class="project-card">
    <h3>Project Name</h3>
    <p>Brief description of the project</p>
    <a href="https://yourproject.com" target="_blank" class="project-link">
        Visit Site →
    </a>
</div>
```

### 5. Change Hero Background Image
**File:** `styles.css`
**Section:** `.hero`
```css
/* FIND THIS */
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
                  url('tahoe-tallac.png');

/* CHANGE TO */
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
                  url('your-new-image.jpg');

/* Note: First, add your image file to the same folder as the HTML files */
```

### 6. Adjust Hero Image Darkness
**File:** `styles.css`
**Section:** `.hero`
```css
/* FIND THIS */
linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))

/* CHANGE 0.3 to make it lighter (0.1) or darker (0.6) */
linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
/*                          ↑ This number controls darkness (0=clear, 1=black) */
```

### 7. Change Font
**File:** `styles.css`
**Section:** Top of file and `body` styles
```css
/* CURRENT FONT */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* POPULAR ALTERNATIVES (already work, no import needed): */
/* Modern & Clean */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Traditional & Readable */
font-family: Georgia, Times, serif;

/* Tech/Modern Look */
font-family: 'SF Mono', Monaco, monospace;
```

To use Google Fonts:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select a font and copy the `<link>` code
3. Add it to the `<head>` section of `index.html`
4. Update the `font-family` in CSS

### 8. Modify Section Spacing
**File:** `styles.css`
```css
/* FIND THESE (one for each section) */
.about { padding: 6rem 0; }
.services { padding: 6rem 0; }
.projects { padding: 6rem 0; }

/* CHANGE 6rem to: */
/* - More space: 8rem or 10rem */
/* - Less space: 4rem or 3rem */
```

### 9. Change Navigation Style
**File:** `styles.css`
**Section:** `.navbar`
```css
/* FOR SOLID BACKGROUND (no transparency) */
background-color: #ffffff;
/* Remove this line: backdrop-filter: blur(10px); */

/* FOR DARKER NAV */
background-color: #333333;
/* Then change link colors to white in .nav-menu a */
```

### 10. Update Copyright Year
**File:** `index.html`
**Section:** Footer
```html
<!-- FIND THIS -->
<p>&copy; 2024 Waypoint Logic. All rights reserved.</p>

<!-- CHANGE TO -->
<p>&copy; 2025 Waypoint Logic. All rights reserved.</p>
```

## 🎨 Color Palette Suggestions

Replace `#4A90E2` with these alternatives:

### Nature-Inspired (matches Lake Tahoe theme)
```css
Forest Green:  #2D5F3F
Lake Blue:     #0077BE
Mountain Gray: #5F6266
Sunset Orange: #E87722
```

### Professional & Clean
```css
Navy Blue:     #1E3A8A
Slate Gray:    #475569
Teal:          #0D9488
Crimson:       #991B1B
```

### Modern & Bold
```css
Purple:        #7C3AED
Emerald:       #059669
Amber:         #D97706
Rose:          #E11D48
```

## 📏 Size Reference

### Font Sizes
- Small text: `0.9rem` to `1rem`
- Normal text: `1.1rem` to `1.2rem`
- Subheadings: `1.5rem` to `2rem`
- Main headings: `2.5rem` to `4rem`

### Spacing (padding/margin)
- Tight: `0.5rem` to `1rem`
- Normal: `1rem` to `2rem`
- Generous: `3rem` to `6rem`
- Extra large: `8rem` to `10rem`

### Common Conversions
- `1rem` = 16px (usually)
- `0.5rem` = 8px
- `2rem` = 32px
- `4rem` = 64px

## 🔍 Finding Things in Code

### Useful Search Terms

To find specific elements quickly, use your editor's search (Ctrl+F or Cmd+F):

- **Navigation bar:** Search "navbar"
- **Hero section:** Search "hero"
- **Services list:** Search "services-list"
- **Project cards:** Search "project-card"
- **Footer:** Search "footer"
- **Any color:** Search "#" (shows all hex colors)
- **Links:** Search "href="
- **Images:** Search "src="

## 💾 Before Making Changes

Always save a backup:
1. Make a copy of the entire folder
2. Name it with a date: `waypoint-logic-backup-2024-11-13`
3. Then modify your working copy
4. If something breaks, you can restore from backup

## 🚨 Common Mistakes to Avoid

1. **Forgetting closing tags:** Every `<div>` needs a `</div>`
2. **Case sensitivity:** `Image.jpg` ≠ `image.jpg`
3. **Missing semicolons in CSS:** `color: blue;` ← needs semicolon
4. **Editing while page is open:** Save, then refresh browser (Ctrl+R)
5. **Changing class names:** If you change `.hero` in CSS, change it in HTML too

---

**Pro Tip:** Keep this file open while editing for quick reference!
