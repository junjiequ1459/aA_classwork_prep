/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  let returnList = [];
  for (let keys in count) {
    let counter = count[keys];
    while (counter > 0) {
      returnList.push(keys);
      counter--;
    }
  }
  return returnList;
}
console.log(arrayBuilder({ cats: 2, dogs: 1 })); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
