console.log('lesson 4 Задание 1');

let number = prompt('Введите число от 0 до 999');

function convertNumberToObject(number) {

    if (number >= 0 && number <= 999) {
        let units = 0, tens = 0, hundreds = 0;
        hundreds = parseInt(number / 100);
        tens = parseInt((number - hundreds * 100) / 10);
        units = parseInt(number - hundreds * 100 - tens * 10);

        const objectNumber = {
            hundreds: hundreds,
            tens: tens,
            units: units
        };
        console.log('сотни:' + objectNumber.hundreds);
        console.log('десятки:' + objectNumber.tens);
        console.log('единицы:' + objectNumber.units);
        return objectNumber;
    }

    if (number < 0) {
        console.log('Введите число от 0 до 999!');
    }

    if (number > 999) {
        console.log('Число превышает 999!');
    }
}

console.log(convertNumberToObject(number));