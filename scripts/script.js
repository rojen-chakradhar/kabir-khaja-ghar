// review slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function loader() {
  const loader = document.querySelector("#loader");
  const bodyContainer = document.querySelector("body");
  // const loaderNameFullForm = document.querySelectorAll(".loader-name-span");
  // not letting users scroll when loader is showing up
  bodyContainer.style.height= "100dvh";
  bodyContainer.style.overflow= "hidden";
  let tl = gsap.timeline();
  // name and establish date showing up
  tl.from('.loader-name', {
    opacity: 0,
    y: 100,
    duration:1,
    ease: "power2.out"
  })
  .from('.est-date', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: "power2.out"
  })
  .to(".loader-name", {
    gap: "5rem",
    duration: 2.5,
  })
  .to(".loader-name-spa", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1,
    ease: "power2.out"
  })
  // .from(loaderNameFullForm, {
  //   display: "none",
  //   opacity: 0,
  //   delay: 1,
  //   duration: 2,
  //   ease: "power1.in"
  // })
  // loader disappear
  .to(loader, {
    y: -100,
    delay: 1,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () => {
      loader.style.display= "none"
      bodyContainer.style.height= "100%";
      bodyContainer.style.overflow= "auto";
    }
  })
}
loader();