# Git initialization and setup for Password Generator project

# Initialize git repository
git init

# Create .gitignore
echo "# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Environment
.env
.env.local
.env.production

# Cache
.cache/
dist/
build/" > .gitignore

# Add all files
git add .

# Initial commit
git commit -m "🔐 Initial commit: Password Generator for Facets Cloud Assignment

✨ Features:
- Stage 1: Password length input and generation with alphabets
- Stage 2: Checkboxes for alphabets, numbers, and symbols
- Bonus: Password strength indicator, copy functionality, responsive design
- Modern UI with animations and accessibility support
- PWA ready with service worker and manifest

🛠 Tech Stack: HTML5, CSS3, JavaScript ES6+
📱 Responsive design for all devices
🔒 Client-side security with no data storage
♿ WCAG compliant accessibility"

echo "✅ Git repository initialized!"
echo "📚 Next steps:"
echo "1. Create GitHub repository"
echo "2. Add remote: git remote add origin https://github.com/username/password-generator.git"  
echo "3. Push: git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"
echo "5. Update README.md with live demo URL"
