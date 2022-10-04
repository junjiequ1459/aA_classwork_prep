/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
  let returnStr = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      returnStr = word + word.slice(i, -1);
      return returnStr;
    } else {
      return word;
    }
  }
}
console.log(reverb("running")); // => 'runninging'
console.log(reverb("wild")); // => 'wildild'
console.log(reverb("debugged")); // => 'debuggeded'
console.log(reverb("my")); // => 'my'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
