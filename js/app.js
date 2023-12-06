
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

//Preloader
window.onload = setTimeout(function () {
  const preloaderEl = document.querySelector(`.mask-loader`);
  const mainEl = document.querySelector(`main`);     //если вечная загрузка, попробовать заменить на body
  mainEl.style.display = `flex`;
  preloaderEl.style.display = `none`;
}, 4000);





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




// tabs

function openCity(evt, cityName) {
  // Объявите все переменные
  var i, tabcontent, tablinks;

  // Получите все элементы с помощью class="tabcontent" и скройте их.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Получите все элементы с class="tablinks" и удалите класс "active"."
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить «активный» класс к кнопке, открывающей вкладку.
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

    






// lightbox

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



