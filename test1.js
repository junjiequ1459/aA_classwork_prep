let str = "race car";

str = str.replace(/\s/g, "");

const isPalindrome = (str) => {
  return str.split("").every((c, i) => c === str[str.length - 1 - i]);
};
