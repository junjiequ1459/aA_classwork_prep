/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
secondLargest([10, 7]) => 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/

function secondLargest(array) {
  let largestNum = array[0];
  let secondNum = array[1];
  if (array.length < 2) {
    return -1;
  }
  for (let i in array) {
    if (array[i] > largestNum) {
      secondNum = largestNum;
      largestNum = array[i];
    }
  }
  return secondNum;
}
console.log(secondLargest([3, 1, 5, 4, 7])); // => 5;
console.log(secondLargest([10, 7])); //=> 7;
console.log(secondLargest([10])); //=> -1;
console.log(secondLargest([])); //=> -1;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = secondLargest;
