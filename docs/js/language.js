// Language Management

let currentLanguage = 'it';

/**
 * Initialize language
 */
function initLanguage() {
    // Check for saved language preference or default to 'it'
    const savedLang = localStorage.getItem('portfolioLanguage') || 'it';
    setLanguage(savedLang, false);
    
    // Add event listener to language button
    on('langBtn', 'click', toggleLanguage);
    
    // Add event listener to blog button
    on('blogBtn', 'click', goToBlog);
}

/**
 * Navigate to blog based on current language
 */
function goToBlog() {
    const blogPath = currentLanguage === 'it' 
        ? 'blog/V. 1.0/Italiano/index.html' 
        : 'blog/V. 1.0/English/index.html';
    window.location.href = blogPath;
}

/**
 * Toggle between Italian and English
 */
function toggleLanguage() {
    const newLang = currentLanguage === 'it' ? 'en' : 'it';
    setLanguage(newLang, true);
}

/**
 * Set language
 * @param {string} lang - Language code ('it' or 'en')
 * @param {boolean} save - Whether to save preference
 */
function setLanguage(lang, save = true) {
    currentLanguage = lang;
    
    // Update button text
    const langBtn = getEl('langBtn');
    setText(langBtn, lang === 'it' ? 'EN' : 'IT');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update content
    updateContent();
    
    // Save preference
    if (save) {
        localStorage.setItem('portfolioLanguage', lang);
    }
}

/**
 * Update all content with current language
 */
function updateContent() {
    const content = portfolioData[currentLanguage];
    
    // Update hero section
    setText('titleText', content.title);
    
    // Update caption with HTML support for highlights
    const captionEl = getEl('captionText');
    captionEl.innerHTML = content.caption;
    
    // Update tab labels
    setText('tab-career', content.tabs.career);
    setText('tab-projects', content.tabs.projects);
    setText('tab-education', content.tabs.education);
    setText('tab-about', content.tabs.about);
    setText('tab-live', content.tabs.live);
    
    // Update sections content
    renderSection('career', content.career);
    renderSection('projects', content.projects);
    renderSection('education', content.education);
    renderAbout(content.about);
    renderLive(content.live);
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
    return currentLanguage;
}
