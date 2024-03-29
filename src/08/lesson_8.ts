// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).


export function sum(...nums: Array<number>): number {

    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((a, b) => a + b)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) {
        return '10'
    } else if (a + b < c || b + c < a || c + a < b) {
        return '00'
    } else if (a === b || b === c || a === c) {
        return '01'
    } else if (a !== b && c !== b && a !== c) {
        return '11'
    } else {
        return '00'
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return String(number).split('').map(e => +e).reduce((a, b) => a + b)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let Odd = 0
    let Even = 0

    for (let i = 0; i < arr.length; i++) if (i % 2 === 0) {
        Even += arr[i]
    } else Odd += arr[i]

    return Even > Odd;
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(e => e % 1 === 0).filter(e => e > 0).map(e => e * e)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return N * (N + 1) / 2
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {


    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = []

    if (amountOfMoney > 0){
        for (let i = 0; i < banknotes.length; i++) {
            let n = banknotes[i]

            while (amountOfMoney - n >=0) {
                amountOfMoney -= n
                result.push(n)
            }
        }
    }

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}