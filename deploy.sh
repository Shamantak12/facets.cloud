#!/bin/bash

# Deployment script for Password Generator
# This script helps deploy the application to various hosting platforms

echo "🔐 Password Generator Deployment Script"
echo "======================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Password Generator for Facets assignment"
fi

echo ""
echo "Choose deployment option:"
echo "1. GitHub Pages"
echo "2. Netlify"
echo "3. Vercel"
echo "4. Surge.sh"
echo "5. Firebase Hosting"

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "📚 GitHub Pages Deployment"
        echo "1. Push your code to GitHub"
        echo "2. Go to repository Settings > Pages"
        echo "3. Select source branch (main/master)"
        echo "4. Your site will be available at: https://username.github.io/repository-name"
        ;;
    2)
        echo "🌐 Netlify Deployment"
        echo "Option 1: Drag and drop to https://app.netlify.com/drop"
        echo "Option 2: Connect GitHub repository for auto-deployment"
        ;;
    3)
        echo "⚡ Vercel Deployment"
        if command -v vercel &> /dev/null; then
            echo "Running Vercel deployment..."
            vercel --prod
        else
            echo "Install Vercel CLI: npm i -g vercel"
            echo "Then run: vercel --prod"
        fi
        ;;
    4)
        echo "🌊 Surge.sh Deployment"
        if command -v surge &> /dev/null; then
            echo "Running Surge deployment..."
            surge . password-generator-facets.surge.sh
        else
            echo "Install Surge: npm i -g surge"
            echo "Then run: surge . your-domain.surge.sh"
        fi
        ;;
    5)
        echo "🔥 Firebase Hosting"
        echo "1. Install Firebase CLI: npm i -g firebase-tools"
        echo "2. Run: firebase login"
        echo "3. Run: firebase init hosting"
        echo "4. Run: firebase deploy"
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac

echo ""
echo "✅ Don't forget to:"
echo "- Update the README.md with your live demo URL"
echo "- Test the application on different devices"
echo "- Share the GitHub repository link"
