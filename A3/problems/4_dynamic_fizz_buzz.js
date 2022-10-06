/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2) {
  let returnList = [];
  for (let i = 0; i < max; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      continue;
    } else if (i % num1 === 0 || i % num2 === 0) {
      returnList.push(i);
    }
  }
  return returnList;
}
console.log(dynamicFizzBuzz(20, 5, 3)); //=> [3, 5, 6, 9, 10, 12, 18]
console.log(dynamicFizzBuzz(20, 4, 6)); //=> [4, 6, 8, 16, 18]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
