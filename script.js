// Language Management
let currentLang = 'en';
const languages = ['en', 'fa', 'ar'];
const langNames = { 
    en: 'English', 
    fa: 'دری', 
    ar: 'العربية' 
};

function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    menu.classList.toggle('active');
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });

    // Update button text
    document.getElementById('langBtn').textContent = `🌐 ${langNames[lang]} ▼`;

    // Update HTML lang and dir
    document.documentElement.lang = lang === 'en' ? 'en' : (lang === 'fa' ? 'fa-AF' : 'ar-AF');
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';

    // Close menu
    document.getElementById('langMenu').classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.lang-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('langMenu').classList.remove('active');
    }
});

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('themeBtn');
    if (document.body.classList.contains('light-mode')) {
        btn.textContent = '☀️ Light';
    } else {
        btn.textContent = '🌙 Dark';
    }
}

// Smooth scrolling with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed nav
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation to sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
