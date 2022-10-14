/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/

function isogramMatcher(string1, string2) {
  let match = 0;
  let sameindex = 0;

  for (let i in string1) {
    if (string1.includes(string2[i]) && string1[i] !== string2[i]) {
      sameindex++;
    }

    if (string1[i] === string2[i]) {
      match++;
    }
  }
  return [match, sameindex];
}
console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isogramMatcher;
