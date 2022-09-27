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
    // [hello,world]
    returnSentence += `${newSentence[i]}. `;
  }
  console.log(returnSentence);
};
wordPeriods("hello world"); // => 'hello. world.'
wordPeriods("what is the weather today"); // => 'what. is. the. weather. today.'

const maxValue = (array) => {
  returnValue = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > returnValue) {
      returnValue = array[i];
    }
  }
  console.log(returnValue);
};

maxValue([12, 6, 43, 2]); // => 43
maxValue([]); // => null
maxValue([-4, -10, 0.43]); // => 0.43

const myIndexOf = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return console.log(i);
    }
  }
  return console.log(-1);
};

myIndexOf([1, 2, 3, 4], 4); //=> 3
myIndexOf([5, 6, 7, 8], 2); //=> -1

const factorArray = (array, number) => {
  returnArr = [];
  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      returnArr.push(array[i]);
    }
  }
  console.log(returnArr);
};
factorArray([2, 3, 4, 5, 6], 20); //=> [2,4,5]
factorArray([2, 3, 4, 5, 6], 35); //=> [5]
factorArray([10, 15, 20, 25], 5); //=> []
