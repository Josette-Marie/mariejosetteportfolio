# Features Guide

## 🌓 Dark Mode

### How to Use
1. Look for the moon/sun icon button in the top navigation bar
2. Click the button to toggle between light and dark themes
3. Your preference is automatically saved and will persist across visits

### Technical Details
- Uses CSS custom properties (variables) for easy theme switching
- Theme preference stored in browser's localStorage
- Smooth transitions between themes
- All colors automatically adjust including:
  - Background colors
  - Text colors
  - Border colors
  - Shadow effects

## 🌍 Language Support (Internationalization)

### Available Languages
- **English** (en) - Default
- **Français** (fr) - French

### How to Use
1. Find the language dropdown in the navigation bar
2. Select your preferred language
3. The page content will update immediately
4. Your language preference is saved automatically

### Adding More Languages
To add a new language, edit `translations.js`:

```javascript
const translations = {
    en: { /* English translations */ },
    fr: { /* French translations */ },
    es: { /* Add Spanish translations */ }
};
```

Then add the option to the language selector in HTML:
```html
<option value="es">Español</option>
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Laptop**: 769px - 1024px
- **Desktop**: 1025px+

### Mobile Features
- Hamburger menu for navigation
- Touch-friendly buttons (minimum 44x44px)
- Optimized image sizes
- Stacked layouts for better readability
- Larger text for mobile devices

### Tablet Features
- Adaptive grid layouts
- Optimized spacing
- Flexible navigation

### Desktop Features
- Multi-column layouts
- Hover effects
- Larger images and content areas

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close mobile menu

### Screen Reader Support
- ARIA labels on all interactive elements
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

### Visual Accessibility
- High contrast ratios in both themes
- Focus indicators on all interactive elements
- Scalable text (supports browser zoom up to 200%)
- No content relies solely on color

## 🎨 Design System

### Color Palette

#### Light Mode
- Primary: #7b1e3c (Crimson)
- Secondary: #e97451 (Orange)
- Accent: #f6e7d8 (Pink)
- Text: #333 (Dark Gray)
- Background: #ffffff (White)

#### Dark Mode
- Primary: #a8365a (Light Crimson)
- Secondary: #ff8c6b (Light Orange)
- Accent: #2a2a2a (Dark Gray)
- Text: #e0e0e0 (Light Gray)
- Background: #1a1a1a (Near Black)

### Typography
- Font Family: Inter (Google Fonts)
- Base Size: 16px
- Line Height: 1.6
- Weights: 300, 400, 500, 600, 700

## 🚀 Performance Tips

### For Best Performance
1. Use modern browsers (Chrome, Firefox, Safari, Edge)
2. Enable JavaScript for full functionality
3. Allow localStorage for saving preferences
4. Use a stable internet connection for loading fonts and icons

### Offline Considerations
- Core functionality works offline after first load
- Font Awesome icons cached by browser
- Google Fonts cached by browser
- Theme and language preferences stored locally

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-crimson: #7b1e3c;
    --secondary-orange: #e97451;
    /* Add your colors */
}
```

### Changing Fonts
Replace the Google Fonts link in HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update the CSS:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📊 Browser Compatibility

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile 90+

### Graceful Degradation
- Older browsers will display light theme only
- JavaScript disabled: Basic functionality maintained
- CSS not supported: Semantic HTML ensures readability

## 🐛 Troubleshooting

### Dark Mode Not Working
1. Check if JavaScript is enabled
2. Clear browser cache and localStorage
3. Try a different browser

### Language Not Changing
1. Ensure JavaScript is enabled
2. Check browser console for errors
3. Verify translations.js is loaded

### Mobile Menu Not Opening
1. Check if JavaScript is enabled
2. Try refreshing the page
3. Clear browser cache

### Layout Issues
1. Try zooming to 100%
2. Clear browser cache
3. Update your browser to the latest version

## 💡 Tips for Content Editors

### Adding New Sections
1. Use semantic HTML tags
2. Add `data-i18n` attributes for translatable text
3. Use CSS variables for colors
4. Test in both light and dark modes
5. Verify responsive behavior on all screen sizes

### Best Practices
- Keep text concise for mobile users
- Use high-quality, optimized images
- Test all interactive elements
- Ensure sufficient color contrast
- Provide alt text for all images
