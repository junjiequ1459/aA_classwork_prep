/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

Examples:

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
smallestPrime(arr1); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
smallestPrime(arr2); // => 7

var arr3 = [];
smallestPrime(arr3); // => null

var arr4 = [4, 6, 8, 10];
smallestPrime(arr4); // => null
***********************************************************************/

function smallestPrime(array) {
  let Smallest = null;
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i]) && !Smallest) {
      Smallest = array[i];
    }

    if (isPrime(array[i]) && array[i] < Smallest) {
      Smallest = array[i];
    }
  }
  return Smallest;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
var arr1 = [6, 7, 12, 11, 5, 4];
console.log(smallestPrime(arr1)); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7

var arr3 = [];
console.log(smallestPrime(arr3)); // => null

var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = smallestPrime;
