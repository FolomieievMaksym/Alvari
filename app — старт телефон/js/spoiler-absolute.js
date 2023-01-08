document.body.addEventListener("click", closeAbsoluteSpoiler);
window.addEventListener("scroll", closeSpoiler);
function closeAbsoluteSpoiler(e) {
   if (!e.target.closest(`[data-spoiler-absolute]`)) {
      closeSpoiler();
   }
}
function closeSpoiler() {
   document.querySelectorAll("[data-spoiler-absolute]").forEach((el) => {
      el.classList.remove("opened");
      el.children[1].style.height = "0px";
   });
}
// Базовые стили для элементов спойлера
document.querySelectorAll("[data-spoiler-absolute]").forEach((el) => {
   el.parentElement.addEventListener("click", toggleAbsoluteSpoiler);
   // el.children[0].style.cursor = "pointer";
   // el.children[1].style.height = "0px";
   // el.children[1].style.overflow = "hidden";
   // el.children[1].style.transition = "height 0.5s ease";
});

function toggleAbsoluteSpoiler(e) {
   if (e.target.closest("[data-spoiler-absolute] > div:first-child")) {
      if (e.target.closest("[data-spoiler-absolute]").classList.contains("opened")) {
         e.target.closest("[data-spoiler-absolute]").classList.remove("opened");
         e.target.closest("[data-spoiler-absolute]").children[1].style.height = "0px";
      } else {
         document.querySelectorAll("[data-spoiler-absolute]").forEach((el) => {
            el.classList.remove("opened");
            el.children[1].style.height = "0px";
         });
         e.target.closest("[data-spoiler-absolute]").classList.toggle("opened");
         e.target.closest("[data-spoiler-absolute]").children[1].style.height =
            e.target.closest("[data-spoiler-absolute]").children[1].scrollHeight + "px";
      }
   }
}
