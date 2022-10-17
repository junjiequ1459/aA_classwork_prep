/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(arr) {
  let result = 0;
  for (let ele of arr) {
    if (ele < 0) {
      result += ele;
    }
  }
  return result;
}
console.log(negativeSum([-3, 12, -5, -2, 3])); // => -10
console.log(negativeSum([2, 1, 7])); // => 0

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;
