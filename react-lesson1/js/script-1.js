//lesson 1 - ex 1
//Передать функцию callback и указать сколько раз ее вызвать функции loop

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