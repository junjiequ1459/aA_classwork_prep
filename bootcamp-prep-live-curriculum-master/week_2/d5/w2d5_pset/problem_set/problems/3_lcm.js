/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {
  let counter = 1;
  while (counter <= num1 * num2) {
    if (counter % num1 === 0 && counter % num2 === 0) {
      return counter;
    }
    counter++;
  }
}

console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
