"use strict";
// -------------------------------------------------------------
// ①Write a JS program to extract the first half of a string of even length.;

function half(fruit) {
  console.log(fruit.length);
  if (fruit.length % 2 === 0) {
    const firstHalfLetter = fruit.slice(0, fruit.length / 2);
    console.log(firstHalfLetter);
  }
}

half("banana");
half("mango");
half("I am a student");

// ------------------------------------------------------------
// ②Write a JS program to concatenate 2 strings except their first character.
const concatenate = (first, second) => {
  // console.log(first.slice(1, first.length) + second.slice(1, second.length));
  console.log(first.slice(1) + second.slice(1));
};

concatenate("abc", "def");
concatenate("Japanese", "Canadian");

// ------------------------------------------------------------
// ③Given two value, write a JS program to find out which one is nearest to 100
const closestNum = (num1, num2) => {
  // const numA = 100 - num1;
  // const numB = 100 - num2;

  // if (numA < numB) {
  //   return `${num1} is closest to 100 than ${num2}`;
  // } else if (numA > numB) {
  //   return `${num2} is closest to 100 than ${num1}`;
  // }else{
  //   return `${num1} & ${num2} is same number. Can't compare`
  // }
  // ↓short way

  return 100 - num1 < 100 - num2 ? num1 : num2;
};

console.log(closestNum(90, 80));

// ------------------------------------------------------------
// ④Write a JS program to check a given string contains 2 to 4 occurrences of a specified character.

const sameChar = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const twoToFour = (str, char) =>
  sameChar(str, char) >= 2 && sameChar(str, char) <= 4;

console.log(twoToFour("o!", "o"));
console.log(twoToFour("oo!", "o"));
console.log(twoToFour("ooo!", "o"));
console.log(twoToFour("oooo!", "o"));
console.log(twoToFour("ooooo!", "o"));

// ------------------------------------------------------------
// ⑤Write a JS program to find number of even digits in a an array of integer.
const evenNumber = [];

const findNumber = (even) => {
  for (let i = 0; i < even.length; i++) {
    even[i] % 2 === 0 ? evenNumber.push(even[i]) : false;
  }
};

findNumber([10, 3, 51, 42, 6]);
console.log(evenNumber);
