/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
  for (let keys in obj) {
    if (keys === key) {
      return true;
    }
  }
  return false;
}
var obj1 = { bootcamp: "App Academy", course: "Bootcamp Prep" };
console.log(doesKeyExist(obj1, "course")); // => true
console.log(doesKeyExist(obj1, "name")); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
