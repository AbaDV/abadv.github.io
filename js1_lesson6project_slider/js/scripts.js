console.log('lesson 6 Задание 1-2');

const images = document.querySelectorAll(".img");
let currentImageIndex = 0;

function changeBigPicture(imgElement) {
    let nextPictureSrc = imgElement.getAttribute("src");
    nextPictureSrc = images[currentImageIndex].src;

    let currentBigPicture = document.getElementById("big_picture");
    currentBigPicture.src = nextPictureSrc;
}

let sliderArrowForward = document.querySelector(".slider-arrow-forward");
let sliderArrowBack = document.querySelector(".slider-arrow-back");

function goForward(e) {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    changeBigPicture(images[currentImageIndex]);
}
function goBack(e) {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    changeBigPicture(images[currentImageIndex]);
}

function init() {
    sliderArrowForward.addEventListener("click", goForward);
    sliderArrowBack.addEventListener("click", goBack);

    changeBigPicture(images[currentImageIndex]);
}

window.onload = init;