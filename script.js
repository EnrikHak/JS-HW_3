// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function summ(fstNumber, secNumber) {
  sum = Math.pow(fstNumber, 3) + Math.pow(secNumber, 3);
  return sum;
}
console.log(summ(2, 3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let number = prompt('Введите сумму:');
function salary(number) {
  return number - number * 13 / 100; // или 0.13
}
if (number != Number(number)){
  console.log('Не верный ввод!');
} else {
  console.log(`Размер заработной платы за вычетом налогов равен ${salary(number)}`);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');
function maxValue(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log('Максимальное значение у первого числа');
  } else if (num2 > num1 && num2 > num3) {
    console.log('Максимальное значение у второго числа');
  } else if (num3 > num1 && num3 > num2) {
    console.log('Максимальное значение у третьего числа');
  }
}
console.log(num1, num2, num3);
maxValue(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function summa(number1, number2) {
  return number1 + number2;
}
console.log(summa(4, 8));

function differenceOfNum(number1, number2) {
  if (number1 > number2) {
    console.log(number1 - number2);
  } else {
    console.log(number2 - number1);
  }
}
differenceOfNum(2, 10);

const mult = (number1, number2) => number1 * number2;
console.log(mult(4, 5));

const division = (number1, number2) => number1 / number2;
console.log(division(8, 3));