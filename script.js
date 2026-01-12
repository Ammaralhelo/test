// سلايدر خلفية الهيرو
const heroBgElement = document.querySelector(".hero-bg-slideshow");

if (heroBgElement) {
  const backgrounds = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg"
  ];

  let currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    heroBgElement.style.opacity = 0;
    setTimeout(() => {
      heroBgElement.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
      heroBgElement.style.opacity = 1;
    }, 400);
  }

  heroBgElement.style.backgroundImage = `url(${backgrounds[0]})`;
  heroBgElement.style.opacity = 1;

  setInterval(changeBackground, 8000);
}
