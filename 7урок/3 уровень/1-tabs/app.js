"use strict";
const texts = {
  text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  text2:
    "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
  text3:
    "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.",
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

const navButtons = document.querySelectorAll(".nav-link");
const text = document.querySelector(".text");

// navButtons.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     navButtons.forEach((item, i) => {
//       if (item == e.target) {
//         item.classList.add("active");
//         text.innerText = texts[`text${i + 1}`];
//       } else {
//         item.classList.remove("active");
//       }
//     });
//   });
// });

navButtons.forEach((item) => {
  item.addEventListener("click", changeActiveClass);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function changeActiveClass(e) {
  navButtons.forEach((item, i) => {
    if (item == e.target) {
      item.classList.add("active");
      text.innerText = texts[`text${i + 1}`];
    } else {
      item.classList.remove("active");
    }
  });
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
// function changeActiveClass(event) {}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
// function changeText(event) {}
