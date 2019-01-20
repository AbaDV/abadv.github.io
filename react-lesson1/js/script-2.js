//lesson 1 - ex 2
/*Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, 
основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: 
{ area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные параметры, по 
которым было произведено вычисление*/

function calculateArea(a, b) {
    const area = a * b;

    return {
        area: area,
        figure: 'rectangle',
        input: { a, b }
    }
}

let resultCalculate = calculateArea(2, 3)
console.log(resultCalculate)