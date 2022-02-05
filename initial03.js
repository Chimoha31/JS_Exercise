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
const largestrEvenNum = (arr) => {
  return Math.max(...arr.filter(num => num % 2 === 0));
}

console.log(largestrEvenNum([11, 22, 33, 46, 88, 100]));
console.log(largestrEvenNum([8, 1, 624, 66, 51, 44, 777]));

// 5, Write a JS program to replace the first digit in a string (should contains at least digit) with $ character.
const replaceNumWith$ = (arr) => {
  return arr.replace(/[0-9]/, '$');
}


console.log(replaceNumWith$('abcd5ef080'));
console.log(replaceNumWith$('Atin3der787'));
console.log(replaceNumWith$('Tedd1y555'));