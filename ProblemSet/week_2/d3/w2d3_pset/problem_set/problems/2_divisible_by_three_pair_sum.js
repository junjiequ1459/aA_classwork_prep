/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

function divisibleByThreePairSum(array) {
  //2 % 3 => 2;
  let sorted = [[], [], []];
  let returnList = [];
  for (let i = 0; i < array.length; i++) {
    sorted[array[i] % 3].push(i);
  }
  for (let i = 0; i < sorted[0].length; i++) {
    for (let j = i + 1; j < sorted[0].length; j++) {
      returnList.push([sorted[0][i], sorted[0][j]]);
    }
  }

  for (let i = 0; i < sorted[1].length; i++) {
    for (let j = 0; j < sorted[2].length; j++) {
      returnList.push([sorted[1][i], sorted[2][j]]);
    }
  }
  returnList.sort();
  return returnList;
}
var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); //=> [[1, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;
