// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Counter Animation

const counters = document.querySelectorAll("[data-count]");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.count);
    let count = 0;

    const increment = target / 50;

    const updateCounter = () => {

        count += increment;

        if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});

// Header Shadow on Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "none";
    }
});