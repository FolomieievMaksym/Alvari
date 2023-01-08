let viewportHeight = document.documentElement.clientHeight;
window.addEventListener("scroll", showPictures);
showPictures();
function showPictures(e) {
   document.querySelectorAll("[data-srcset]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight * 1.25) {
         el.setAttribute("srcset", el.getAttribute("data-srcset"));
         el.removeAttribute("data-srcset");
      }
   });
   document.querySelectorAll("[data-img-src]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight * 1.25) {
         el.setAttribute("src", el.getAttribute("data-img-src"));
         el.removeAttribute("data-img-src");
         // el.removeAttribute("style"); // ? А нужны ли вообще стили..?
      }
   });
   document.querySelectorAll("[data-video-src]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight * 1.25) {
         el.setAttribute("src", el.getAttribute("data-video-src"));
      }
   });
   document.querySelectorAll("[data-iframe-src]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight * 1.25) {
         el.setAttribute("src", el.getAttribute("data-iframe-src"));
         el.removeAttribute("data-iframe-src");
      }
   });
}
