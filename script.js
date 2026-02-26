// CDS Construcciones — script.js

// Close demo strip
const closeDemo = document.getElementById("closeDemo");
const demoStrip = document.getElementById("demoStrip");
if (closeDemo && demoStrip) {
  closeDemo.addEventListener("click", () => {
    demoStrip.style.display = "none";
  });
}

// Mobile menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });

  // close menu on click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

// Reveal on scroll
const reveals = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));
