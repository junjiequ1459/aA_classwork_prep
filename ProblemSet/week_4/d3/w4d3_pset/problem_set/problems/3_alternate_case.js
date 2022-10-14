/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
  let returnStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      returnStr += str[i].toUpperCase();
    } else {
      returnStr += str[i].toLowerCase();
    }
  }
  return returnStr;
}
console.log(alternateCase("BOOTCAMPPREP")); // => 'BoOtCaMpPrEp'
console.log(alternateCase("bOotCamPpREP")); // => 'BoOtCaMpPrEp'
console.log(alternateCase("hello")); // => 'HeLlO'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
