/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array) {
  let smallNum = array[0];
  let largeNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (smallNum > array[i]) {
      smallNum = array[i];
    }
    if (largeNum < array[i]) {
      largeNum = array[i];
    }
  }
  return largeNum - smallNum;
}

console.log(minMaxDifference([1, 2, 3, 4, 5])); // => 4
console.log(minMaxDifference([5, 4, 3, 2, 1])); // => 4
console.log(minMaxDifference([4, 2, 5, 1, -5])); // => 10
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
