const isStopWord = (word, stopWords) => {
  if (word === stopWords) {
    return true;
  }
  return false;
};

const removePunctuation = (word) => {
  let punctuation = [";", "!", ".", "?", ",", "-"];
  let splitWord = word.split("");
  for (let i = 0; i < splitWord.length; i++) {
    if (punctuation.includes(splitWord[i])) {
      splitWord = splitWord.slice(0, -1);
    }
  }
  return splitWord.join("").toLowerCase();
};

console.log(isStopWord(removePunctuation("WOrD;"), "word"));
