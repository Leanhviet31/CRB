document.addEventListener('DOMContentLoaded', () => {
    // Back to top functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
    }

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMenu);
    }

    // Play video placeholder
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Video player modal would open here.');
        });
    }
});
