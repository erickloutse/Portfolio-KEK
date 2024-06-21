function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith(".html")) {
    var newPath = window.location.pathname.replace(".html", "");
    window.history.replaceState(null, "", newPath);
  }
});
