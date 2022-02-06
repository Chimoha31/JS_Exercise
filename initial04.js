'use strict';
//1, Given a year, console if it is a leap year.
const isLeapYear = (year) => {
  if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return `${year} is a leap year`;
  }
  return `${year} is not a leap year`;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));

//2, Write a JS program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = {a:'banana', b:'apple', c:'cherry'};
const objB = {a:'melon', e:'lemmon', d:'tomato'};
const objC = {a:'kiwi', b:'pinapple', c:'peach'};

const matchKey = (obj1, obj2) => {
  return Object.keys(obj1).every(key => obj2[key])
}

console.log(matchKey(objA, objB));
console.log(matchKey(objA, objC));
console.log(matchKey(objB, objC));

//3, Write a JS program to convert a comma-separated values(CSV) string to a 2D array. A new line indicates a new row in the array.
// Example: 
// abc, def, ghi
// jkl, mno, pqr
// stu, vwx,byza
const convertCSV = (str) => {
  return str.split('\n').map(row => row.split(','))
};

const strForParam = `abc, def, ghi 
jkl, mno, pqr 
stu, vwx,byza`;

console.log(convertCSV(strForParam));

//4, Write a JS program to generate a random hexadecimal color code.
const randomeHxadecimalColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

console.log(randomeHxadecimalColor());
console.log(randomeHxadecimalColor());
console.log(randomeHxadecimalColor());

//5, Write a JS function that returns true if the provided predicate funtion returns true for all elements in a collection, false otherwise.

// solution1
// const matchArr = (arr) => {
//   return arr.every(x => x < 6)
// }

// solution2
const everyEl = (array, fn) => {
  for(let i = 0; i < array.length; i++) {
    if(!fn(array[i])) {
      return false
    }
  }
  return true
};

// solution result1
// console.log(matchArr([1,2,3,4,5]));
// console.log(matchArr([1,2,3,4,5, 11]));

// solution result2
console.log(everyEl([1, 2, 3], (x) => x < 5));
console.log(everyEl([1, 2, 3, 4, 5, 6], (x) => x < 5));
console.log(everyEl([-3, 2, 1, 5, 4], (x) => x <= 5));