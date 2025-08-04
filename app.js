// practicemocks223@gmail.com || rdev67891@gmail.com

// task 1
// let str = "Hello, World!";
// let rStrWord = str.split(" ").reverse().join(" ");
// let rStrLetters = rStrWord.split("").reverse().join("");

// console.log(rStrLetters);
// let str = "pop";
// const isPalindrome = (str) => {
//   let rStr = str.split("").reverse().join("");
//   rStr === str
//     ? console.log(str + " is a palindrome")
//     : console.log(str + " is not a palindrome");
// };

// isPalindrome(str);
// isPalindrome("str");

let arr1 = [100, 200, 300];
let arr2 = [100, 200, 300];
let arr3 = [100, 200, 200];
function isEqual(arr1, arr2) {
  JSON.stringify(arr1) === JSON.stringify(arr2)
    ? console.log("Arrays are equal")
    : console.log("Arrays are not equal");
}

isEqual(arr1, arr2); // Arrays are equal
isEqual(arr1, arr2); // Arrays are not equal
