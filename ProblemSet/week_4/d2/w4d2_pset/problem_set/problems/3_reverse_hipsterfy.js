/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

function reverseHipsterfy(sentence) {
  let splitSentence = sentence.split(" ");
  let returnList = [];

  for (let i = 0; i < splitSentence.length; i++) {
    returnList.push(rHipsterWord(splitSentence[i]));
  }
  return returnList.join(" ");
}

function rHipsterWord(word) {
  let vowels = "aeiou";
  let counter = 0;
  let returnStr = word;

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i]) && counter === 0) {
      counter++;
      continue;
    }
    if (vowels.includes(word[i]) && counter > 0) {
      returnStr = returnStr.slice(0, i) + returnStr.slice(i + 1);
    }
  }
  return returnStr;
}

console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
