/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

const capVowels = require("../../../../d4/w2d4_pset/problem_set/problems/6_cap_vowels");

function hipsterfy(sentence) {}

function removeLastVowel(word) {
  let returnStr = "";
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {}
}

console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
