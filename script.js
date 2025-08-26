// Application state
let currentSection = 'home';
let currentAppId = null;
let lastScrollY = window.scrollY;

// DOM Elements
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const heroCTA = document.getElementById('hero-cta');
const featuredAppsGrid = document.getElementById('featured-apps-grid');
const allAppsGrid = document.getElementById('all-apps-grid');
const developersGrid = document.getElementById('developers-grid');
const appDetailContent = document.getElementById('app-detail-content');
const backToAppsButton = document.getElementById('back-to-apps');
const developerModal = document.getElementById('developer-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderFeaturedApps();
    renderAllApps();
    renderDevelopers();
});

// Initialize application
function initializeApp() {
    // Initialize theme
    initializeTheme();
    
    // Set initial section based on URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'apps', 'developers'].includes(hash)) {
        navigateToSection(hash);
    } else {
        navigateToSection('home');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Hero CTA button
    heroCTA.addEventListener('click', () => {
        const featuredSection = document.getElementById('featured-apps-section');
        featuredSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Back to apps button
    backToAppsButton.addEventListener('click', () => {
        navigateToSection('apps');
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    developerModal.addEventListener('click', (e) => {
        if (e.target === developerModal) closeModal();
    });

    // Scroll effects
    window.addEventListener('scroll', handleScroll);

    // Mobile navigation toggle
    navToggle.addEventListener('click', toggleMobileNav);

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
        const hash = window.location.hash.replace('#', '') || 'home';
        navigateToSection(hash, false);
    });

    // Secondary buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-section]') || e.target.closest('[data-section]')) {
            const button = e.target.matches('[data-section]') ? e.target : e.target.closest('[data-section]');
            const section = button.getAttribute('data-section');
            navigateToSection(section);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.target.getAttribute('data-section');
    navigateToSection(targetSection);
}

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = savedTheme;
    if (!theme) {
        theme = systemPrefersDark ? 'dark' : 'light';
    }
    
    setTheme(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Navigate to section
function navigateToSection(sectionName, updateHistory = true) {
    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Update URL and history
    if (updateHistory) {
        window.history.pushState(null, '', `${sectionName}`);
    }

    // Update current section
    currentSection = sectionName;

    // Close mobile nav if open
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle scroll effects
function handleScroll() {
    const currentScrollY = window.scrollY;

    // Hide/show header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
}

// Toggle mobile navigation
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Render featured apps
function renderFeaturedApps() {
    const featuredApps = window.appsData.filter(app => app.featured);
    featuredAppsGrid.innerHTML = featuredApps.map(app => createAppCard(app)).join('');
    
    // Add click handlers
    featuredAppsGrid.addEventListener('click', handleAppCardClick);
}

// Render all apps
function renderAllApps() {
    allAppsGrid.innerHTML = window.appsData.map(app => createAppCard(app)).join('');
    
    // Add click handlers
    allAppsGrid.addEventListener('click', handleAppCardClick);
}

// Create app card HTML
function createAppCard(app) {
    return `
        <div class="app-card" data-app-id="${app.id}">
            <div class="app-card-image">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-card-content">
                <h3 class="app-card-title">${app.title}</h3>
                <p class="app-card-description">${app.description}</p>
                <div class="app-card-tags">
                    ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Handle app card clicks
function handleAppCardClick(e) {
    const appCard = e.target.closest('.app-card');
    if (appCard) {
        const appId = appCard.getAttribute('data-app-id');
        showAppDetail(appId);
    }
}

// Show app detail
function showAppDetail(appId) {
    const app = window.appsData.find(a => a.id === appId);
    if (!app) return;

    currentAppId = appId;
    
    appDetailContent.innerHTML = `
        <div class="app-detail">
            <div class="app-detail-header">
                <div class="app-detail-image">
                    <i class="${app.icon}"></i>
                </div>
                <div class="app-detail-info">
                    <h1>${app.title}</h1>
                    <p>${app.longDescription}</p>
                    <div class="app-detail-downloads">
                        <h3>Downloads</h3>
                        ${Object.entries(app.downloadLinks).map(([category, links]) => `
                            <div class="download-section">
                                <h4>${category}</h4>
                                <div class="download-buttons">
                                    ${links.map(link => `
                                        <a href="${link.url}" class="download-button">
                                            <i class="${link.icon}"></i>
                                            <span>${link.platform}</span>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="app-detail-meta">
                <div class="app-detail-meta-item">
                    <h3>Category</h3>
                    <p>${app.category}</p>
                </div>
                <div class="app-detail-meta-item">
                    <h3>Platform</h3>
                    <p>${app.platform}</p>
                </div>
                <div class="app-detail-meta-item">
                    <h3>Release Year</h3>
                    <p>${app.releaseDate}</p>
                </div>
                <div class="app-detail-meta-item">
                    <h3>Downloads</h3>
                    <p>${app.downloads}</p>
                </div>
                <div class="app-detail-meta-item">
                    <h3>Rating</h3>
                    <p>${app.rating}</p>
                </div>
            </div>
        </div>
    `;

    // Show app detail section
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('app-detail-section').classList.add('active');
    
    // Update URL
    window.history.pushState(null, '', `#app/${appId}`);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render developers
function renderDevelopers() {
    developersGrid.innerHTML = window.developersData.map(dev => createDeveloperCard(dev)).join('');
    
    // Add click handlers
    developersGrid.addEventListener('click', handleDeveloperCardClick);
}

// Create developer card HTML
function createDeveloperCard(developer) {
    return `
        <div class="developer-card" data-developer-id="${developer.id}">
            <div class="developer-avatar">${developer.avatar}</div>
            <h3 class="developer-name">${developer.name}</h3>
            <p class="developer-role">${developer.role}</p>
            <p class="developer-bio">${developer.bio}</p>
            <div class="developer-links">
                <a href="${developer.github}" class="developer-link" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${developer.linkedin}" class="developer-link" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="mailto:${developer.email}" class="developer-link">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    `;
}

// Handle developer card clicks
function handleDeveloperCardClick(e) {
    // Don't open modal if clicking on external link
    if (e.target.closest('a[href^="http"]')) {
        return;
    }
    
    const developerCard = e.target.closest('.developer-card');
    if (developerCard) {
        const developerId = developerCard.getAttribute('data-developer-id');
        showDeveloperModal(developerId);
    }
}

// Show developer modal
function showDeveloperModal(developerId) {
    const developer = window.developersData.find(d => d.id === developerId);
    if (!developer) return;

    modalBody.innerHTML = `
        <div class="modal-developer-content">
            <div class="modal-developer-avatar">${developer.avatar}</div>
            <h2 class="modal-developer-name">${developer.name}</h2>
            <p class="modal-developer-role">${developer.role}</p>
            <div class="modal-developer-bio">
                <p>${developer.longBio}</p>
            </div>
            <div class="modal-developer-contact">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> ${developer.email}</p>
                <p><strong>Phone:</strong> ${developer.phone}</p>
                <p><strong>Expertise:</strong> ${developer.expertise.join(', ')}</p>
            </div>
            <div class="modal-developer-links">
                <a href="${developer.github}" class="modal-developer-link" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i>
                    <span>GitHub Profile</span>
                </a>
                <a href="${developer.linkedin}" class="modal-developer-link" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn Profile</span>
                </a>
                <a href="mailto:${developer.email}" class="modal-developer-link">
                    <i class="fas fa-envelope"></i>
                    <span>Send Email</span>
                </a>
            </div>
        </div>
    `;

    developerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    developerModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states and error handling
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
}

function showError(element, message) {
    element.innerHTML = `<div class="error">Error: ${message}</div>`;
}

// Add intersection observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.app-card, .developer-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});