/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
  let returnNum = 0;
  letter = {};

  for (let i = 0; i < string.length; i++) {
    if (letter[string[i]]) {
      letter[string[i]]++;
    } else {
      letter[string[i]] = 1;
    }
  }
  for (let keys in letter) {
    if (letter[keys] > 1) {
      returnNum++;
    }
  }
  //console.log(letter);
  return returnNum;
}
console.log(countRepeats("alvin")); //=> 0
console.log(countRepeats("aaaalvin")); //=> 1
console.log(countRepeats("pops")); //=> 1
console.log(countRepeats("mississippi")); //=> 3
console.log(countRepeats("hellobootcampprep")); //=> 4
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
