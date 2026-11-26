const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

document.addEventListener('DOMContentLoaded', () => {

```
const mobileMenuToggle = $('.mobile-menu-toggle');
const navLinks = $('#primary-menu');
const backdrop = $('.nav-backdrop');
const groups = $$('.nav-group');
const mqDesktop = window.matchMedia('(min-width: 993px)');

function openMenu() {
    navLinks.classList.add('active');

    if (backdrop) {
        backdrop.hidden = false;
        requestAnimationFrame(() => backdrop.classList.add('show'));
    }

    document.body.style.overflow = 'hidden';
}

function closeMenu() {

    navLinks.classList.remove('active');

    if (backdrop) {
        backdrop.classList.remove('show');

        setTimeout(() => {
            backdrop.hidden = true;
        }, 200);
    }

    document.body.style.overflow = '';

    groups.forEach(group => {
        group.classList.remove('open');

        const btn = $('.nav-dropdown-toggle', group);

        if (btn) {
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {

        e.stopPropagation();

        navLinks.classList.contains('active')
            ? closeMenu()
            : openMenu();
    });
}

if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
}

groups.forEach(group => {

    const btn = $('.nav-dropdown-toggle', group);

    if (!btn) return;

    btn.addEventListener('click', (e) => {

        if (mqDesktop.matches) return;

        e.preventDefault();
        e.stopPropagation();

        const isOpen = group.classList.toggle('open');

        btn.setAttribute(
            'aria-expanded',
            String(isOpen)
        );
    });
});

const contactForm =
    document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', function(e) {

        e.preventDefault();

        alert('¡Gracias por tu mensaje! Te responderemos lo antes posible.');

        this.reset();
    });
}
```

});

/*==========================
    MENÚ RESPONSIVE
==========================*/

const menuBtn = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".nav-links");
const backdrop = document.querySelector(".nav-backdrop");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

        backdrop.hidden = !menu.classList.contains("active");
        backdrop.classList.toggle("show");

    });

    backdrop.addEventListener("click", () => {

        menu.classList.remove("active");
        backdrop.classList.remove("show");
        backdrop.hidden = true;

    });

}

document.querySelectorAll(".nav-dropdown-toggle").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.parentElement.classList.toggle("open");

    });

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        backdrop.classList.remove("show");

        backdrop.hidden = true;

    });

});