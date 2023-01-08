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

if (document.getElementById("arrow-bottom")) {
   let viewportHeight = document.documentElement.clientHeight;
   let logoSource = document.querySelector(".header__logo source");
   let logoImg = document.querySelector(".header__logo img");
   if (window.innerWidth > 768) {
      document.querySelector("main").style.paddingTop = 0;
      document.getElementById("arrow-bottom").addEventListener("click", scrollDown);
      function scrollDown() {
         window.scrollTo(0, viewportHeight - header.scrollHeight);
      }

      window.addEventListener("scroll", changeHeader);
      changeHeader();
      function changeHeader() {
         console.log(window.scrollY);
         if (window.scrollY >= viewportHeight - header.scrollHeight) {
            header.classList.remove("home");
            setTimeout(() => {
               logoSource.setAttribute("srcset", "img/logo.webp");
               logoImg.setAttribute("src", "img/logo.png");
            }, 180);
         } else {
            header.classList.add("home");
            logoSource.setAttribute("srcset", "img/logo-white.webp");
            logoImg.setAttribute("src", "img/logo-white.png");
         }
      }
   } else {
      header.classList.remove("home");
      logoSource.setAttribute("srcset", "img/logo.webp");
      logoImg.setAttribute("src", "img/logo.png");
      // document.querySelector("main").style.paddingTop = header.scrollHeight + "px";
   }
}
