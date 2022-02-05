"use strict";
// 1, Write a JS program to find the number of even digits in a an array of integers
const evenNumLength = (numsArr) => {
  return numsArr.filter((num) => num % 2 === 0).length;
};

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
const findEvenNum = (num) => {
  const evenArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
};
console.log(findEvenNum(10));
console.log(findEvenNum(5));

// 3, Write a JS program to check whether a given array of integers is sorted in ascending order
const ascending = function (arr) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) return false;
  }
  return true;
};

console.log(ascending([1, 2, 3, 4, 5]));
console.log(ascending([1, 2, 4, 3, 5]));
console.log(ascending([1, 1, 2, 3, 3]));

// 4, Write a JS program to get the largest even number from an array of integer.

