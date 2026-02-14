const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_links");
const navItems = document.querySelectorAll(".nav_item");

navToggle.addEventListener("click", e => {
  navLinks.classList.toggle("active");
  e.stopPropagation();
});

document.addEventListener("click", e => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
const currentPath = window.location.pathname;

navItems.forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active-link");
  } else {
    link.classList.remove("active-link");
  }
});
