// Cyberpunk Portfolio Website - Francisco Lopez-Martin
// JavaScript functionality for navigation, interactions, and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initMobileMenu();
    initPublicationFilters();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initMusicPlayer(); // Add music player initialization
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main > section');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
    
    // Show specific section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            
            // Add entrance animation
            targetSection.style.opacity = '0';
            targetSection.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetSection.style.transition = 'all 0.6s ease';
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 50);
        }
    }
    
    // Initialize with home section
    showSection('home');
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// Publication filtering functionality
function initPublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications
            publications.forEach(pub => {
                const categories = pub.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    pub.style.display = 'block';
                    pub.style.opacity = '0';
                    pub.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        pub.style.transition = 'all 0.4s ease';
                        pub.style.opacity = '1';
                        pub.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    pub.style.transition = 'all 0.3s ease';
                    pub.style.opacity = '0';
                    pub.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        pub.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Scroll effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background opacity based on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Cyberpunk animations and effects
function initAnimations() {
    // Animate cards on hover
    const cards = document.querySelectorAll('.project-card, .publication-item, .course-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    const observeSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const percentage = skillLevel.getAttribute('data-skill');
                skillLevel.style.width = percentage + '%';
                skillLevel.style.transition = 'width 1.5s ease-in-out';
            }
        });
    });
    
    skillBars.forEach(bar => observeSkills.observe(bar));
    
    // Neural network animation in hero section
    createNeuralNetwork();
}

// Create neural network animation
function createNeuralNetwork() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;
    
    // Clear existing content
    heroVisual.innerHTML = '';
    
    // Create nodes
    const nodeCount = 12;
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        
        // Random position
        const x = Math.random() * 80 + 10; // 10-90%
        const y = Math.random() * 80 + 10; // 10-90%
        
        node.style.left = x + '%';
        node.style.top = y + '%';
        
        // Random animation delay
        node.style.animationDelay = Math.random() * 2 + 's';
        
        heroVisual.appendChild(node);
        nodes.push({ element: node, x, y });
    }
    
    // Create connections
    nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
            if (i !== j) {
                const distance = Math.sqrt(
                    Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
                );
                
                if (distance < 30) { // Only connect nearby nodes
                    const connection = document.createElement('div');
                    connection.className = 'neural-connection';
                    
                    const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x) * 180 / Math.PI;
                    const length = distance;
                    
                    connection.style.left = nodeA.x + '%';
                    connection.style.top = nodeA.y + '%';
                    connection.style.width = length + '%';
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.transformOrigin = '0 50%';
                    
                    heroVisual.appendChild(connection);
                }
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual implementation)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Utility function for notifications
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        box-shadow: var(--shadow-glow);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = 'var(--primary-color)';
        notification.style.boxShadow = 'var(--shadow-glow)';
    } else if (type === 'error') {
        notification.style.borderColor = 'var(--secondary-color)';
        notification.style.boxShadow = 'var(--shadow-pink)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Arrow keys for section navigation
    if (e.altKey) {
        const sections = ['home', 'projects', 'cv', 'publications', 'courses'];
        const currentActive = document.querySelector('.nav-link.active');
        const currentSection = currentActive ? currentActive.getAttribute('data-section') : 'home';
        const currentIndex = sections.indexOf(currentSection);
        
        if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            document.querySelector(`[data-section="${nextSection}"]`).click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            const prevSection = sections[currentIndex - 1];
            document.querySelector(`[data-section="${prevSection}"]`).click();
        }
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Theme toggle functionality (optional)
function initThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initThemeToggle();
});

// Music player functionality
function initMusicPlayer() {
    const audio = document.getElementById('cyberpunkAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    const volumeSlider = document.getElementById('volumeSlider');
    const playerToggle = document.getElementById('playerToggle');
    const musicPlayer = document.getElementById('musicPlayer');
    const equalizer = document.getElementById('equalizer');
    
    if (!audio || !playPauseBtn || !volumeSlider || !playerToggle) return;
    
    let isPlaying = false;
    let isMuted = false;
    let previousVolume = 0.5;
    
    // Initialize audio settings
    audio.volume = 0.5;
    audio.loop = true;
    
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        const volume = this.value / 100;
        audio.volume = volume;
        previousVolume = volume;
        
        updateVolumeIcon(volume);
        
        if (volume > 0 && isMuted) {
            isMuted = false;
        }
    });
    
    // Mute/Unmute functionality
    volumeBtn.addEventListener('click', function() {
        if (isMuted) {
            audio.volume = previousVolume;
            volumeSlider.value = previousVolume * 100;
            isMuted = false;
        } else {
            previousVolume = audio.volume;
            audio.volume = 0;
            volumeSlider.value = 0;
            isMuted = true;
        }
        updateVolumeIcon(audio.volume);
    });
    
    // Player toggle functionality
    playerToggle.addEventListener('click', function() {
        musicPlayer.classList.toggle('expanded');
    });
    
    // Audio event listeners
    audio.addEventListener('loadstart', function() {
        console.log('Audio loading started');
    });
    
    audio.addEventListener('canplay', function() {
        console.log('Audio can start playing');
    });
    
    audio.addEventListener('error', function(e) {
        console.error('Audio error:', e);
        showNotification('Error loading audio file', 'error');
    });
    
    audio.addEventListener('ended', function() {
        // Since loop is enabled, this shouldn't fire, but just in case
        if (!audio.loop) {
            pauseMusic();
        }
    });
    
    // Functions
    function playMusic() {
        audio.play().then(() => {
            isPlaying = true;
            playPauseIcon.className = 'fas fa-pause';
            playPauseBtn.title = 'Pause';
            startEqualizer();
        }).catch(error => {
            console.error('Error playing audio:', error);
            showNotification('Error playing audio. Please check your browser settings.', 'error');
        });
    }
    
    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        playPauseIcon.className = 'fas fa-play';
        playPauseBtn.title = 'Play';
        stopEqualizer();
    }
    
    function updateVolumeIcon(volume) {
        if (volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }
    
    function startEqualizer() {
        if (!equalizer) return;
        
        // Remove paused class to enable animations
        equalizer.classList.remove('paused');
    }
    
    function stopEqualizer() {
        if (!equalizer) return;
        
        // Add paused class to disable animations
        equalizer.classList.add('paused');
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Space bar to play/pause (only when not typing in inputs)
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        }
        
        // M key to mute/unmute
        if (e.code === 'KeyM' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            volumeBtn.click();
        }
    });
    
    // Save volume preference
    volumeSlider.addEventListener('change', function() {
        localStorage.setItem('musicVolume', this.value);
    });
    
    // Load saved volume preference
    const savedVolume = localStorage.getItem('musicVolume');
    if (savedVolume !== null) {
        volumeSlider.value = savedVolume;
        audio.volume = savedVolume / 100;
        previousVolume = audio.volume;
        updateVolumeIcon(audio.volume);
    }
    
    // Auto-play prevention handling
    document.addEventListener('click', function autoPlay() {
        // Remove this listener after first user interaction
        document.removeEventListener('click', autoPlay);
        
        // Enable audio context if needed (for better browser compatibility)
        if (audio.readyState >= 2) {
            console.log('Audio ready for playback');
        }
    }, { once: true });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initMobileMenu,
        initPublicationFilters,
        initMusicPlayer,
        showNotification,
        debounce
    };
}