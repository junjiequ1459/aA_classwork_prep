<h1 align="center">Helper Functions 101</h1>

### What is a helper function?
  * A helper function is a function that we use within another function
  * Helper functions perform part of the computation of another function

### Why use helper functions?
  * Modularize code; Break down complex code into smaller chunks
  * Easier to read
  * Easier to debug
  * Helps us stay DRY - Reuseable!
    * Writing repetitive logic can increase the chance of errors - syntax errors or typos

### When to use helper function?
* When more complex logic within another function or loop is needed to get a certain output
  * Abstraction - hides complexity and show what's relevant
* Extract repetitive code into a separate function
  * Follow DRY (Do not Repeat Yourself) Principle!

<br><br>

##### `Abstraction`
```js
// 1. no helper function
function abbreviate(sentence) {
  const words = sentence.split(" ");
  const abbreviated = [];
  const vowels = "aeiou";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 4) {
      let newWord = "";

      for (let j = 0; j < word.length; j++) {                   // more complex logic to turn "bootcamp" => "btcmp"
        const char = word[j];                                   // should be extracted to helper function

        if (vowels.indexOf(char.toLowerCase()) === -1) {
          newWord += char;
        }
      }

      abbreviated.push(newWord);
    } else {
      abbreviated.push(word);
    }
  }

  return abbreviated.join(" ");
}


// 2. with helper function - easier to read and debug
function removeVowels(word) {
  const vowels = "aeiou";
  let noVowels = "";

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (vowels.indexOf(char.toLowerCase()) === -1) {
      noVowels += char;
    }
  }

  return noVowels;
}

function abbreviate(sentence) {
  const words = sentence.split(" ");
  const abbreviated = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 4) {
      abbreviated.push(removeVowels(word));                     // much easier to read!
    } else {
      abbreviated.push(word);
    }
  }

  return abbreviated.join(" ");
}
```

<br><br>

##### `Staying DRY`

```js
formatTimeStr(2, 24, 46);                                       // "02:24:46"
formatTimeStr(0, 0, 4);                                         // "00:00:04"


// 1. no helper function
function formatTimeStr(hr, min, sec) {
  let formattedHr = String(hr);                                 // "8"
  let formattedMin = String(min);                               // "10"
  let formattedSec = String(sec);                               // "34

  if (hr < 10) {
    formattedHr = "0" + formattedHr;                            // "08"
  }

  if (min < 10) {                                               // repetitive logic, same code to check
    formattedMin = "0" + formattedMin;                          // if hr, min, sec are single-digit
  }

  if (sec < 10) {
    formattedSec = "0" + formattedSec;
  }

  return formattedHr + ":" + formattedMin + ":" + formattedSec;
}


// 2. using helper function
function formatTime(time) {                                     // create helper function and reuse it 3x
  if (time < 10) {                                              // to format hr, min and sec
    return "0" + String(time);
  } else {
    return String(time);
  }
}

function formatTimeStr(hr, min, sec) {
  const formattedHr = formatTime(hr);                           // re-use helper function instead of
  const formattedMin = formatTime(min);                         // writing repetitive conditions
  const formattedSec = formatTime(sec);

  return formattedHr + ":" + formattedMin + ":" + formattedSec;
}
```

<br><br>

### When are Helper Functions Not Necessary
* Simple logic or code is only a few lines

```js
function isEven(num) {
  return num % 2 === 0;
}

function evenSum(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {                                      // helper function can be used
      sum += nums[i];                                           // but the code to determine if a number
    }                                                           // is even is just one line: i % 2 === 0
  }

  return sum;
}

evenSum([10, 11, 12, 13]);                                      // 22
```
