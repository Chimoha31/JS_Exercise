"use strict";
// 1, Write a JS program to find the number of even digits in a an array of integers
const evenNumLength = (numsArr) => {
  return numsArr.filter((num) => num % 2 === 0).length;
}

console.log(evenNumLength([2, 4, 5, 8, 24, 53]));

// what the number exactly is even number? Show the even numbers on console.
const numArr = (numsArr) => {
  const evenNumsArr = [];
  numsArr.filter((num) => {
    num % 2 === 0 ? evenNumsArr.push(num) : false;
  });
  console.log(evenNumsArr);
};
numArr([1, 2, 3, 4, 5, 6]);
numArr([10, 21, 34, 45, 55, 62]);

// 2, Write a JS program to find the number of even values up to a given number