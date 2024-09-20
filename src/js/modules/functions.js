/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
//свайпер
const swiper = new Swiper('.slider-img', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
	//autoplay
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
//Свайпер для коментариев
const swiper2 = new Swiper('.slider-comments', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3, // Установите желаемое количество видимых слайдов
    spaceBetween: 30, // Расстояние между слайдами (по желанию)
	centeredSlides: true, // Слайды будут выровнены по центру
	touch: {
		// Разрешить свайп на устройствах с сенсорным экраном
		enabled: true
	},
	//навигация
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	  breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,

        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,

        },
		1024:{
            slidesPerView: 2,
		},
		1400:{
            slidesPerView: 3,
		}
    },
  });  
//Меню бургер
let menuBurger = document.querySelector(".menu__burger");
let menu = document.querySelector(".menu__body")
menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
})
