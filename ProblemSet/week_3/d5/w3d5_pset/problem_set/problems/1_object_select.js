/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; //=> {
  one: "one",
  three: "three"
}
***********************************************************************/

function objectSelect(obj, callback) {
  let returnObj = {};
  for (let keys in obj) {
    if (callback(obj[keys], keys)) {
      returnObj[keys] = obj[keys];
    }
  }
  return returnObj;
}
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing.",
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = console.log(objectSelect(obj, isEqual));

matchingPairs; //=> {
//  one: "one",
//  three: "three"
//}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSelect;
