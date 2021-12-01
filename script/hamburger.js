const closeHamburger = document.querySelector(".hamburger-close");
const openHamburger = document.querySelector(".hamburger-open");
const mobileMenu = document.querySelector(".mobile-menu");
closeHamburger.addEventListener("click", () => {
  console.log("click");
  mobileMenu.classList.remove("close");
});
openHamburger.addEventListener("click", () => {
  console.log("click");
  mobileMenu.classList.add("close");
});
