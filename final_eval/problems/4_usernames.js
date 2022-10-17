/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  let resultList = [];
  for (let ele of names) {
    let splitName = ele.split(" ");
    resultList.push(
      `${splitName[0][0].toLowerCase()}${splitName[1].toLowerCase()}`
    );
  }
  return resultList;
}

var names = ["Oscar Alvarez", "Danny Catalano", "Kurstie Ozuna", "Matt Haws"];

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
