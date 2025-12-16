function open() {
	document.querySelectorAll("menu").style.display = "block";
}

function close() {
	document.querySelectorAll("menu").style.display = "none";
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});