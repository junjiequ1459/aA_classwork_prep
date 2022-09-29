/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
//splitStr = ['bootcamp','is','fun']
function abbreviate(sentence) {
  let returnStr = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let splitStr = sentence.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > 4) {
      for (let j = 0; j < splitStr[i].length; j++) {
        if (!vowels.includes(splitStr[i][j])) {
          returnStr += splitStr[i][j];
        }
      }
      returnStr += " ";
    } else {
      returnStr += `${splitStr[i]} `;
    }
  }
  return returnStr.trim();
}

abbreviate("bootcamp prep is fun"); // => 'btcmp prep is fun'
abbreviate("programming is fantastic"); // => 'prgrmmng is fntstc'
abbreviate("hello world"); // => 'hll wrld'
abbreviate("how are you"); // => 'how are you'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
