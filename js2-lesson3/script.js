/* Задание 3
    Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
    ** - При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
    - Имя содержит только буквы;
    ** - Телефон подчиняется шаблону +7(000)000-0000;**
    ** - E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru**
    ** - Текст произвольный;**
    ** - В случае не прохождения валидации одним из полей необходимо выделять это поле красной рамкой и сообщать пользователю об ошибке.**
    */

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

function onsubmitFeedbackForm(form) {
    let elements = form.elements;



    debugger

    return false;
}

