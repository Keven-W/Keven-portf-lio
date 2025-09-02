// animação de digitps
const typingTexts = [
    "Desenvolvedor Front-End",
    "Desenvolvedor Back-End", 
    "Desenvolvedor Fullstack",
    "Estudante de Ciência da Computação"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 140;
let deletingSpeed = 50;
let pauseTime = 2000;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[currentTextIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
            return;
        }
        
        setTimeout(typeText, deletingSpeed);
    } else {
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, pauseTime);
            return;
        }
        
        setTimeout(typeText, typingSpeed);
    }
}

// Navegação
function toggleNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // fechar menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll para Navegação em  Links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to Top Button
function scrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navbar Background on Scroll
function navbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 32, 44, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 32, 44, 0.95)';
        }
    });
}

// Interseção  Observer for Animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animação das skill bar
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

// Animate Skill Bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 300);
    });
}

// Social Links Hover Effect
function socialLinksEffect() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Gear Animation Control
function gearAnimation() {
    const gears = document.querySelectorAll('.gear');
    
    // Pause animation on hover
    gears.forEach(gear => {
        gear.addEventListener('mouseenter', () => {
            gear.style.animationPlayState = 'paused';
        });
        
        gear.addEventListener('mouseleave', () => {
            gear.style.animationPlayState = 'running';
        });
    });
}

// Project Cards Interaction
function projectCardsInteraction() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Form Validation (if contact form is added)
function validateForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Mensagem enviada com sucesso! Retornarei em breve.');
        form.reset();
    });
}

// Email Validation Helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Parallax Effect for Hero Section
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            floatingElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
}

// Loading Animation
function loadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Start typing animation after page load
        setTimeout(() => {
            typeText();
        }, 500);
    });
}

// Responsive Menu Close on Resize
function responsiveMenuClose() {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.querySelector('.nav-menu').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    });
}

// Skills Section Counter Animation
function skillsCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, finalValue);
            }
        });
    }, { threshold: 0.7 });
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Counter Animation Helper
function animateCounter(element, finalValue) {
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const currentValue = Math.floor(progress * finalValue);
        element.textContent = currentValue + (element.textContent.includes('+') ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = finalValue + (element.textContent.includes('+') ? '+' : '');
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Theme Color Customization (for future use)
function themeCustomization() {
    const root = document.documentElement;
    
    //funcionalidades futuras caso queira incrementar 
    // por exemplo, mudanças de cores conforme a preferência
    
    // Exemplo: modo Dark/Light  toggle 
    /*
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
        });
    }
    */
}

// Initialize all functions
function init() {
    // Core functionality
    toggleNavigation();
    smoothScroll();
    scrollToTop();
    navbarScroll();
    observeElements();
    
    // Animations and interactions
    gearAnimation();
    socialLinksEffect();
    projectCardsInteraction();
    parallaxEffect();
    loadingAnimation();
    skillsCounterAnimation();
    
    // Responsive features
    responsiveMenuClose();
    
    // Form handling
    validateForm();
    
    // Theme customization
    themeCustomization();
}

// Start everything when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Additional utility functions for customization

// Function to update personal information
function updatePersonalInfo(info) {
    const elements = {
        name: document.querySelector('.hero-title .highlight'),
        email: document.querySelector('.contact-method:first-child span'),
        phone: document.querySelector('.contact-method:nth-child(2) span'),
        location: document.querySelector('.contact-method:last-child span')
    };
    
    Object.keys(info).forEach(key => {
        if (elements[key] && info[key]) {
            elements[key].textContent = info[key];
        }
    });
}

// Function to update skills data
function updateSkills(skillsData) {
    skillsData.forEach(skill => {
        const skillCard = document.querySelector(`[data-skill="${skill.id}"]`);
        if (skillCard) {
            const progressBar = skillCard.querySelector('.skill-progress');
            const percentage = skillCard.querySelector('.skill-percentage');
            
            progressBar.setAttribute('data-percentage', skill.percentage);
            percentage.textContent = skill.percentage + '%';
        }
    });
}

// Function to update social links
function updateSocialLinks(socialData) {
    socialData.forEach(social => {
        const socialLink = document.querySelector(`[data-platform="${social.platform}"]`);
        if (socialLink) {
            socialLink.href = social.url;
        }
    });
}

// Export functions for external use (if needed)
window.portfolioUtils = {
    updatePersonalInfo,
    updateSkills,
    updateSocialLinks
};

// Performance optimization
function optimizePerformance() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Scroll-based updates here
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll);
}

// Call performance optimization
optimizePerformance();