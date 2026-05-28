import { initBudgetForm } from "./form.js";

async function loadComponent(id, file) {
  const response = await fetch(file);

  const data = await response.text();

  document.getElementById(id).innerHTML = data;
}

async function init() {
  await loadComponent("header", "./sections/header.html");

  await loadComponent("hero", "./sections/hero.html");

  await loadComponent("services", "./sections/services.html");

  await loadComponent("about", "./sections/about.html");

  await loadComponent("testimonials", "./sections/testimonials.html");

  await loadComponent("contact", "./sections/contact.html");

  await loadComponent("footer", "./sections/footer.html");

  initMobileMenu();

  initBudgetForm();
}

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");

  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");

      if (navbar.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
      } else {
        menuToggle.innerHTML = "☰";
      }
    });
  }
}

init();
