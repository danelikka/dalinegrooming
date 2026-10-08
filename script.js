const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuBtn.innerHTML = mobileMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

document.querySelectorAll('a[href*="dalinegrooming.reservio.com"]').forEach((button) => {
  button.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag('event', 'conversion', {
        'send_to': 'AW-18275674654/Zi3WCLnYrZUdEJ7UwopE',
        'value': 1.0,
        'currency': 'EUR',
      });
    }
  });
});