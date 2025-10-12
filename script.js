/* ===== Show Menu ===== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ===== Remove Menu Mobile ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== Change Background Header ===== */
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* ===== Animations on Scroll ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const fadeinElements = document.querySelectorAll('.fade-in');
fadeinElements.forEach((el) => observer.observe(el));


// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');

    if (name.value === '' || email.value === '' || message.value === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
    }
});