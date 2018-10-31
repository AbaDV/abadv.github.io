//lesson 2 Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 Значение "а" сначала увеличивается на 1, а потом используется в выражении присвоения: c = ++a
d = b++; alert(d); // 1 Значение "b" сначала используется в выражении присвоения, в данном случае: d = b++, а только потом увеличивается на 1
c = (2 + ++a); alert(c); // 5 Т.к. после первого примера в "а" записалось 2, то здесь получается 2+(2+1) = 5, а = 3 
d = (2 + b++); alert(d); // 4 После 2-го примера в "b" записалось 2, но еще на 1 b увеличится уже после использования в выражении: d = (2+ b++).
// Здесь получается d = (2+2), b = 3
alert(a); // 3 В третьем примере "а" стало = 3, здесь это значение просто выводится
alert(b); // 3 В 4-м примере мы имели b = 2, затем использовали его в выражении: d = (2+ b++), и, соответственно, после его выполнения "b" увеличилось еще на 1


//lesson 2 Задание 2
var a = 2;
var x = 1 + (a *= 2);
alert('x=' + x); // x = 1 + 2 * 2 = 5;

//lesson 2 Задание 3
var a = 2, b = 3;

if (a >= 0 && b >= 0) {
    alert('a - b =' + (a - b))
} else {
    alert('a и b должны быть положительными числами!')
}
if (a < 0 && b < 0) {
    alert('a * b =' + a * b)
} else {
    alert('a и b должны быть отрицательными числами!')
}
if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    alert('a + b =' + (a + b));
} else {
    alert('a и b должны быть разных знаков!')
}

//lesson 2 Задание 4
let a = parseInt(prompt('Введите число от 1 до 15'));
switch (a) {
    case 1:
        alert('Введено: 1');
        break;
    case 2:
        alert('Введено: 2');
        break;
    case 3:
        alert('Введено: 3');
        break;
    case 4:
        alert('Введено: 4');
        break;
    case 5:
        alert('Введено: 5');
        break;
    case 6:
        alert('Введено: 6');
        break;
    case 7:
        alert('Введено: 7');
        break;
    case 8:
        alert('Введено: 8');
        break;
    case 9:
        alert('Введено: 9');
        break;
    case 10:
        alert('Введено: 10');
        break;
    case 11:
        alert('Введено: 11');
        break;
    case 12:
        alert('Введено: 12');
        break;
    case 13:
        alert('Введено: 13');
        break;
    case 14:
        alert('Введено: 14');
        break;
    case 15:
        alert('Введено: 15');
        break;
}

//lesson 2 Задание 5
function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

//lesson 2 Задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return subtract(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        case '/':
            return divide(arg1, arg2);

        default:
            return 'Введите операцию: +, -, *, /';
    }
}

let operation = prompt('Введите операцию (+, -, *, /): ');
let arg1 = 3, arg2 = -7;
alert(mathOperation(arg1, arg2, operation));

//lesson 2 Задание 7
alert(null > 0); // false
alert(null < 0); // false
console.log(null === 0); // false
console.log(null == 0); // false, 0 - численное значение, null представляет собой отсутствие какого-либо объекта

//lesson 2 Задание 8

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

let val = 3, pow = 4;
alert(power(val, pow)); //81