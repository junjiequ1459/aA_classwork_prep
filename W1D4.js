function logEach(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i} : ${array[i]}`);
  }
}

logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  console.log(arr);
}

range(1, 4); //=> [1,2,3,4]
range(4, 2); //=> []

function sumArray(array) {
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}
sumArray([5, 6, 4]); // => 15
sumArray([7, 3, 9, 11]); // => 30

function capWords(words) {
  returnArr = [];
  for (let i = 0; i < words.length; i++) {
    returnArr.push(words[i].toUpperCase());
  }
  console.log(returnArr);
}

capWords(["hello", "boOtCaMp", "PREP!"]); // => ['HELLO', 'BOOTCAMP', 'PREP!']

const wordPeriods = (sentence) => {
  let newSentence = sentence.split(" ");
  let returnSentence = "";
  for (let i = 0; i < newSentence.length; i++) {
    returnSentence += `${newSentence[i]}. `;
  }
  console.log(returnSentence);
};
wordPeriods("hello world"); // => 'hello. world.'
wordPeriods("what is the weather today"); // => 'what. is. the. weather. today.'
