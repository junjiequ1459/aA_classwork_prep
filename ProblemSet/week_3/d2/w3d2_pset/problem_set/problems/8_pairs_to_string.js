/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

function pairsToString(arr) {
  let returnStr = "";
  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i][1];
    while (counter > 0) {
      returnStr += arr[i][0];
      counter--;
    }
  }
  return returnStr;
}
var array1 = [
  ["a", 3],
  ["b", 1],
  ["c", 2],
];

console.log(pairsToString(array1)); // => 'aaabcc'

var array2 = [
  ["f", 1],
  ["o", 2],
  ["d", 1],
  ["!", 1],
];

console.log(pairsToString(array2)); // => 'food!'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
