const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerAction = document.querySelector(".header-action");
const burger = document.querySelector(".burger");
// ! Burger

body.addEventListener("click", burgerToggle);
function burgerToggle(e) {
   if (e.target.closest(".burger")) {
      if (burger.classList.contains("active")) {
         closeBurger();
      } else {
         openBurger();
      }
   } else if (!e.target.closest(".burger")) {
      closeBurger();
   }
}
function openBurger() {
   body.classList.add("lock");
   header.classList.add("active");
   burger.classList.add("active");
   if (window.innerWidth < 769) {
      headerAction.style.height = headerAction.scrollHeight + "px";
      headerAction.classList.add("opened");
      window.addEventListener("scroll", closeBurger);
   }
}
function closeBurger() {
   body.classList.remove("lock");
   header.classList.remove("active");
   burger.classList.remove("active");
   if (window.innerWidth < 769) {
      headerAction.style.height = "0px";
      headerAction.classList.remove("opened");
      window.removeEventListener("scroll", closeBurger);
   }
}

// ! <main></main>
document.querySelector("main").style.paddingTop = header.scrollHeight + "px";

// ! Header

const headerToHide = document.querySelectorAll("[data-to-hide]");
headerToHide.forEach((el) => {
   el.style.overflow = "hidden";
   el.style.transition = "height 0.3s ease 0s";
});

window.addEventListener("scroll", hideHeaderPart);
hideHeaderPart();
function hideHeaderPart() {
   if (window.pageYOffset > header.scrollHeight / 2) {
      headerToHide.forEach((el) => {
         el.style.height = "0px";
      });
      header.style.opacity = "0.9";
   } else if (window.pageYOffset < header.scrollHeight) {
      headerToHide.forEach((el) => {
         el.style.height = el.scrollHeight + "px";
      });
      header.style.opacity = "1";
   }
}

// Arrow #top
let viewportHeight = document.documentElement.clientHeight;
const arrowTop = document.getElementById("arrow-top");
window.addEventListener("scroll", linkToTop);
linkToTop();
function linkToTop(e) {
   if (window.pageYOffset > viewportHeight) {
      arrowTop.style.opacity = "1";
   } else {
      arrowTop.style.opacity = "0";
   }
}
