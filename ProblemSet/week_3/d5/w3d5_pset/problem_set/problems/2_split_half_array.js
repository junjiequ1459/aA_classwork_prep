/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

function splitHalfArray(array) {
  let returnArr = [];
  if (array.length % 2 === 0) {
    returnArr.push(
      array.slice(0, array.length / 2),
      array.slice(array.length / 2)
    );
  } else {
    returnArr.push(
      array.slice(0, array.length / 2),
      array.slice(array.length / 2 + 1)
    );
  }
  return returnArr;
}
console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(["a", "b", "c", "d", "e", "f"]));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = splitHalfArray;
