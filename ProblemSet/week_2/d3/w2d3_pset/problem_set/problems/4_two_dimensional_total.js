/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/

function twoDimensionalTotal(array) {
  let returnNum = 0;
  for (let i = 0; i < array.length; i++) {
    returnNum += array[i].reduce((partialSum, a) => partialSum + a, 0);
  }
  return returnNum;
}
var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

var arr2 = [[2], [1, 9], [1, 1, 1]];

console.log(twoDimensionalTotal(arr2)); // => 15

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalTotal;
