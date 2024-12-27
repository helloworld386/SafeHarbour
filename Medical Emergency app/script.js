// Optional JavaScript for additional hover effects
document.querySelectorAll('.navbar-nav li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff4f4f';  // Change color on hover
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '';  // Revert color on hover out
    });
});