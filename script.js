// Music Master Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initHeaderEffects();
    initInteractiveElements();
    initMobileMenu();
    initSlideshow();
    
    console.log('Music Master website loaded successfully!');
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effects
function initHeaderEffects() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', utils.debounce(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    }, 10));
}

// Interactive elements
function initInteractiveElements() {
    // Enhanced button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track button clicks for analytics
            const buttonText = this.textContent.trim();
            console.log('Button clicked:', buttonText);
            
            // Add ripple effect
            createRippleEffect(this, e);
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .technique-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature list item hover effects
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const bullet = this.querySelector('.feature-bullet');
            if (bullet) {
                bullet.style.transform = 'scale(1.2)';
                bullet.style.transition = 'transform 0.2s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const bullet = this.querySelector('.feature-bullet');
            if (bullet) {
                bullet.style.transform = 'scale(1)';
            }
        });
    });
}

// Create ripple effect for buttons
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Mobile menu functionality
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    function createMobileMenuToggle() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.innerHTML = '&#9776;';
            toggleButton.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #2d3748;
                padding: 0.5rem;
                border-radius: 4px;
                transition: background-color 0.2s ease;
            `;
            
            toggleButton.addEventListener('mouseover', () => {
                toggleButton.style.backgroundColor = '#f7fafc';
            });
            
            toggleButton.addEventListener('mouseout', () => {
                toggleButton.style.backgroundColor = 'transparent';
            });
            
            nav.appendChild(toggleButton);
            
            toggleButton.addEventListener('click', () => {
                const isVisible = navLinks.style.display === 'flex';
                navLinks.style.display = isVisible ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                navLinks.style.borderRadius = '0 0 8px 8px';
                navLinks.style.zIndex = '1001';
                toggleButton.innerHTML = isVisible ? '&#9776;' : '&#10005;';
            });
        } else if (window.innerWidth > 768) {
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.remove();
                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.right = '';
                navLinks.style.backgroundColor = '';
                navLinks.style.padding = '';
                navLinks.style.boxShadow = '';
                navLinks.style.borderRadius = '';
                navLinks.style.zIndex = '';
            }
        }
    }

    window.addEventListener('resize', createMobileMenuToggle);
    createMobileMenuToggle();
}

// Slideshow functionality
let currentSlideIndex = 0;
let slideInterval;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Start automatic slideshow
    startSlideshow();
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Wrap around if necessary
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Show current slide
    slides[currentSlideIndex].classList.add('active');
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);        
    stopSlideshow();    
}

function currentSlide(index) {
    currentSlideIndex = index - 1; // Convert to 0-based index
    showSlide(currentSlideIndex);
    
    // Restart the automatic slideshow
    stopSlideshow();
    startSlideshow();
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 4000); // Change slide every 4 seconds
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Animate counter numbers (for future use)
    animateCounter: (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    },

    // Generate random ID
    generateId: () => {
        return Math.random().toString(36).substr(2, 9);
    }
};

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .mobile-menu-toggle:focus {
        outline: 2px solid #fd7e14;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
}

// Initialize preloading
preloadCriticalResources();

// Export utils for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}

// Make functions globally available for onclick handlers
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;