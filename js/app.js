
// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить панель навигации
var navbar = document.getElementById("navbar");

// Получить смещение позиции навигационной панели
var sticky = navbar.offsetTop;

// Добавьте липкий класс на панель навигации, когда вы достигнете ее положения прокрутки. Удалить «липучку», когда вы покидаете позицию прокрутки
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//burger

(() => {
  window.onload = () => {
    let header__burger = document.querySelector(".header__burger");
    let footer__nav = document.querySelector(".alem-header__menu");
    let body = document.querySelector("body");
    header__burger.addEventListener("click", (e) => {
      header__burger.classList.toggle("active");
      footer__nav.classList.toggle("active");
      body.classList.toggle("lock");
    });
  };
})();

let header__burger = document.querySelectorAll(".header__burger,.lis");
let footer__nav = document.querySelector(".alem-header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    footer__nav.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .alem-header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".lis").click(function (event) {
    $(".header__burger, .alem-header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
});


