# Password Generator - Facets Cloud Screening Assignment

A modern, responsive password generator web application built with HTML, CSS, and JavaScript.

## 🔗 Live Demo
[View Live Demo](https://your-username.github.io/password-generator)

## 📱 Features

### Stage 1 ✅
- User can enter the length of password (4-50 characters)
- Click generate button to create password
- Display generated password
- Password contains alphabets by default

### Stage 2 ✅
- Include checkboxes for user options:
  - ✅ Include alphabets (A-Z, a-z)
  - ✅ Include numbers (0-9)
  - ✅ Include symbols (!@#$%^&*()_+-=[]{}|;:,.<>?)

### Additional Features 🚀
- **Password Strength Indicator**: Visual feedback on password security
- **Copy to Clipboard**: One-click copy functionality
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful gradient design with animations
- **Keyboard Shortcuts**: Press Enter to generate password
- **Input Validation**: Ensures at least one character type is selected
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠 Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Animations**: CSS Transitions and Transforms

## 📋 Assumptions

1. **Character Sets**:
   - Alphabets: A-Z, a-z (52 characters)
   - Numbers: 0-9 (10 characters)  
   - Symbols: !@#$%^&*()_+-=[]{}|;:,.<>? (25 common symbols)

2. **Password Length**:
   - Minimum: 4 characters (for basic functionality)
   - Maximum: 50 characters (reasonable upper limit)
   - Default: 12 characters (recommended length)

3. **User Experience**:
   - At least one character type must be selected
   - Generated passwords are guaranteed to contain at least one character from each selected type
   - Password characters are shuffled to avoid predictable patterns

4. **Security Considerations**:
   - Uses cryptographically secure Math.random() for character selection
   - No password storage or logging
   - Client-side only generation for privacy

5. **Browser Compatibility**:
   - Modern browsers supporting ES6+ features
   - Clipboard API for copy functionality (with fallback)
   - CSS Grid and Flexbox support

6. **Responsive Design**:
   - Mobile-first approach
   - Breakpoint at 768px for tablet/mobile
   - Touch-friendly interface elements

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   cd password-generator
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

### Deployment Options

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Access via `https://your-username.github.io/password-generator`

#### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

## 📁 Project Structure
```
password-generator/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── screenshots/        # Demo images (optional)
```

## 🎨 Design Decisions

1. **Color Scheme**: Blue gradient theme for trust and security
2. **Typography**: Segoe UI for Windows compatibility and readability
3. **Layout**: Card-based design with clear sections
4. **Interactions**: Smooth animations and hover effects
5. **Accessibility**: High contrast ratios and keyboard navigation

## 🔒 Security Features

- **Character Distribution**: Ensures representation from all selected character types
- **Randomization**: Multiple layers of randomization for unpredictability
- **No Storage**: Passwords are never stored or transmitted
- **Strength Analysis**: Real-time feedback on password security

## 🧪 Testing

### Manual Testing Checklist
- [ ] Generate password with different lengths
- [ ] Test all character type combinations
- [ ] Verify error handling for no selections
- [ ] Test copy to clipboard functionality
- [ ] Check responsive design on different screen sizes
- [ ] Validate keyboard accessibility

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## 🚧 Future Enhancements

1. **Password History**: Remember last few generated passwords
2. **Custom Character Sets**: Allow users to define custom characters
3. **Pronounceable Passwords**: Generate memorable but secure passwords
4. **Batch Generation**: Generate multiple passwords at once
5. **Password Strength Meter**: More detailed strength analysis
6. **Dark Mode**: Theme switching capability
7. **PWA Features**: Offline functionality and app installation

## 📄 License
MIT License - feel free to use this project for learning and development.


## 🙏 Acknowledgments
- Font Awesome for icons
- CSS Gradient inspiration from various design resources
- Password security guidelines from OWASP

---

**Built for Facets Cloud Screening Assignment** 🚀
