let viewportHeight = document.documentElement.clientHeight;

const itemsToAnimate = document.querySelectorAll("[data-animate]");
const itemsToAnimateLeft = document.querySelectorAll("[data-animate-left]");
const itemsToAnimateRight = document.querySelectorAll("[data-animate-right]");
const itemsToAnimateBottom = document.querySelectorAll("[data-animate-bottom]");
const itemsToAnimateTop = document.querySelectorAll("[data-animate-top]");
const itemsToAnimateScale = document.querySelectorAll("[data-animate-scale]");
const itemsToAnimateAnim = document.querySelectorAll("[data-anim]");
const itemsToAnimateDecor = document.querySelectorAll("[data-anim-decor]");
const itemsToAnimateAddress = document.querySelectorAll("[data-animate-address]");

itemsToAnimateLeft.forEach((el) => {
   el.style.opacity = "0";
   el.style.transform = "translateX(-100px)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0.4s, 0.4s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateRight.forEach((el) => {
   el.style.opacity = "0";
   el.style.transform = "translateX(40%)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "1s, 0.8s";
   el.style.transitionDelay = "0.1s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateBottom.forEach((el) => {
   el.style.opacity = "0";
   el.style.transform = "translateY(50px)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0.8s, 0.8s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateAddress.forEach((el) => {
   el.style.opacity = "0";
   el.style.transform = "translateX(-50%)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateTop.forEach((el) => {});
itemsToAnimateScale.forEach((el) => {
   el.style.opacity = "0";
   el.style.transform = "scale(0.5)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0.5s, 0.5s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateAnim.forEach((el) => {
   el.style.opacity = "0";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});
itemsToAnimateDecor.forEach((el) => {
   el.style.opacity = "0";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "0.8s, 0.3s";
   el.style.transitionDelay = "0s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});
// // ? Задержка для анимируемых элементов каждого последующего слайда
// if (qs(".step3__swiper")) {
//    const ster3Slides = qs(".step3__swiper .swiper-wrapper").children;
//    let transitionDelay = 0;
//    for (let i = 0; i < ster3Slides.length; i++) {
//       let myLi = ster3Slides[i].firstElementChild.children[1].children;
//       for (let j = 0; j < myLi.length; j++) {
//          myLi[j].style.transitionDelay = `${transitionDelay}ms`;
//       }
//       transitionDelay += 200;
//    }
// }

// ? Анимация
// window.addEventListener("scroll", showAnimatedItems);
// showAnimatedItems();
// function showAnimatedItems(e) {
//    itemsToAnimate.forEach((el) => {
//       if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
//          el.style.transform = "translate(0,0) scale(1)";
//          el.style.opacity = "1";
//       }
//    });
// }

window.addEventListener("scroll", showAnimatedItems);
showAnimatedItems();
function showAnimatedItems(e) {
   itemsToAnimate.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.children[0].children[0].style.transform = "translateX(0)";
         el.children[0].children[0].style.opacity = "1";
         el.children[0].children[1].style.transform = "translateY(0)";
         el.children[0].children[1].style.opacity = "1";
         el.children[1].children[0].style.transform = "translateX(0)";
         el.children[1].children[0].style.opacity = "1";
      }
   });
   itemsToAnimateAddress.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.style.transform = "translateX(0)";
         el.style.opacity = "1";
      }
   });
   itemsToAnimateScale.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.style.transform = "scale(1)";
         el.style.opacity = "1";
      }
   });
   itemsToAnimateAnim.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.style.transform = "scale(1)";
         el.style.opacity = "1";
      }
   });
   itemsToAnimateDecor.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.style.transform = "translateY(15px)";
         el.style.opacity = "1";
         setTimeout(() => {
            el.style.transform = "translateY(0px)";
         }, 400);
      }
   });
}
