# Waypoint Logic Website

A simple, single-page website built with HTML, CSS, and JavaScript.

## 📁 Files Included

- **index.html** - Main HTML structure
- **styles.css** - All styling and visual design
- **script.js** - Interactive features and smooth scrolling
- **Logo files** - Your Waypoint Logic branding
- **tahoe-tallac.png** - Hero section background image

## 🎨 Customization Guide

### Changing Text Content
1. Open `index.html` in any text editor
2. Find the section you want to edit (search for section names like "About", "Services", etc.)
3. Modify text between HTML tags, for example:
   ```html
   <p>Your new text here</p>
   ```

### Changing Colors
1. Open `styles.css`
2. Look for color codes (example: `#4A90E2` is blue)
3. Replace with your preferred colors
4. Main colors used:
   - Primary blue: `#4A90E2`
   - Dark blue: `#357ABD`
   - Background gray: `#f8f9fa`
   - Text dark: `#333`

### Adding More Projects
1. Open `index.html`
2. Find the "Projects Section"
3. Copy the entire `<div class="project-card">` block
4. Paste it below and modify the content:
   ```html
   <div class="project-card">
       <h3>Your Project Name</h3>
       <p>Project description</p>
       <a href="https://yourlink.com" target="_blank" class="project-link">
           Visit Site →
       </a>
   </div>
   ```

### Updating Your LinkedIn URL
1. Open `index.html`
2. Find the line: `<a href="https://www.linkedin.com/in/your-profile"`
3. Replace with your actual LinkedIn profile URL

### Changing Background Image
1. Add your new image file to the same folder as the HTML files
2. Open `styles.css`
3. Find the `.hero` section
4. Update this line:
   ```css
   background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
                     url('your-new-image.jpg');
   ```

## 🚀 Hosting Options

### Option 1: GitHub Pages (FREE)
1. Create a GitHub account at github.com
2. Create a new repository named `your-username.github.io`
3. Upload all files to the repository
4. Go to Settings > Pages
5. Select main branch and save
6. Your site will be live at `https://your-username.github.io`

**Tutorial:** https://pages.github.com/

### Option 2: Netlify (FREE)
1. Create account at netlify.com
2. Drag and drop your entire folder to Netlify
3. Get instant custom URL
4. Optional: Add custom domain

**Tutorial:** https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

### Option 3: Vercel (FREE)
1. Create account at vercel.com
2. Import your project from GitHub or upload directly
3. Automatic deployments on every change

**Tutorial:** https://vercel.com/docs

### Option 4: Traditional Web Hosting
- Bluehost, SiteGround, DreamHost, etc.
- Upload files via FTP using FileZilla
- Point your domain to the hosting

## 🛠️ Local Development

To test your site locally:

1. **Simple method:** Double-click `index.html` to open in browser
2. **With local server (recommended):**
   - Install [Python](https://www.python.org/)
   - Open terminal in the website folder
   - Run: `python -m http.server 8000`
   - Visit: `http://localhost:8000` in browser

Why use a local server? Some features work better with a server (like certain JavaScript features and loading external resources).

## 📱 Testing Responsiveness

Test how your site looks on different devices:
1. Open the site in Chrome or Firefox
2. Press F12 to open Developer Tools
3. Click the device toggle icon (looks like a phone/tablet)
4. Select different device sizes to preview

## 🎓 Learning Resources

### HTML
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

### CSS
- [CSS Tricks](https://css-tricks.com/)
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Eloquent JavaScript (Free Book)](https://eloquentjavascript.net/)

### Web Development
- [freeCodeCamp](https://www.freecodecamp.org/)
- [The Odin Project](https://www.theodinproject.com/)

## 💡 Tips for Modifying the Code

1. **Make small changes** - Change one thing at a time and test
2. **Use browser inspector** - Right-click > Inspect to see how CSS affects elements
3. **Comment your changes** - Add notes to remember why you changed something
4. **Keep backups** - Save versions before making major changes
5. **Search when stuck** - Most coding problems have been solved on Stack Overflow

## 🐛 Troubleshooting

### Images not showing?
- Check that image filenames match exactly (case-sensitive)
- Make sure images are in the same folder as HTML file
- Check browser console (F12) for error messages

### Styles not applying?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `styles.css` is in the same folder
- Look for typos in class names

### JavaScript not working?
- Open browser console (F12) to see errors
- Check that `script.js` is in the same folder
- Make sure there are no typos in your JavaScript

## 📧 Need Help?

- Post questions on [Stack Overflow](https://stackoverflow.com/) with tag `html`, `css`, or `javascript`
- Join [freeCodeCamp forum](https://forum.freecodecamp.org/)
- Check [MDN Web Docs](https://developer.mozilla.org/) for reference

## ✅ Recommended Next Steps

1. ✏️ Update your LinkedIn URL
2. 🎨 Customize colors to match your brand
3. 📝 Add more project cards as you build them
4. 🚀 Deploy to GitHub Pages or Netlify
5. 🔍 Add Google Analytics (optional)
6. 📱 Test on different devices
7. 🎯 Set up a custom domain (optional)

---

Built with ❤️ for learning and growth. Good luck with your coding journey!
