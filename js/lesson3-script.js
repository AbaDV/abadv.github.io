console.log('lesson 3 Задание 1');
{
    let i = 0;
    while (i <= 100) {
        let isSimple = i > 1;

        let j = 2;
        while (j < i) {
            if (i % j == 0) {
                isSimple = false;
                break;
            }
            j++;
        }

        if (isSimple) {
            console.log(i);
        }
        i++;
    }
}

console.log('lesson 3 Задание 2');
{
    let i = 0;

    do {
        if (i == 0)
            console.log(i + ' – это ноль');
        else {
            if (i % 2 == 0)
                console.log(i + ' – четное число');
            else
                console.log(i + ' – нечетное число');
        }

        i++;
    } while (i <= 10)
}

console.log('lesson 3 Задание 3');
{
    for (
        let i = 0;
        i <= 9;
        console.log(i++)
    ) {
        // здесь пусто
    }
}

console.log('lesson 3 Задание 4');
{
    for (let i = 1; i <= 20; i++) {
        let x = '';
        for (let j = 1; j <= i; j++) {
            x = x + 'x';
        }
        console.log(x);
    }
}

//lesson 3 Задание 5

//lesson 3 Задание 6

//lesson 3 Задание 7

//lesson 3 Задание 

//lesson 3 Задание 