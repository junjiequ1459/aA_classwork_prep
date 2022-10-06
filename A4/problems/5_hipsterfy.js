/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
function hipsterfyWord(word) {
  let returnWord = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    } else {
      returnWord = word[i] + returnWord;
    }
  }
  return returnWord;
}
function hipsterfy(sentence) {
  let returnList = [];
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    returnList.push(hipsterfyWord(splitSentence[i]));
  }
  return returnList.join(" ");
}
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
console.log(hipsterfy("embrace thy end"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
