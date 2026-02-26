// Close demo strip
const demoStrip = document.getElementById("demoStrip");
const closeDemo = document.getElementById("closeDemo");
if (closeDemo && demoStrip) {
  closeDemo.addEventListener("click", () => demoStrip.remove());
}

// Mobile menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileNav.setAttribute("aria-hidden", String(expanded));
    mobileNav.style.display = expanded ? "none" : "block";
  });

  // auto close on click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      mobileNav.style.display = "none";
    });
  });
}

// Reveal on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

// Optional: status dot (green) always on, but you can change text easily here
const estado = document.getElementById("estado");
const estadoSub = document.getElementById("estadoSub");
if (estado && estadoSub) {
  estado.textContent = "Horario de oficina";
  estadoSub.textContent = "Lunes a viernes";
}
