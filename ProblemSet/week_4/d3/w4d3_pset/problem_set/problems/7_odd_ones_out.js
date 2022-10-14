/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

function oddOnesOut(array) {
  let obj = {};
  let resultList = [];
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      resultList.push(key);
    }
  }
  return resultList;
}

var arr1 = ["a", "b", "b", "c", "d", "c", "c", "d"];
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

var arr2 = ["fish", "fish", "dog", "cat", "dog", "dog"];
console.log(oddOnesOut(arr2)); // => [ 'fish' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
