// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".nav");

    if (!navbar) {
        console.error("Navbar element not found!");
        return;
    }

    console.log("Navbar script loaded successfully!");

    window.addEventListener("scroll", () => {
        console.log("Current Scroll Position:", window.scrollY);

        if (window.scrollY > lastScrollY) {
            console.log("Scrolling down - Hiding navbar");
            navbar.classList.add("nav-hidden");
        } else {
            console.log("Scrolling up - Showing navbar");
            navbar.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    });
});
