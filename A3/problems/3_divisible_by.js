/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array) {
  let returnList = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) % 5 === 0) {
        returnList.push([i, j]);
      }
    }
  }
  return returnList;
}
console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
