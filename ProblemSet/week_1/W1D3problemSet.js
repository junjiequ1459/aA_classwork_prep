function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
logBetween(14, 6); // prints nothing
//
logBetween(4, 6); // prints
// 4
// 5
// 6

console.log("============================================================");
function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}
logBetweenStepper(5, 9, 1); // prints
// 5
// 6
// 7
// 8
// 9

logBetweenStepper(-10, 15, 5); // prints
// -10
// -5
// 0
// 5
// 10
// 15
console.log("============================================================");

function printFives(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
}

printFives(20); // prints
// 0
// 5
// 10
// 15

console.log("============================================================");

function printReverse(min, max) {
  for (let i = max - 1; i > min; i -= 1) {
    console.log(i);
  }
}
printReverse(13, 18); // prints
// 17
// 16
// 15
// 14

printReverse(90, 94); // prints
// 93
// 92
// 91

console.log("============================================================");

function sumNums(max) {
  let total = 0;
  for (let i = 0; i <= max; i++) {
    total += i;
  }
  console.log(total);
}
sumNums(4); // => 10
sumNums(10); // => 55
sumNums(365); // => 66795

console.log("============================================================");

function isFactorOf(number, factor) {
  if (number % factor === 0) {
    return console.log(true);
  }
  return console.log(false);
}
isFactorOf(6, 2); // => true
isFactorOf(-6, 2); // => true
isFactorOf(5, 0); // => false
isFactorOf(22, 7); // => false

console.log("============================================================");

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}

fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

console.log("============================================================");

function isPrime(number) {
  if (number === 1 || number === 0) {
    return console.log(false);
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return console.log(false);
    }
  }
  return console.log(true);
}
isPrime(0); // => false
isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
