// Scroll Animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.timeline-item').forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.style.opacity = 1;
        }
    });
});
