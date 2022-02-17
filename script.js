const navBtn = document.querySelector(".mobile-nav-btn");
const mobileMenu = document.querySelector(".mobile-navbar-links");
const mLink = document.querySelectorAll(".m-link");

window.addEventListener("DOMContentLoaded", function () {
  navBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("show-nav");

    if (mobileMenu.classList.contains("show-nav")) {
      mLink.forEach(function (e) {
        e.addEventListener("click", function () {
          mobileMenu.classList.remove("show-nav");
        });
      });
    }
  });
});
