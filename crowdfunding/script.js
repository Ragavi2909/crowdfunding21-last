/* --------------------------------------------------
   GLOBAL NOTIFICATION HANDLER
-------------------------------------------------- */
window.showNotification = function(message, type = "info") {
    const note = document.createElement("div");
    note.className = `notification ${type}`;
    note.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' :
                         type === 'error' ? 'exclamation-circle' :
                         type === 'warning' ? 'exclamation-triangle' :
                         'info-circle'}"></i>
        <span>${message}</span>
    `;

    Object.assign(note.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "14px 20px",
        background: "rgba(20,20,20,0.95)",
        color: "#fff",
        zIndex: 9999,
        borderRadius: "8px",
        fontWeight: "500",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        transform: "translateX(150%)",
        transition: "0.3s"
    });

    document.body.appendChild(note);
    setTimeout(() => (note.style.transform = "translateX(0)"), 50);
    setTimeout(() => (note.style.transform = "translateX(150%)"), 3000);
    setTimeout(() => note.remove(), 3600);
};

/* --------------------------------------------------
   NAVIGATION LOGIN STATE
-------------------------------------------------- */
function updateNavigation() {
    const navMenu = document.querySelector(".nav-menu");
    if (!navMenu) return;

    const userData = localStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);

        const login = navMenu.querySelector('a[href="login.html"]');
        const signup = navMenu.querySelector('a[href="register.html"]');

        if (login) login.parentElement.remove();
        if (signup) signup.parentElement.remove();

        const profile = document.querySelector(".profile-dropdown");
        if (profile) profile.style.display = "block";

        const logout = document.querySelector('a[href="#logout"]');
        if (logout) {
            logout.onclick = () => {
                localStorage.removeItem("user");
                window.location.href = "index.html";
            };
        }
    }
}

/* --------------------------------------------------
   ABOUT SECTION ANIMATIONS
-------------------------------------------------- */
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add("animate");
    });
}, { threshold: 0.2 });

function initAboutAnimations() {
    const items = document.querySelectorAll(".about-text, .about-image");
    items.forEach(item => aboutObserver.observe(item));
}

/* --------------------------------------------------
   GENERAL SCROLL ANIMATIONS
-------------------------------------------------- */
function initScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add("animate");
        });
    });

    document.querySelectorAll(".step, .campaign-card, .section-title")
        .forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "0.6s";
            scrollObserver.observe(el);
        });
}

/* --------------------------------------------------
   PROGRESS BAR ANIMATION
-------------------------------------------------- */
function animateProgressBars() {
    document.querySelectorAll(".progress-fill").forEach(bar => {
        const targetWidth = bar.dataset.width || bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => bar.style.width = targetWidth, 200);
    });
}

function initProgressObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.isIntersecting && animateProgressBars());
    }, { threshold: 0.5 });

    document.querySelectorAll(".campaign-progress").forEach(el => observer.observe(el));
}

/* --------------------------------------------------
   NEWSLETTER HANDLER
-------------------------------------------------- */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initNewsletter() {
    const form = document.querySelector(".newsletter");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("input[type='email']");
        if (input && isValidEmail(input.value))
            showNotification("Subscribed successfully!", "success");
        else
            showNotification("Enter a valid email.", "error");
        form.reset();
    });
}

/* --------------------------------------------------
   COUNTER ANIMATIONS (AUTO — RUN ONLY IF PRESENT)
-------------------------------------------------- */
function animateCounter(element, target, suffix = "") {
    let current = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 20);
}

function initCounters() {
    const counters = document.querySelectorAll(".stat-number[data-count]");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute("data-count"));
                const suffix = el.textContent.includes("%") ? "%" : "";
                animateCounter(el, target, suffix);
                observer.unobserve(el);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

/* --------------------------------------------------
   IMAGE FADE-IN
-------------------------------------------------- */
function initImageFade() {
    document.querySelectorAll("img").forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 0.4s ease";
        img.onload = () => (img.style.opacity = "1");
    });
}

/* --------------------------------------------------
   PARALLAX HERO
-------------------------------------------------- */
function initParallax() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    window.addEventListener("scroll", () => {
        hero.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    });
}

/* --------------------------------------------------
   CAMPAIGN CARD HOVER
-------------------------------------------------- */
function initCampaignHover() {
    document.querySelectorAll(".campaign-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px) scale(1.02)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });
}

/* --------------------------------------------------
   DOM READY — RUN EVERYTHING
-------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

    // Mobile menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.onclick = () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        };
    }

    updateNavigation();
    initAboutAnimations();
    initScrollAnimations();
    initProgressObserver();
    initNewsletter();
    initCounters();
    initImageFade();
    initParallax();
    initCampaignHover();
});
