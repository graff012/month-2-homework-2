// task 1

// const array = [1, 2, 3];

// const newArr = [...array, ...array];

// console.log(newArr);

// ================================================================= //

// task 2

// const func = function (a, ...b) {
//   return [a, b];
// };

// console.log(func(1, 2, 3, 4, 5, 6));

// ===================================================================== //\

// task 3

// const obj = { name: "Ali", age: 22 };

// const newObj = { ...obj, city: "Tashkent" };

// console.log(newObj);

// ========================================================== //

// task 4

// const array = [1, 2, 3, 4, 5, 6, 7];

// const [a, b, ...c] = array;

// console.log(a, b, c);

// ================================================================ //

// task 5

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const newArr = [...arr1, ...arr2];

// console.log(newArr);

// ================================================================= //

// task 6
// math.js file

// task 7

// const array = [2, 4, 6, 1, 33];

// const maxNum = Math.max(...array);

// console.log(maxNum);

// =================================================================== //

// task 8

// utils.js

// task 9

// function func(a, b, c, ...d) {
//   let count = 0;
//   d.forEach((value) => {
//     count++;
//   });

//   return count;
// }

// console.log(func(1, 2, 3, 4, 5, 6));

// ==================================================================== //

// task 10
// user.js

// ============================================================= //

// task 11

// const massive = [1, 2, 3, 4, 5, 6];

// const [a, b, ...x] = massive;

// const power = x.map((value) => {
//   return value * 2;
// });

// console.log(power);

// =============================================================== //

// task 12

// calculator.js
// name.js

// ==================================================================== //

// task 13

const person1 = { person: { name: "Ali" } };
const person2 = { person: { age: 33 } };

const merged = { person: { ...person1.person, ...person2.person } };

console.log(merged);
