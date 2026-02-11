# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Open the Website
Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click → Open with → Your browser, or
- Drag and drop into browser window

### Step 2: Try the Features

#### Toggle Dark Mode
1. Look at the top navigation bar
2. Click the **moon icon** (🌙) on the right side
3. Watch the theme change to dark mode
4. Click the **sun icon** (☀️) to switch back

#### Change Language
1. Find the language dropdown next to the theme toggle
2. Select **"Français"** to switch to French
3. Select **"English"** to switch back
4. Your choice is saved automatically

#### Test Mobile View
1. Resize your browser window to be narrow
2. Watch the hamburger menu (☰) appear
3. Click it to open the mobile navigation
4. Click a link or outside to close it

### Step 3: Explore All Pages
- **Home Page** (`index.html`) - Main portfolio content
- **Gallery Page** (`gallery.html`) - Media and performances

---

## 📱 Testing on Different Devices

### On Desktop
1. Open in Chrome, Firefox, Safari, or Edge
2. Try resizing the window
3. Test all interactive elements
4. Switch between themes

### On Mobile
1. Open on your phone's browser
2. Test the hamburger menu
3. Try scrolling and navigation
4. Check theme toggle and language selector

### On Tablet
1. Test in both portrait and landscape
2. Verify layouts adapt properly
3. Check touch interactions

---

## 🎨 Customization Quick Tips

### Change Colors
Edit `styles.css` and find these lines:
```css
:root {
    --primary-crimson: #7b1e3c;  /* Change this */
    --secondary-orange: #e97451;  /* And this */
}
```

### Add More Languages
Edit `translations.js` and add:
```javascript
es: {
    'nav-home': 'Inicio',
    'nav-bio': 'Biografía',
    // ... more translations
}
```

Then add to HTML:
```html
<option value="es">Español</option>
```

---

## ✅ Quick Checklist

Before going live, verify:
- [ ] Website opens without errors
- [ ] Dark mode toggle works
- [ ] Language selector works
- [ ] Mobile menu opens/closes
- [ ] All links work
- [ ] Images load properly
- [ ] Forms are functional
- [ ] No console errors

---

## 🐛 Quick Troubleshooting

### Dark Mode Not Working?
- Make sure JavaScript is enabled
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser

### Language Not Changing?
- Check if `translations.js` is loaded
- Open browser console (F12) for errors
- Refresh the page (Ctrl+R or Cmd+R)

### Mobile Menu Not Opening?
- Ensure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

### Layout Looks Broken?
- Clear browser cache
- Make sure all CSS files are loaded
- Try zooming to 100% (Ctrl+0 or Cmd+0)

---

## 📞 Need Help?

### Check Documentation
1. `README.md` - Overview and features
2. `FEATURES-GUIDE.md` - Detailed feature documentation
3. `TESTING-CHECKLIST.md` - Complete testing guide
4. `IMPLEMENTATION-SUMMARY.md` - Technical details

### Common Questions

**Q: How do I deploy this website?**
A: Upload all files to your web hosting service via FTP or hosting panel.

**Q: Do I need a server?**
A: No! This is a static website that works with any web hosting.

**Q: Can I use this on GitHub Pages?**
A: Yes! Just push to a GitHub repository and enable GitHub Pages.

**Q: Will my preferences save?**
A: Yes, theme and language preferences are saved in your browser's localStorage.

**Q: Does it work offline?**
A: After first load, most features work offline. Fonts and icons need internet.

---

## 🎯 Next Steps

1. **Customize Content**: Update text, images, and information
2. **Add Your Photos**: Replace images in the `pics/` folder
3. **Update Links**: Change social media and contact links
4. **Test Thoroughly**: Use the testing checklist
5. **Deploy**: Upload to your web hosting
6. **Share**: Send the link to friends and colleagues!

---

## 🌟 Pro Tips

- **Bookmark the site** in different themes to see both versions
- **Test on real devices** not just browser resize
- **Ask friends** to test on their devices
- **Check analytics** after launch to see device usage
- **Keep backups** of your files before making changes
- **Update regularly** with new content and features

---

## 📚 Learn More

Want to understand how it works?
- Read `FEATURES-GUIDE.md` for feature details
- Check `IMPLEMENTATION-SUMMARY.md` for technical info
- Review the code comments in CSS and JS files
- Experiment with the code - that's the best way to learn!

---

**Ready to launch? You've got this! 🚀**

If you encounter any issues, refer to the documentation files or check the browser console (F12) for error messages.
