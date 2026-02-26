// demo close
const demoBar = document.getElementById("demoBar");
const closeDemo = document.getElementById("closeDemo");
if (demoBar && closeDemo) closeDemo.addEventListener("click", () => demoBar.remove());

// mobile menu
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");
if (burger && mobile) {
  mobile.style.display = "none";
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    mobile.setAttribute("aria-hidden", String(open));
    mobile.style.display = open ? "none" : "block";
  });
  mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    mobile.setAttribute("aria-hidden", "true");
    mobile.style.display = "none";
  }));
}

// reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
