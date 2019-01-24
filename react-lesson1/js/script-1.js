//lesson 1 - ex 1
/*Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет 
в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции*/

function loop(times = 0, callback = null) {
    for (let i = 0; i < times; i++) {
        callback()
    }
}

let hello = function () {
    console.log("Hello!")
}

loop(2, hello) // ok
loop(2) // error: callback is not a function