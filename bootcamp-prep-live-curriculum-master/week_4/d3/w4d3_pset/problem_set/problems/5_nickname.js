/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/

function nickname(name) {
  let counter = 0;
  let vowel = "aeiou";
  let returnStr = "";

  for (let i = 0; i < name.length; i++) {
    if (vowel.includes(name[i]) && counter > 1) {
      return `${name.slice(0, i + 1).toUpperCase()}-${name
        .slice(0, i + 1)
        .toUpperCase()}`;
    }
    counter++;
  }
  return `${name.toUpperCase()}-${name.toUpperCase()}`;
}
console.log(nickname("manuel")); // => 'MANU-MANU'
console.log(nickname("pikachu")); // => 'PIKA-PIKA'
console.log(nickname("bootcamp")); // => 'BOO-BOO'
console.log(nickname("bob")); // => 'BOB-BOB'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
