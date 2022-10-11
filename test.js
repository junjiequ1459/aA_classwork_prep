function collapse(str) {
  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i + 1]) {
      splitStr.splice(i, 2);
    }
  }
  return splitStr.join("");
}

function sameCharCollapse(str) {
  let returnStr = str;
  for (let i = 0; i < returnStr.length - 1; i++) {
    if (returnStr[i] === returnStr[i + 1]) {
      returnStr = collapse(returnStr);
      i = 0;
    }
  }
  return returnStr;
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
