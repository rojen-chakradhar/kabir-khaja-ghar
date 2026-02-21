const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


gsap.from('.loader-name', {
  opacity: 0,
  y: 100,
  duration:1,
})

gsap.from('.est-date', {
  opacity: 0,
  y: 100,
  delay: 0.5,
  duration:1,
})

const loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.marginTop = "-100dvh";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2500)
}, 2000);