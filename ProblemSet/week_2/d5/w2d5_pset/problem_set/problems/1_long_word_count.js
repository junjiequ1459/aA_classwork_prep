/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

function longWordCount(sentence) {
  let returnNum = 0;
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].length > 7) {
      returnNum++;
    }
  }
  return returnNum;
}
console.log(longWordCount("")); // => 0
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("two reallylong words inthisstring")); // => 2
console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
console.log(longWordCount("seventy schfifty five")); // => 1

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = longWordCount;
