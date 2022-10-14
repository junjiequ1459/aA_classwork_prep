/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function canConstruct(ransomNote, magazine) {
  let magazineObj = letterCount(magazine);
  let ransomNoteObj = letterCount(ransomNote);

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazine.includes(ransomNote[i])) {
      return false;
    }
    if (ransomNoteObj[ransomNote[i]] > magazine[ransomNote[i]]) {
      return false;
    }
  }
  return true;
}
function letterCount(obj) {
  let returnObj = {};
  for (let i = 0; i < obj.length; i++) {
    if (returnObj[obj[i]]) {
      returnObj[obj[i]]++;
    } else {
      returnObj[obj[i]] = 1;
    }
  }
  return returnObj;
}

console.log(canConstruct("a", "b")); // => false
console.log(canConstruct("a", "aa")); // => true
console.log(canConstruct("ababc", "dbaccab")); // => true
console.log(canConstruct("aabbc", "aaaabbbdef")); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
