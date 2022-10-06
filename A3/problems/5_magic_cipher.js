/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher) {
  let returnStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (cipher[sentence[i]]) {
      returnStr += cipher[sentence[i]];
    } else {
      returnStr += sentence[i];
    }
  }
  return returnStr;
}
console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); //=> "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // => "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); //=> "dance"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
