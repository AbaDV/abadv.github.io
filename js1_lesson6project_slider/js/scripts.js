const images = document.querySelectorAll(".img");
let currentImageIndex = 0;


function changeBigPicture(e) {
    console.log('[e.target]', e.target);
    const direction = getDirection(e);
    console.log('[direction]: ', direction);

    let currentBigPicture = document.getElementById("big_picture");
    console.log('[currentBigPicture]: ', currentBigPicture);
    if (direction === 'forward') {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
    } else if (direction === 'back') {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
    }

    let nextPictureSrc = e.target.getAttribute("src");
    nextPictureSrc = images[currentImageIndex].src;
    currentBigPicture.src = nextPictureSrc;
    console.log(currentBigPicture.src);
}

let sliderArrowForward = document.querySelector(".slider-arrow-forward");
let sliderArrowBack = document.querySelector(".slider-arrow-back");

// function goForward(e) {
//     if (currentImageIndex > images.length) {
//         currentImageIndex = 0;
//     }
// }
// function goBack(e) {
//     if (currentImageIndex < 0) {
//         currentImageIndex = images.length - 1;
//     }
// }


function init() {
    // sliderArrowForward.onclick = function (e) {
    //     console.log("Кликнули на стрелку Вперед");
    // }

    // sliderArrowBack.onclick = function () {
    //     console.log("Кликнули на стрелку Назад");
    // }

    sliderArrowForward.addEventListener("click", changeBigPicture);
    sliderArrowBack.addEventListener("click", changeBigPicture);

    // for (let i = 0; i < images.length; i++) {
    //     const bigPicture = {
    //         target: images[i]
    //     }
    //     changeBigPicture(bigPicture);
    // }
    changeBigPicture({ target: images[currentImageIndex] });

    currentImage = document.getElementById('big_picture');
    console.log('[currentImage]', currentImage);
}

function getDirection(e) {
    let direction;
    const clickedElement = e.target;
    if (clickedElement.nodeName === 'path') {
        direction = clickedElement.parentElement.getAttribute('direction');
    }
    if (clickedElement.nodeName === 'svg') {
        direction = clickedElement.getAttribute('direction');
    }
    return direction;
}

window.onload = init;