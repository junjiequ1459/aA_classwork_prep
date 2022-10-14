/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.

Examples

reverseString('bootcamp'); // => 'pmactoob'
reverseString('app academy'); // => 'ymedaca ppa'
reverseString(''); // => ''
***********************************************************************/

function reverseString(string) {
  let resultStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    resultStr += string[i];
  }
  return resultStr;
}

console.log(reverseString("bootcamp")); // => 'pmactoob'
console.log(reverseString("app academy")); // => 'ymedaca ppa'
console.log(reverseString("")); // => ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseString;
