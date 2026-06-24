// ==========================================
// ARJUN PATIDAR
// ENTERPRISE WEBSITE SCRIPT
// ==========================================

// Counter Animation

const counters = document.querySelectorAll(".counter");

const startCounters = () => {


counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 80;

    const updateCounter = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }
    };

    updateCounter();

});


};

// ==========================================
// Intersection Observer
// ==========================================

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {


entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add("active");

    }

});


}, observerOptions);

// ==========================================
// Add Reveal Class Automatically
// ==========================================

const revealElements = document.querySelectorAll(


".glass-card," +
".expertise-card," +
".project-card," +
".cert-card," +
".timeline-item," +
".metric-card"


);

revealElements.forEach(element => {


element.classList.add("reveal");

observer.observe(element);


});

// ==========================================
// Metrics Counter Trigger
// ==========================================

const metricsSection = document.querySelector(".metrics");

let counterStarted = false;

const metricsObserver = new IntersectionObserver((entries) => {


entries.forEach(entry => {

    if (entry.isIntersecting && !counterStarted) {

        startCounters();

        counterStarted = true;

    }

});


}, { threshold: 0.4 });

if (metricsSection) {


metricsObserver.observe(metricsSection);


}

// ==========================================
// Navbar Blur on Scroll
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {


if (window.scrollY > 50) {

    navbar.style.background =
        "rgba(5,8,22,0.92)";

    navbar.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.35)";

} else {

    navbar.style.background =
        "rgba(5,8,22,.65)";

    navbar.style.boxShadow =
        "none";

}


});

// ==========================================
// Mobile Menu
// ==========================================

const mobileMenu =
document.querySelector(".mobile-menu");

const navLinks =
document.querySelector(".nav-links");

if (mobileMenu) {


mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


}

// ==========================================
// Close Menu After Click
// ==========================================

document.querySelectorAll(".nav-links a")
.forEach(link => {


link.addEventListener("click", () => {

    navLinks.classList.remove("show");

});


});

// ==========================================
// Smooth Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {


let current = "";

sections.forEach(section => {

    const sectionTop =
        section.offsetTop - 150;

    if (scrollY >= sectionTop) {

        current = section.getAttribute("id");

    }

});

navItems.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href")
        === "#" + current
    ) {

        link.classList.add("active");

    }

});


});

// ==========================================
// Floating Hexagon Effect
// ==========================================

const hexagon =
document.querySelector(".hexagon-wrapper");

window.addEventListener("mousemove", (e) => {

if (!hexagon) return;

const x =
    (window.innerWidth / 2 - e.pageX) / 50;

const y =
    (window.innerHeight / 2 - e.pageY) / 50;

hexagon.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ==========================================
// Dynamic Year
// ==========================================

const yearElement =
document.getElementById("year");

if (yearElement) {


yearElement.innerText =
    new Date().getFullYear();


}

// ==========================================
// Console Signature
// ==========================================

console.log(
"%cArjun Patidar",
"color:#00E5FF;font-size:20px;font-weight:bold;"
);

console.log(
"%cEnterprise Systems Architect | ERP | Automation | Digital Transformation",
"color:#00FFB3;font-size:12px;"
);

// ==========================================
// End Script
// ==========================================
