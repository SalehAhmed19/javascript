// task 1
// let str = "Hello, World!";
// let rStrWord = str.split(" ").reverse().join(" ");
// let rStrLetters = rStrWord.split("").reverse().join("");

// console.log(rStrLetters);
let str = "pop";
const isPalindrome = (str) => {
  let rStr = str.split("").reverse().join("");
  rStr === str
    ? console.log(str + " is a palindrome")
    : console.log(str + " is not a palindrome");
};

isPalindrome(str);
isPalindrome("str");
