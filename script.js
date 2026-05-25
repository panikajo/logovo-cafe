// ============================
// LOGOVO Cafe-Bar — Scripts
// ============================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initMenuTabs();
    initBookingForm();
    initScrollAnimations();
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('open');
            toggle.classList.remove('active');
        }
    });
}

// Menu category tabs
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    const categories = document.querySelectorAll('.menu-category');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            categories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Booking form
function initBookingForm() {
    const form = document.getElementById('bookingForm');

    // Set min date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show success message
        const wrapper = form.closest('.contact-form-wrapper');
        wrapper.innerHTML = `
            <div class="form-success">
                <h4>Спасибо, ${data.name}!</h4>
                <p>Мы получили вашу заявку на бронирование.<br>
                Мы свяжемся с вами по телефону для подтверждения.</p>
            </div>
        `;
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.section-header, .feature, .menu-item, .gallery-item, .contact-card, .contact-form-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}
