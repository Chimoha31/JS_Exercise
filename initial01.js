"use strict";
// 1, Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.
function equalNum(a, b) {
  return a === 100 || b === 100 || a + b === 100 ? true : false;
}
console.log(equalNum(100, 80));
console.log(equalNum(49, 11));
console.log(equalNum(25, 100));
console.log(equalNum(50, 50));
console.log(equalNum(34, 290));
console.log(equalNum(75, 25));
console.log(equalNum(1, 99));

// 2, Write a JS program to get the extension of a filename.
function extensionName(filename) {
  return filename.substr(filename.lastIndexOf("."));
}

console.log(extensionName("initial.index"));
console.log(extensionName("initial.js"));

// 3, Write a JS program to replace every character in a given string with the character following it in the alphabet.
const moveCharsForward = (str) => {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log(moveCharsForward("abcd"));

// 4, Write a JS program to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();

date < 10 ? (date = "0" + date) : true;
month < 10 ? (month = "0" + month) : true;

today = `${date} / ${month} / ${year}`;
console.log(today);

// solution2
const today2 = (date = new Date()) => {
  const date2 = date.getDate();
  const month2 = date.getMonth() + 1;
  const year2 = date.getFullYear();
  
  return `${date2} / ${month2} / ${year2}`;
}
console.log(today2());