const totalImages = 30; // change to your number
let index = 1;

const slide = document.getElementById("slide");
const music = document.getElementById("bgMusic");

const letterTextElement = document.getElementById("letterText");
const fullLetter = letterTextElement.innerHTML;
letterTextElement.innerHTML = "";

function startExperience() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slideshow").classList.remove("hidden");
  music.play();
  showImage();
}

function showImage() {
  slide.classList.remove("zoom");
  slide.style.opacity = 0;

  setTimeout(() => {
    slide.src = `images/${index}.jpg`;
    slide.style.opacity = 1;

    setTimeout(() => slide.classList.add("zoom"), 100);

    index++;
    if (index <= totalImages) {
      setTimeout(showImage, 6000);
    }
  }, 2000);
}
