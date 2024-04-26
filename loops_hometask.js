// Задача 1: Поиск наибольшего числа в массиве:
// Напишите программу, которая находит наибольшее число
//  в заданном массиве.

const arr1 = [3, 5, 7, 2, 8, 21, 15];

const maxNumber = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
};

maxNumber(arr1);

// Задача 2: Подсчет количества четных чисел в массиве:
// Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.

const numbers = [1, 2, 3, 5, 7, 8, 22, 2, 10];

const evenNumbers = function (arr) {
  let array1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      array1.push(arr[i]);
    }
  }
  console.log(array1.length);
};

evenNumbers(numbers);

// Задача 3: Вывод чисел от N до 1 в обратном порядке:
// Напишите программу, которая запрашивает у пользователя число N
//  и выводит все числа от N до 1 в обратном порядке.

const reverseNumbers = function () {
  let reverseArr = [];
  const userNumber = Number(prompt("Input any number."));
  for (let i = 1; i <= userNumber; i++) {
    reverseArr.unshift(i);
  }

  alert(`Numbers are ${reverseArr}`);
};

reverseNumbers();

// Задача 4: Проверка на палиндром*:
// Напишите программу, которая запрашивает у пользователя строку и проверяет,
// является ли она палиндромом.

const isPalindrome = function () {
  const userInput = prompt(
    "Input some a word or some words to learn wether your it is a palindrome"
  ).replaceAll(" ", "");
  const userInputArr = userInput.split("");

  let userReverseArr = [];

  for (let i = 0; i < userInputArr.length; i++) {
    userReverseArr.unshift(userInputArr[i]);
  }

  if (userInputArr.toString() == userReverseArr.toString()) {
    alert("It's a palindrome!");
  } else {
    alert("It's not a palindrome!");
  }
};

isPalindrome();
