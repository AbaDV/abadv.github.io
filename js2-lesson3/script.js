/* lesson-3 Задание 3
    Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
    ** - При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
    - Имя содержит только буквы;
    ** - Телефон подчиняется шаблону +7(000)000-0000;**
    ** - E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru**
    ** - Текст произвольный;**
    ** - В случае не прохождения валидации одним из полей необходимо выделять это поле красной рамкой и сообщать пользователю об ошибке.*/

const nameRegex = /[a-zA-Zа-яА-Я]{2,}/;
/*
console.log('Name regex:');
console.log(nameRegex.test('Ва')); // true
console.log(nameRegex.test('Вася')); // true
console.log(nameRegex.test('123')); // false
console.log(nameRegex.test('V')); // false
console.log(nameRegex.test('Vasya')); // true
*/

const phoneRegex = /\+7-\d{3}-\d{3}-\d{2}-\d{2}/;
/*
console.log('Phone regex:');
console.log(phoneRegex.test("+7-495-000-00-00")); // true
console.log(phoneRegex.test("84950000000")); // false
*/

const emailRegex = /(\w+|\w+(\.|\-)\w+)@[a-zA-Z]+\.[a-zA-Z]{2,6}/; //Адрес email
/*
console.log('Email regex:');
console.log(emailRegex.test('mymail@mail.ru')); // true
console.log(emailRegex.test('my.mail@mail.ru')); // true
console.log(emailRegex.test('my-mail@mail.ru')); // true
*/

const dateRegex = /\d{1,2}\-(12|11|10|(0[1-9]))-\d{4}/;
/*
console.log('Date regex:');
console.log(dateRegex.test('12-02-2018')); // true
console.log(dateRegex.test('12-2-2018')); // true
console.log(dateRegex.test('12-asdasd')); // false*/

function setValidationError(container, errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetValidationError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function onsubmitFeedbackForm(form) {
    let elements = form.elements;

    resetValidationError(elements.firstname.parentNode);
    resetValidationError(elements.phone.parentNode);
    resetValidationError(elements.email.parentNode);

    let nameValid, phoneValid, emailValid = true;

    if (!nameRegex.test(elements.firstname.value)) {
        setValidationError(elements.firstname.parentNode, 'Имя отсутствует или введено некорректно');
        // alert('Имя отсутствует или введено некорректно');
        nameValid = false;
    }

    if (!phoneRegex.test(elements.phone.value)) {
        setValidationError(elements.phone.parentNode, 'Телефон отсутствует или введен некорректно (правильный формат: +7-xxx-xxx-xx-xx)');
        // alert('Телефон отсутствует или введен некорректно (правильный формат: +7-xxx-xxx-xx-xx)');
        phoneValid = false;
    }

    if (!emailRegex.test(elements.email.value)) {
        setValidationError(elements.email.parentNode, 'Емайл отсутствует или введен некорректно');
        // alert('Емайл отсутствует или введен некорректно');
        emailValid = false;
    }

    const formValid = nameValid && phoneValid && emailValid;
    return formValid;
}

/*lesson-6
На сайте в форме обратной связи добавьте следующие поля:
a) поле даты рождения;
b) ошибочные поля подсветить с помощью какого-нибудь эффекта
Все возвращаемые ошибки выводить с помощью виджета Dialog.*/

$(function () {
    $("#dialog1").dialog({
        title: "Ошибка",
        autoOpen: false
    });
    $("#dialog2").dialog({
        title: "Ошибка",
        autoOpen: false
    });
    $("#datepicker").datepicker({
        minDate: -20,
        maxDate: "+1M +10D",
        dateFormat: "dd-mm-yy"
    }).on('change', function (e) {
        let inputText = e.target.value;
        if (!dateRegex.test(inputText)) {
            $("#dialog1").dialog("open");
        } else {
            let dateParts = inputText.split('-');
            
            let year = +dateParts[2];
            let month = +dateParts[1];
            if(month > 0) {
                month--;
            }            
            let day = +dateParts[0];

            let inputDate = new Date(year, month, day);
            let currentDateTime = Date.now();
            if (inputDate > currentDateTime) {
                $("#dialog2").dialog("open");
            }
        }
    });
});