const marquee = document.querySelector(".marquee__wrapper").children;
const marqueeWidth =
   Number(getComputedStyle(marquee[0]).width.slice(0, -2)) +
   Number(getComputedStyle(marquee[0].parentElement).columnGap.slice(0, -2) * marquee.length - 1) / marquee.length;
addMarquee();
function addMarquee() {
   if (window.innerWidth * 1.5 > marqueeWidth * marquee.length) {
      let newMarquee = marquee[marquee.length - 1].cloneNode(true);
      marquee[marquee.length - 1].parentElement.append(newMarquee);
      // console.log("added new marquee");
      addMarquee();
   }
}

const speed = 2;
let currentPosition;
setInterval(() => {
   currentPosition = getComputedStyle(marquee[0]).left.slice(0, -2);
   Array.from(marquee).forEach((el) => {
      el.style.left = `${currentPosition - speed}px`;
   });
}, 10);
setInterval(() => {
   currentPosition = 0;
   Array.from(marquee).forEach((el) => {
      el.style.left = `${currentPosition}px`;
   });
   document.querySelector(".marquee__wrapper").append(marquee[0]);
}, (10 / speed) * marqueeWidth);
