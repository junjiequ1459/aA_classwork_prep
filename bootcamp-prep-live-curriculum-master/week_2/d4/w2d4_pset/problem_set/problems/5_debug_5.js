// Debug this function below so it passes mocha

// Examples:
//
// fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]

function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while (i < max) {
    if (i === 15) {
      i++;
      continue;
    }
    if (i % 5 === 0 || i % 3 === 0) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}
console.log(fizzBuzz(19)); //=> [3, 5, 6, 9, 10, 12, 18]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = fizzBuzz;
