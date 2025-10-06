class PasswordGenerator {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateLengthDisplay();
    }

    bindEvents() {
        const lengthSlider = document.getElementById('passwordLength');
        const generateBtn = document.getElementById('generateBtn');
        const copyBtn = document.getElementById('copyBtn');

        // Update length display when slider changes
        lengthSlider.addEventListener('input', () => this.updateLengthDisplay());
        
        // Generate password on button click
        generateBtn.addEventListener('click', () => this.generatePassword());
        
        // Copy password to clipboard
        copyBtn.addEventListener('click', () => this.copyToClipboard());

        // Generate password on Enter key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.generatePassword();
            }
        });

        // Hide error message when options change
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.hideErrorMessage());
        });
    }

    updateLengthDisplay() {
        const lengthSlider = document.getElementById('passwordLength');
        const lengthValue = document.getElementById('lengthValue');
        lengthValue.textContent = lengthSlider.value;
    }

    generatePassword() {
        const length = parseInt(document.getElementById('passwordLength').value);
        const includeAlphabets = document.getElementById('includeAlphabets').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;

        // Validate that at least one option is selected
        if (!includeAlphabets && !includeNumbers && !includeSymbols) {
            this.showErrorMessage();
            return;
        }

        this.hideErrorMessage();
        this.showLoading();

        // Simulate loading for better UX
        setTimeout(() => {
            const password = this.createPassword(length, {
                alphabets: includeAlphabets,
                numbers: includeNumbers,
                symbols: includeSymbols
            });

            this.displayPassword(password);
            this.hideLoading();
        }, 500);
    }

    createPassword(length, options) {
        let charset = '';
        
        // Character sets
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // Build character set based on selected options
        if (options.alphabets) charset += alphabets;
        if (options.numbers) charset += numbers;
        if (options.symbols) charset += symbols;

        let password = '';
        
        // Ensure at least one character from each selected type
        if (options.alphabets) {
            password += this.getRandomChar(alphabets);
        }
        if (options.numbers) {
            password += this.getRandomChar(numbers);
        }
        if (options.symbols) {
            password += this.getRandomChar(symbols);
        }

        // Fill remaining length with random characters from full charset
        for (let i = password.length; i < length; i++) {
            password += this.getRandomChar(charset);
        }

        // Shuffle the password to avoid predictable patterns
        return this.shuffleString(password);
    }

    getRandomChar(charset) {
        return charset.charAt(Math.floor(Math.random() * charset.length));
    }

    shuffleString(str) {
        return str.split('').sort(() => Math.random() - 0.5).join('');
    }

    displayPassword(password) {
        const resultContainer = document.getElementById('resultContainer');
        const passwordInput = document.getElementById('generatedPassword');
        const strengthElement = document.getElementById('passwordStrength');

        passwordInput.value = password;
        resultContainer.style.display = 'block';

        // Calculate and display password strength
        const strength = this.calculatePasswordStrength(password);
        this.displayPasswordStrength(strengthElement, strength);

        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    calculatePasswordStrength(password) {
        let score = 0;
        
        // Length scoring
        if (password.length >= 8) score += 1;
        if (password.length >= 13) score += 1;
        
        // Character type scoring
        if (/[a-z]/.test(password)) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score += 1;

        // Determine strength level
        if (score <= 2) return 'weak';
        if (score <= 4) return 'medium';
        return 'strong';
    }

    displayPasswordStrength(element, strength) {
        // Remove existing strength classes
        element.className = 'password-strength';
        
        // Add appropriate strength class and text
        switch (strength) {
            case 'weak':
                element.classList.add('strength-weak');
                element.textContent = '🔴 Weak Password - Consider adding more character types or increasing length';
                break;
            case 'medium':
                element.classList.add('strength-medium');
                element.textContent = '🟡 Medium Password - Good, but could be stronger with more variety';
                break;
            case 'strong':
                element.classList.add('strength-strong');
                element.textContent = '🟢 Strong Password - Excellent security level!';
                break;
        }
    }

    async copyToClipboard() {
        const passwordInput = document.getElementById('generatedPassword');
        const copyBtn = document.getElementById('copyBtn');
        
        try {
            await navigator.clipboard.writeText(passwordInput.value);
            
            // Visual feedback
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.background = '#28a745';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.background = '#28a745';
            }, 2000);
            
        } catch (err) {
            // Fallback for older browsers
            passwordInput.select();
            document.execCommand('copy');
            
            // Show feedback
            alert('Password copied to clipboard!');
        }
    }

    showErrorMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    hideErrorMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'none';
    }

    showLoading() {
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.classList.add('loading');
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fas fa-spinner"></i> Generating...';
    }

    hideLoading() {
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.classList.remove('loading');
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-refresh"></i> Generate Password';
    }
}

// Additional utility functions for enhanced functionality
class PasswordAnalyzer {
    static getPasswordComplexity(password) {
        const analysis = {
            length: password.length,
            hasLowercase: /[a-z]/.test(password),
            hasUppercase: /[A-Z]/.test(password),
            hasNumbers: /[0-9]/.test(password),
            hasSymbols: /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password),
            entropy: this.calculateEntropy(password)
        };

        return analysis;
    }

    static calculateEntropy(password) {
        const charset = new Set(password).size;
        return Math.log2(Math.pow(charset, password.length));
    }

    static estimateCrackTime(password) {
        const analysis = this.getPasswordComplexity(password);
        const combinations = Math.pow(this.getCharsetSize(analysis), password.length);
        
        // Assuming 1 billion attempts per second
        const secondsToCrack = combinations / (2 * 1000000000);
        
        return this.formatTime(secondsToCrack);
    }

    static getCharsetSize(analysis) {
        let size = 0;
        if (analysis.hasLowercase) size += 26;
        if (analysis.hasUppercase) size += 26;
        if (analysis.hasNumbers) size += 10;
        if (analysis.hasSymbols) size += 32;
        return size;
    }

    static formatTime(seconds) {
        if (seconds < 60) return `${Math.round(seconds)} seconds`;
        if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
        if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
        if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
        return `${Math.round(seconds / 31536000)} years`;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
    
    // Add some easter eggs for better user experience
    console.log('🔐 Password Generator initialized!');
    console.log('💡 Tip: Use keyboard shortcuts - Press Enter to generate a new password!');
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
