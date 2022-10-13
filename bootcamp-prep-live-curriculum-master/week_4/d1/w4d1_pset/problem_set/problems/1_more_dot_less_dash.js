/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

function moreDotLessDash(str) {
  let obj = {
    ".": 0,
    "-": -0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      obj["."]++;
    } else if (str[i] === "-") {
      obj["-"]++;
    }
  }
  if (obj["."] > obj["-"]) {
    return true;
  }
  return false;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // => true
console.log(moreDotLessDash(".-.-.")); // => true
console.log(moreDotLessDash(".-")); // => false
console.log(moreDotLessDash("..--")); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
