const card_1 = document.getElementById("card_1");
const card_2 = document.getElementById("card_2");
const card_3 = document.getElementById("card_3");
console.log(card_2);
const description_1 = document.getElementById("description_1");
const description_2 = document.getElementById("description_2");
const description_3 = document.getElementById("description_3");

card_1.addEventListener("mousemove", card_1_effect);
card_1.addEventListener("mouseleave", card_1_remove_effect);
card_2.addEventListener("mousemove", card_2_effect);
card_2.addEventListener("mouseleave", card_2_remove_effect);
card_3.addEventListener("mousemove", card_3_effect);
card_3.addEventListener("mouseleave", card_3_remove_effect);
function card_1_effect(event) {
  let cardWidth = card_1.offsetWidth;
  let cardHeight = card_1.offsetHeight;
  let centerOfX = card_1.offsetLeft + cardWidth / 2;
  let centerofY = card_1.offsetTop + cardHeight / 2;
  let currentMousePointX = event.clientX - centerOfX;
  let currentMousePointY = event.clientY - centerofY;
  let rotateByX = +1 * 25 * (currentMousePointX / (cardWidth / 2));
  let rotateByY = -1 * 25 * (currentMousePointY / (cardHeight / 2));
  card_1.style.transform = `perspective(500px) rotateX(${rotateByY}deg) rotateY(${rotateByX}deg)`;
  description_1.style.transform = "translateY(0px)";
  document.getElementById("card_1_img").style.transform = "scale(1.1)";
  document.getElementById("card_1_img").style.opacity = 1;
}

function card_2_effect(event) {
  let cardWidth = card_2.offsetWidth;
  let cardHeight = card_2.offsetHeight;
  let centerOfX = card_2.offsetLeft + cardWidth / 2;
  let centerofY = card_2.offsetTop + cardHeight / 2;
  let currentMousePointX = event.clientX - centerOfX;
  let currentMousePointY = event.clientY - centerofY;
  let rotateByX = +1 * 25 * (currentMousePointX / (cardWidth / 2));
  let rotateByY = -1 * 25 * (currentMousePointY / (cardHeight / 2));
  card_2.style.transform = `perspective(500px) rotateX(${rotateByY}deg) rotateY(${rotateByX}deg)`;
  description_2.style.transform = "translateY(0px)";
  document.getElementById("card_2_img").style.transform = "scale(1.1)";
  document.getElementById("card_2_img").style.opacity = 1;
}

function card_3_effect(event) {
  let cardWidth = card_3.offsetWidth;
  let cardHeight = card_3.offsetHeight;
  let centerOfX = card_3.offsetLeft + cardWidth / 2;
  let centerofY = card_3.offsetTop + cardHeight / 2;
  let currentMousePointX = event.clientX - centerOfX;
  let currentMousePointY = event.clientY - centerofY;
  let rotateByX = +1 * 25 * (currentMousePointX / (cardWidth / 2));
  let rotateByY = -1 * 25 * (currentMousePointY / (cardHeight / 2));
  card_3.style.transform = `perspective(500px) rotateX(${rotateByY}deg) rotateY(${rotateByX}deg)`;
  description_3.style.transform = "translateY(0px)";
  document.getElementById("card_3_img").style.transform = "scale(1.1)";
  document.getElementById("card_3_img").style.opacity = 1;
}

function card_1_remove_effect(event) {
  card_1.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  description_1.style.transform = "translateY(80px)";
  document.getElementById("card_1_img").style.transform = "scale(1.5)";
  document.getElementById("card_1_img").style.opacity = 0.5;
}

function card_2_remove_effect(event) {
  card_2.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  description_2.style.transform = "translateY(80px)";
  document.getElementById("card_2_img").style.transform = "scale(1.5)";
  document.getElementById("card_2_img").style.opacity = 0.5;
}

function card_3_remove_effect(event) {
  card_3.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  description_3.style.transform = "translateY(80px)";
  document.getElementById("card_3_img").style.transform = "scale(1.5)";
  document.getElementById("card_3_img").style.opacity = 0.5;
}
