/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
  let returnStr = "";
  let SplitStr = sentence.split(" ");
  for (let i = 0; i < SplitStr.length; i++) {
    for (let j = 0; j < SplitStr[i].length; j++) {
      if (j === 0) {
        returnStr += SplitStr[i][j].toUpperCase();
      } else if (j === SplitStr[i].length - 1) {
        returnStr += SplitStr[i][j].toUpperCase();
      } else {
        returnStr += SplitStr[i][j].toLowerCase();
      }
    }
    returnStr += " ";
  }
  return returnStr.trim();
}
firstLastCap("hello BOOTCAMP PrEp"); // =>'HellO BootcamP PreP'
firstLastCap("what is on the radio"); // =>'WhaT IS ON ThE RadiO'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
