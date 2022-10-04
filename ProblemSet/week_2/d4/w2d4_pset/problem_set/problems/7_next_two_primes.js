/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function nextTwoPrimes(num) {
  let returnList = [];
  let counter = 0;
  let newNum = num + 1;

  while (counter < 2) {
    if (isPrime(newNum)) {
      returnList.push(newNum);
      counter++;
    }
    newNum++;
  }
  return returnList;
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

console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
