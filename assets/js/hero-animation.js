document.addEventListener('DOMContentLoaded', (e) => {
    gsap.from('.hero-section-content', {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 1,
        opacity: 0,
        x: -50
    });

    gsap.from('.hero-section-image', {
        delay: 0.1,
        duration: 1,
        opacity: 0,
        y: 50
    });
});