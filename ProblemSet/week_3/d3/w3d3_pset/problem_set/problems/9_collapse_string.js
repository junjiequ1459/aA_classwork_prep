/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {
  let newStr = str.replace(/\s+/g, " ").trim();
  let returnList = [];
  let splitStr = newStr.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    returnList.push(collapseWord(splitStr[i]));
  }
  return returnList.join(" ");
}

function collapseWord(word) {
  let returnStr = "";
  let tempStr = "";
  for (let i = 0; i < word.length; i++) {
    if (tempStr !== word[i]) {
      returnStr += word[i];
      tempStr = word[i];
    }
  }
  return returnStr;
}
console.log(collapseString("apple")); //=> 'aple'
console.log(collapseString("AAAaalviiiiin!!!")); //=> 'Aalvin!'
console.log(collapseString("hello   app academy")); //=> 'helo ap academy'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
