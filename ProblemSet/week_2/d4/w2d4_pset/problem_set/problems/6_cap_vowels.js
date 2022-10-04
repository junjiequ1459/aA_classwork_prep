/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let returnStr = "";

  let strList = string.split("");
  //console.log(strList);
  for (let i = 0; i < strList.length; i++) {
    if (vowels.includes(strList[i])) {
      returnStr += strList[i].toUpperCase();
    } else {
      returnStr += strList[i].toLowerCase();
    }
  }
  return returnStr;
}
console.log(capVowels("hello world")); // => 'hEllO wOrld'
console.log(capVowels("HELLO WORLD")); // => 'hEllO wOrld'
console.log(capVowels("boOtCamP PreP")); // => 'bOOtcAmp prEp'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
