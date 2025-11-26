/* ========================================
   SIGNAL NEWS PORTAL — JAVASCRIPT
   ======================================== */

// Live Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll animation classes
    const animateElements = document.querySelectorAll('.news-card, .sidebar-card, .timeline__item, .feature-banner');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.news-card, .sidebar-card, .timeline__item, .feature-banner').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);

    // Nav link hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            navLinks.forEach(l => {
                if (l !== link && !l.classList.contains('active')) {
                    l.style.opacity = '0.4';
                }
            });
        });
        link.addEventListener('mouseleave', () => {
            navLinks.forEach(l => {
                l.style.opacity = '1';
            });
        });
    });

    // Card tilt effect on hover
    const cards = document.querySelectorAll('.news-card, .sidebar-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(-4px, -4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0)';
        });
    });

    // Feature banner parts interaction
    const parts = document.querySelectorAll('.part');
    parts.forEach((part, index) => {
        part.addEventListener('click', () => {
            parts.forEach(p => p.classList.remove('part--active'));
            part.classList.add('part--active');

            // Visual feedback
            const banner = document.querySelector('.feature-banner');
            banner.style.transition = 'background 0.3s';
            const colors = ['#ff2d2d', '#0066ff', '#00c853', '#9c27b0', '#ffde00', '#ff6b35'];
            banner.style.background = colors[index] || colors[0];

            setTimeout(() => {
                banner.style.background = '';
            }, 300);
        });
    });

    // Timeline hover sound effect (visual)
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline__dot');
            dot.style.transform = 'scale(2)';
            dot.style.background = 'var(--color-red)';
        });
        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline__dot');
            dot.style.transform = 'scale(1)';
            if (!item.matches(':first-child')) {
                dot.style.background = 'var(--color-black)';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Random glitch effect on logo
    const logo = document.querySelector('.logo-text');
    setInterval(() => {
        if (Math.random() > 0.95) {
            logo.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            logo.style.textShadow = `${Math.random() * 4}px 0 #ff2d2d, ${-Math.random() * 4}px 0 #0066ff`;
            setTimeout(() => {
                logo.style.transform = 'translate(0, 0)';
                logo.style.textShadow = 'none';
            }, 100);
        }
    }, 100);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'j' || e.key === 'ArrowDown') {
            scrollByCard(1);
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
            scrollByCard(-1);
        }
    });

    function scrollByCard(direction) {
        const cards = document.querySelectorAll('.news-card, .sidebar-card');
        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let closestDistance = Infinity;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });

        if (closestCard) {
            const cardIndex = Array.from(cards).indexOf(closestCard);
            const nextIndex = Math.max(0, Math.min(cards.length - 1, cardIndex + direction));
            cards[nextIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    // Reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff2d2d, #ffde00);
        z-index: 9999;
        transition: width 0.1s linear;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Category filter simulation
    const categoryTags = document.querySelectorAll('.category-tag');
    categoryTags.forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = tag.textContent.trim();

            // Visual feedback
            tag.style.transform = 'scale(1.1)';
            setTimeout(() => {
                tag.style.transform = 'scale(1)';
            }, 200);

            // Highlight related cards
            const allCards = document.querySelectorAll('.news-card, .sidebar-card');
            allCards.forEach(card => {
                const cardTag = card.querySelector('.category-tag');
                if (cardTag && cardTag.textContent.trim() === category) {
                    card.style.boxShadow = '0 0 0 4px var(--color-yellow)';
                    setTimeout(() => {
                        card.style.boxShadow = '';
                    }, 2000);
                }
            });
        });
    });

    // Mobile menu toggle (if needed)
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    header.style.transition = 'transform 0.3s ease';

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.animation = 'rainbow 2s linear';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
        }
    });

    // Add rainbow animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});

// Console easter egg
console.log('%c SIGNAL ', 'background: #0a0a0a; color: #ff2d2d; font-size: 48px; font-family: "Bebas Neue", sans-serif; padding: 20px;');
console.log('%c Nachrichten ohne Filter ', 'color: #6b6b6b; font-size: 14px; font-family: monospace;');
console.log('%c Wir stellen ein! → jobs@signal.de ', 'color: #0066ff; font-size: 12px;');
