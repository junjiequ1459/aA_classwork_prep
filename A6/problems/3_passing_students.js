/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
  let returnList = [];
  for (let i = 0; i < students.length; i++) {
    if (Avg(students[i]) >= 70) {
      returnList.push(students[i]["name"]);
    }
  }
  return returnList;
}

function Avg(obj) {
  let sum = 0;
  let list = obj["grades"];
  for (let i = 0; i < list.length; i++) {
    sum += list[i]["score"];
  }
  return sum / list.length;
}

var students = [
  {
    name: "Kush",
    id: 12345,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 75 },
      { id: 2, score: 85 },
    ],
  },
  {
    name: "Ned",
    id: 55555,
    grades: [
      { id: 0, score: 100 },
      { id: 1, score: 100 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: "Haseeb",
    id: 94110,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 60 },
      { id: 2, score: 65 },
    ],
  },
];

console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
