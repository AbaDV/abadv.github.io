/**
 * Обработка событий
 */

let willBeClicked = document.querySelector(".willBeClicked");
willBeClicked.onclick = function() {
    alert("Кликнули на willBeClicked");
}

function willBeClickedAgain() {
    alert("Кликнули на willBeClicked еще раз");
}

let testInClick = document.querySelector(".testInClick");
testInClick.onclick = function() {
    alert("Кликнули на testInClick");
    willBeClicked.onclick = willBeClickedAgain;
}

//addEventListener и removeEventListener
let firstLi = document.querySelector("ul li:first-child");
//firstLi.removeEventListener("click", firstLiClick);

function firstLiClick() {
    firstLi.removeEventListener("click", firstLiClick);
    firstLi.addEventListener("click", firstLiClick2);
    alert("firstLi clicked first time");
}
function firstLiClick2() {
    firstLi.removeEventListener("click", firstLiClick2);
    firstLi.addEventListener("click", firstLiClick);
    alert("firstLi clicked first time again");
}
firstLi.addEventListener("click", firstLiClick);

/**
 * Слайдер/галерея
 */
let loopInterval;   //Глобальный loop указатель
let loopCount = 1;  //Счетчик смены картинок
let timer = 2000;   //Таймер переключения картинок

/* Первая версия без перехвата loopCount
function loopPics(images) {
    let picTarget = {
        target: images[loopCount]
    };
    changeBigPicture(picTarget);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function init() {
    let images = document.querySelectorAll(".slider_pics img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", changeBigPicture);
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(event) {
    //console.log(event);
    let appBigPic = document.getElementById("big_picture");
    let clickedElement = event.target;
    //console.log(clickedElement);
    let src = clickedElement.getAttribute("src");
    console.log(src);
    appBigPic.src = src;
}*/

//2 версия с перехватом loopCount
function loopPics(images) {
    changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function init() {
    let images = document.querySelectorAll(".slider_pics img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            changeBigPicture(i, images[i].src);
        });
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(index, src) {
    let appBigPic = document.getElementById("big_picture");
    appBigPic.src = src;
    loopCount = index;
}

window.onload = init;