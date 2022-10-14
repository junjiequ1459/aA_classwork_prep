/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
***********************************************************************/

function censor(sentence, curseWords) {
  let returnList = [];
  let splitSentence = sentence.split(" ");
  for (word of splitSentence) {
    if (curseWords.includes(word.toLowerCase())) {
      returnList.push(censorWord(word));
    } else {
      returnList.push(word);
    }
  }
  return returnList.join(" ");
}

function censorWord(word) {
  let vowels = "aeiou";
  let resultWord = "";
  for (let char of word) {
    if (vowels.includes(char)) {
      resultWord += "*";
    } else {
      resultWord += char;
    }
  }
  return resultWord;
}

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1); //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", [
  "schnikeys",
  "diddly",
  "squat",
]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
