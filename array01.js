'use strict';

const people = [
  { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
  { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
  { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
  { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
  { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
  { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
  { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
  { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
  { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
  { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
  { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
  { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?
let totalSalary = 0;
for(let i = 0; i < people.length; i++) {
  totalSalary += Math.trunc(Number(people[i].salary) / people.length); 
}
console.log(totalSalary);


// 2) Who are the people that are currently older than 30?
const today = new Date();
const year = today.getFullYear();
console.log(year);

for(let j = 0; j < people.length; j++) {
  const eachBD = people[j].DOB.split('/');
  // console.log(eachBD);
  const eachBDYear = eachBD[2];
  // console.log(eachBDYear);
  const age = year - eachBDYear;
  console.log(age);

  if(year - eachBDYear >= 30) {
    console.log(`${people[j].firstName} ${people[j].lastName} is ${age}, which is older than 30`);
  }
}

// 3) Get a list of the people's full name (firstName and lastName).
const nameArry = [];

for(let n = 0; n < people.length; n++) {
  const firstName = people[n].firstName;
  const lastName = people[n].lastName;
  const fullName = `${firstName} ${lastName}`
  nameArry.push(fullName)
}
console.log(nameArry);


// 4) Get a list of people in the array ordered from youngest to oldest.
const ageArr = [];

for(let a = 0; a < people.length; a++) {
  const birthYear = people[a].DOB.split('/')[2];
  const age = year - birthYear;
  ageArr.push(age);
}
console.log("Age Array", ageArr);
const sortSmall = ageArr.sort((a, b) => a < b ? -1 : 1);
console.log("Small", sortSmall);
const sortBig = ageArr.sort((a, b) => a > b ? -1 : 1);
console.log("Big", sortBig);

// 5) How many people are there in each department?
const departmentNum = people.reduce((total, current) => (
  {...total, [current.department]: total[current.department] + 1 || 1}
  ), {});
console.log(departmentNum);