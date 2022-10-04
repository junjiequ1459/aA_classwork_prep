/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

function threeIncreasing(arr) {
  let counter = 0;
  let lastNum;
  for (let i = 0; i < arr.length; i++) {
    if (counter === 2) {
      return true;
    }
    if (arr[i] === lastNum + 1) {
      counter++;
      lastNum = arr[i];
    } else {
      lastNum = arr[i];
    }
  }
  return false;
}
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeIncreasing;
