// Dark mode toggle functionality
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
} else {
    // Default to light mode (or keep as is)
    if (savedTheme === 'light') {
        root.removeAttribute('data-theme');
        toggle.textContent = '🌙';
    }
}

// Toggle theme on button click
toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    
    if (current === 'dark') {
        // Switch to light mode
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggle.textContent = '🌙';
    } else {
        // Switch to dark mode
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☀️';
    }
});