/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

function previousPrimeArray(array) {
  let max = Math.max(...array);
  let primeList = [];
  let resultList = [];

  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  for (let ele of array) {
    if (isPrime(ele)) {
      if (primeList[primeList.indexOf(ele) - 1]) {
        resultList.push(primeList[primeList.indexOf(ele) - 1]);
      } else {
        resultList.push(null);
      }
    } else {
      resultList.push(ele);
    }
  }
  //return primeList;
  return resultList;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
