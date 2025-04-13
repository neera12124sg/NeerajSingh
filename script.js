document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Initialize: Show About section, hide others
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    const aboutSection = document.querySelector('#about');
    aboutSection.classList.add('active');
    aboutSection.style.display = 'block';

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // Add active class to clicked link
            this.classList.add('active');

            // Show the target section
            const target = this.getAttribute('href');
            const targetSection = document.querySelector(target);
            targetSection.classList.add('active');
            targetSection.style.display = 'block';

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Add glow effect to active nav item
    function pulseActiveLink() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
            activeLink.style.boxShadow = '0 0 15px rgba(178, 34, 34, 0.8)';
            setTimeout(() => {
                activeLink.style.boxShadow = '0 0 10px rgba(178, 34, 34, 0.7)';
            }, 500);
        }
    }

    // Initial pulse
    pulseActiveLink();

    // Pulse every 2 seconds
    setInterval(pulseActiveLink, 2000);

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
});
