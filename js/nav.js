const navHamburger = document.querySelector("#navHamburger");
const navClose = document.querySelector("#navClose");
const navSlide = document.querySelector("#navSide");

navHamburger.addEventListener("click", () => {
  navSlide.classList.toggle("nav-closed");
});

navClose.addEventListener("click", () => {
  navSlide.classList.toggle("nav-closed");
});
