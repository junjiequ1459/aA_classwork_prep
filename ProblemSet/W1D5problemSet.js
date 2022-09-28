const isInside = (array, ele) => {
  if (array.indexOf(ele) != -1) {
    return console.log(true);
  }
  return console.log(false);
};

isInside(["chase", "phi", "eliot"], "eliot"); // => true
isInside(["chase", "phi", "eliot"], "fred"); // => false

const reverseStr = (str) => {
  let returnStr = "";
  for (let i = 0; i < str.length; i++) {
    returnStr = str[i] + returnStr;
  }
  return console.log(returnStr);
};
reverseStr("bootcamp"); //=> 'pmactoob'
reverseStr("App Academy"); //=> 'ymedacA ppA'

const luckySevens = (max) => {
  let returnList = [];
  for (let i = 1; i <= max; i++) {
    if (i % 7 === 0) {
      returnList.push(i);
    }
  }
  return console.log(returnList);
};
luckySevens(25); // => [ 7, 14, 21 ]
luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

const copyMachine = (ele, num) => {
  let returnArr = [];
  for (let i = 1; i <= num; i++) {
    returnArr.push(ele);
  }
  return console.log(returnArr);
};

copyMachine("candy", 0); // => []
copyMachine("candy", 2); // => [ 'candy', 'candy' ]
copyMachine("bread", 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

const everyOtherWord = (sentence) => {
  let returnArr = [];
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i += 2) {
    returnArr.push(splitSentence[i]);
  }
  console.log(returnArr);
};
everyOtherWord("hello how are you doing on this lovely day?"); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
everyOtherWord("the weather is wonderful"); // => [ 'the', 'is' ]

const wordYeller = (sentence) => {
  let returnStr = "";
  let punct = [".", ",", "!", "?", ";", ":"];
  let splitStr = sentence.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    if (/[^A-Za-z]/.test(splitStr[i])) {
      returnStr += `${splitStr[i]} `;
    } else {
      returnStr += `${splitStr[i]}! `;
    }
  }
  console.log(returnStr);
};

var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
