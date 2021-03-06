// task 1
console.log('// Задание 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.');

let a = 10,
    b = 4,
    c = 2;

console.log('a = ' + a + ', b = ' + b + ', c = ' + c);    

function calcNumber(a, b, c) {

   return (a - b) / c;

} 

console.log('Результат вычислений: ' + calcNumber(a, b, c));

// task 2

console.log('// Задание 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.');

let d = 10;

console.log('Число d = ' + d);

function calcCube(numb) {

    return 'Куб числа - ' + d**3 + ', квадрат числа - ' + d**2;

}

console.log(calcCube(d));

// task 3

console.log('// Задание 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.')

let e = 14,
    f = 4;

console.log('Число a = ' + e + ', b = ' + f);

function min(a, b) {

    if (a - b < 0) { 
        return a;
    } else {
        return b;
    }

}

function max(a, b) {

    if (a - b > 0) {
        return a;
    } else {
        return b;
    }

}

console.log('Меньшее из чисел - ' + min(e, f));
console.log('Большее из чисел - ' + max(e, f));


// task 4

console.log('// Задание 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.');

let g = parseInt(prompt('4. Введите начальное число массива')),
    h = parseInt(prompt('4. Введите конечное число массива'));

function getRange(a, b) {

    let arrTask4 = [];

    let min_numb = min(a, b);
    let max_numb = max(a, b);

    for (let i = min_numb; i <= max_numb; i++) {
        arrTask4.push(i);
    }

    return arrTask4;

}

function getArray(arr) {

    console.log(arr);

}

getArray(getRange(g, h));

// task 5

console.log('// Задание 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false');

let k = parseInt(prompt('5. Введите число'));

function isEven(number) {

    if (number%2 == 0 && number != 0) {
        return true;
    } else {
        return false;
    }

}

if (isEven(k) == true) {
    console.log('Число ' + k + ' - четное');
} else {
    console.log('Число ' + k + ' - нечетное');
}

// task 6

console.log('// Задание 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.')

let arr6 = [2, 45, 3, 67, 96, 2, 9, 0, 87, -4, -3, 12, -102];

console.log('Исходный массив: ');
console.log(arr6);


function arrEven(arr) {

    let arrNew = [];

    for (let i = 0; i < arr.length; i++) {

        if (isEven(arr[i]) == true) {
            arrNew.push(arr[i])
        }

    }

    return arrNew;

}

console.log('Массив только с четными значениями:');
console.log(arrEven(arr6));


// task 7

console.log('// Задание 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы). Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом')

let m = prompt('7. Введите кол-во рядов пирамиды');

let n = prompt('7. Введите либой символ, если хотите, чтобы пирамида строилась из символов или просто нажмите ОК');

function drawPyramid(param, symbal) {

    let m_sum;

    for (let i = 1; i <= param; i++) {

        m_sum = '';

        for (let j = 0; j < i; j++) {

            if (symbal != 0) {
                m_sum += symbal+'';
            } else {
                m_sum += i;
            }

        }

        console.log(m_sum);

    }

}

drawPyramid(m, n);

// task 8

console.log('// Задание 8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник');

let p = prompt('8. Введите высоту треугольника: целое число > 0');

function buildTriangle(hight) {

    for (let i = 0; i < hight; i++) {

        console.log(new Array(hight - i).join(' ') + new Array(i * 2 + 2).join('*'));

    }

}

buildTriangle(p);

function buildReverseTriangle(hight) {

    for (let i = hight - 1; i >= 0; i--) {

        console.log(new Array(hight - i).join(' ') + new Array(i * 2 + 2).join('*'));

    }

}

console.log('Перевернутый треугольник:');
buildReverseTriangle(p);


// task 9

console.log('// Задание 9.  Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.');

function getSequence(b) {

    let s_arr = [0, 1],
        numb = 1;
    
    for (let i = 1; numb < b; i++, numb = s_arr[i] + s_arr[i - 1]) s_arr.push(numb);

    return s_arr;
    
}

console.log(getSequence(1000));

// task 10

console.log('// Задание 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.');

let t = 156;

function sum(a) {

    let t_sum = 0;
    
    if (a > 9) {

        a += '';
        
        for (let i = 0; i < a.length; i++) {
            t_sum += +a[i]; 
        }

        a = sum(t_sum);

    }

    return a;

}

console.log('Сумма чисел полученного числа - ' + sum(t));

// task 11

console.log('// Задание 11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.');

let w_arr = [2, 5, 10, 67, 83];

let i = 0;
 
function getNumbersArray(arr) {
    console.log(arr[i]);
    i++;

    if (i < arr.length) {
        getNumbersArray(arr);
    }
}

getNumbersArray(w_arr);

// task 12

console.log('// Задание 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в определенном виде');


function getBadge() {

    let z_arr = [],
    lastname = prompt('Введите фамилию'),
    firstname = prompt('Введите имя'),
    patronymic = prompt('Введите отчество'),
    group = prompt('Введите номер группы');

    z_arr = ['', 'Домашняя работа: «Функции»', lastname + ' ' + firstname + ' ' + patronymic, 'Выполнил: студент гр. ' + group, ''];
    
    let max_length = 0;

    for (let i = 1; i < z_arr.length - 1; i++) if (z_arr[i].length > max_length) max_length = z_arr[i].length;

    let z_symbal = '';

    for (let i = 0; i < 5; i++) {

        if (z_arr[i] != '') z_symbal = ' ';
        else z_symbal = '*';

        z_arr[i] = '*' + z_arr[i] + new Array(max_length - z_arr[i].length + 1).join(z_symbal) + '*';    
        
        console.log(z_arr[i]);

    }
    
}

getBadge();


// task 13

console.log('// Задание 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения.')

x = prompt('Введите email');

function checkEmail(email) {

    console.log(email);
    email = Array.from(email.toLowerCase());

    let valid_leter = Array.from('abcdefghijklmnopqrstuvwxyz'),
        valid_symbol = Array.from('@_-.'),
        valid_number = Array.from('1234567890');

    // есть ли запрещенные символы
    for (let char of email) if(!(valid_leter.includes(char) || valid_symbol.includes(char) || valid_number.includes(char))) return false;

    // кол-во символов @
    if (!(email.includes('@') && (email.indexOf('@') == email.lastIndexOf('@')))) return false;

    // спец-символ не первый и не последний
    if (valid_symbol.includes(email[0]) || valid_symbol.includes[email.length - 1]) return false;

    // повторение спецсимволов
    for (let i = 1; i < email.length; i++) if (valid_symbol.includes(email[i - 1]) && valid_symbol.includes(email[i])) return false;

    let part1 = email.slice(0,email.indexOf('@'));

    // длина больше 2 символов
    if (!(part1.length > 2)) return false;

    // не начинается с цифры
    if (valid_number.includes(part1[0])) return false;

    // кол-во цифр в первой части не одна
    let mult = 0;
    for (let i = 0; i < part1.length; i++) if (valid_number.includes(part1[i])) mult++;
    if (mult > 0 && mult < 2) return false;

    let part2 = email.slice(email.indexOf('@') + 1);

    // в домене должна быть одна точка
    if (!(part2.includes('.') && (part2.indexOf('.') == part2.lastIndexOf('.')))) return false;

    let part3 = part2.slice(part2.indexOf('.') + 1);

    // длина домена верхнего уровня от 2 до 11 символов

    if (part3.length < 2 || part3.length > 11) return false;

    return true;

}

console.log(checkEmail(x));