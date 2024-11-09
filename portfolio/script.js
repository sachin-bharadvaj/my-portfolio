// Navbar Scroll Effect
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
};

var typed = new Typed("#typed-portfolio", { 
    strings: ["Vuduthala Sachin Bharadvaj"], 
    typeSpeed: 50, 
});