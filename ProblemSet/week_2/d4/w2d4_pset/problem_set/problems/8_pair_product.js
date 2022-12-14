/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
  let returnArr = [];
  let counter = 0;
  while (counter < arr.length) {
    let counter2 = counter + 1;
    while (counter2 < arr.length) {
      if (arr[counter] * arr[counter2] === num) {
        returnArr.push([counter, counter2]);
      }
      counter2++;
    }
    counter++;
  }
  return returnArr;
}
console.log(pairProduct([1, 2, 3, 4, 5], 4)); //=> [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); //=> [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairProduct;
