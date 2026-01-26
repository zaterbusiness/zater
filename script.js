const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".card");

let index = 0;
const visibleCards = 2;
const cardWidth = cards[0].offsetWidth + 20;

function updateSlider() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function moveRight() {
  if (index < cards.length - visibleCards) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
}

function moveLeft() {
  if (index > 0) {
    index--;
  } else {
    index = cards.length - visibleCards;
  }
  updateSlider();
}

/* Auto Slide */

document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById("counter");
  let target = 100;
  let count = 0;

  let interval = setInterval(() => {
    if (count < target) {
      count++;
      counter.innerText = count;
    } else {
      clearInterval(interval);
    }
  }, 20);
});

