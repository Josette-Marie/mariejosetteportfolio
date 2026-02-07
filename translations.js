// Translations for the website
const translations = {
    en: {
        'page-title': 'Mbungai Marie Josette Leinyuy - Leinyuy The Poet',
        'gallery-title': 'Gallery - Leinyuy The Poet',
        'nav-home': 'Home',
        'nav-bio': 'Bio',
        'nav-tutoring': 'Tutoring',
        'nav-awards': 'Awards',
        'nav-poetry': 'Poetry',
        'nav-volunteering': 'Volunteering',
        'nav-tech': 'Tech Solutions',
        'nav-contact': 'Contact',
        'nav-gallery': 'Gallery'
    },
    fr: {
        'page-title': 'Mbungai Marie Josette Leinyuy - Leinyuy La Poète',
        'gallery-title': 'Galerie - Leinyuy La Poète',
        'nav-home': 'Accueil',
        'nav-bio': 'Biographie',
        'nav-tutoring': 'Tutorat',
        'nav-awards': 'Récompenses',
        'nav-poetry': 'Poésie',
        'nav-volunteering': 'Bénévolat',
        'nav-tech': 'Solutions Tech',
        'nav-contact': 'Contact',
        'nav-gallery': 'Galerie'
    }
};

// Function to change language
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = savedLang;
        changeLanguage(savedLang);
    }
}
