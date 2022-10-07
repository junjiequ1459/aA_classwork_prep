/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

function mySelect(arr, cb) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(["BOOTCAMP", "prep", "iS", "COOL"], isUpper);
console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
console.log(result2); // => [ 2, 4, 8 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mySelect;
