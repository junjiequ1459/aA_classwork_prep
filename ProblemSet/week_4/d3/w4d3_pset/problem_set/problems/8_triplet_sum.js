/***********************************************************************
Write a function `tripletSum(array, sum)` that takes in an array of
numbers (array) and a number (sum). The function should return an array
containing unique triplets of numbers from the array that equal `sum`
when added together. You can assume that the input array contains no
repeated numbers.

Example:

var arr1 = [1, 3, 5, 2, 4];
tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
tripletSum(arr1, 10); // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
tripletSum(arr1, 11); // => [ [ 5, 2, 4 ] ]
***********************************************************************/

function tripletSum(array, sum) {
  let resultList = [];
  for (let i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      for (k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === sum) {
          resultList.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return resultList;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = tripletSum;
