document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.features-section').offsetHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > heroHeight) {
            navbar.classList.add('navbar-dark-bg');
        } else {
            navbar.classList.remove('navbar-dark-bg');
        }
    });
});