/***********************************************************************
Write a function fib(n) that takes in a number and returns the nth number
of the fibonacci sequence.

In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1.
To generate the next number in the sequence, we take the sum of the
previous two fibonacci numbers. For example the first 5 numbers of the
fibonacci sequence are `1, 1, 2, 3, 5`

Hint: use `if (n === 1 || n === 2)...` as the base case.

Check today's recursive notes if you need help.

Examples:

fib(1) // => 1
fib(2) // => 1
fib(3) // => 2
fib(4) // => 3
fib(5) // => 5
fib(6) // => 8
fib(7) // => 13
***********************************************************************/

function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}
console.log(fib(1)); // => 1
console.log(fib(2)); // => 1
console.log(fib(3)); // => 2
console.log(fib(4)); // => 3
console.log(fib(5)); // => 5
console.log(fib(6)); // => 8
console.log(fib(7)); // => 13

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = fib;
