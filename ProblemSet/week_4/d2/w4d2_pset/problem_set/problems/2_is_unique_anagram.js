/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

function isUniqueAnagram(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    if (!word2.includes(word1[i])) {
      return false;
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }
  return true;
}

console.log(isUniqueAnagram("iceman", "cinema")); // => true
console.log(isUniqueAnagram("abcd", "adcb")); // => true
console.log(isUniqueAnagram("abcd", "adxb")); // => false
console.log(isUniqueAnagram("abcd", "abcdx")); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isUniqueAnagram;
