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