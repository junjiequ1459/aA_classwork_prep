/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let highscore = 0;
  let returnStr = "";
  for (let i = 0; i < students.length; i++) {
    if (students[i]["score"] > highscore) {
      highscore = students[i]["score"];
      returnStr = `${initials(students[i]["name"])}${students[i]["id"]}`;
    }
  }
  return returnStr;
}

function initials(fullname) {
  let nameList = fullname.split(" ");
  return nameList[0][0] + nameList[1][0];
}
var students = [
  { name: "Alvin Zablan", id: 128, score: -42 },
  { name: "Eliot Bradshaw", id: 32, score: 57 },
  { name: "Tommy Duek", id: 2, score: 99 },
  { name: "Fred Sladkey", id: 256, score: 94 },
];

console.log(highestScore(students)); //=> 'TD2'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
