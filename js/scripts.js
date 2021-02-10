// task 1
console.log('// Задание 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.');

let a = 10,
    b = 4,
    c = 2;

console.log('a = ' + a + ', b = ' + b + ', c = ' + c);    

function calcNumber(numb1, numb2, numb3) {

   let res_a = (numb1 - numb2) / numb3;

   console.log('Результат вычислений: (a - b) / c = ' + res_a);

} 

calcNumber(a, b, c);

// task 2

console.log('// Задание 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.');

let d = 10;

console.log('Число d = ' + d);

function calcCube(numb) {

    let d_cub = numb**3;
    let d_square = numb**2;

    return 'Куб числа - ' + d_cub + ', квадрат числа - ' + d_square;

}

console.log(calcCube(d));

// task 3

console.log('// Задание 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.')

let e = 14,
    f = 4;

console.log('Число a = ' + e + ', b = ' + f);

function min(numb1, numb2) {

    let min = numb1 - numb2;

    if (min < 0) { 
        return numb1;
    } else {
        return numb2;
    }

}

function max(numb1, numb2) {

    if (numb1 - numb2 > 0) {
        return numb1;
    } else {
        return numb2;
    }

}

console.log('Меньшее из чисел - ' + min(e, f));
console.log('Большее из чисел - ' + max(e, f));



// task 4

console.log('// Задание 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.');

// let g = parseInt(prompt('4. Введите начальное начальное массива')),
//     h = parseInt(prompt('4. Введите конечное число массива'));

// function getRange(numb1, numb2) {

//     let arrTask4 = [];

//     for (let i = numb1; i <= numb2; i++) {
//         arrTask4.push(i);
//     }

//     return arrTask4;

// }

// function getArray(arr) {

//     console.log(arr);

// }

// getArray(getRange(g, h));

// task 5

console.log('// Задание 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false');

// let k = parseInt(prompt('5. Введите число'));

// function isEven(number) {

//     if (number%2 == 0) {
//         return true;
//     } else {
//         return false;
//     }

// }

// if (isEven(k) == true) {
//     console.log('Число ' + k + ' - четное');
// } else {
//     console.log('Число ' + k + ' - нечетное');
// }

// task 6

console.log('// Задание 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.')