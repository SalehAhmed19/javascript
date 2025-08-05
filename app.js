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

// let arr1 = [100, 200, 300];
// let arr2 = [100, 200, 300];
// let arr3 = [100, 200, 200];
// function isEqual(arr1, arr2) {
//   JSON.stringify(arr1) === JSON.stringify(arr2)
//     ? console.log("Arrays are equal")
//     : console.log("Arrays are not equal");
// }

// isEqual(arr1, arr2); // Arrays are equal
// isEqual(arr1, arr2); // Arrays are not equal

// console.log(null == undefined); // true
// console.log(null === undefined); // false

/**
 * The statement console.log(null == undefined); evaluates to true because of how JavaScript's == (loose equality) operator works.
 *
 * Loose Equality (==): This operator performs type coercion before comparing the values. If the operands are of different types, JavaScript attempts to convert one or both operands to a common type before making the comparison.
 *
 * Strict Equality (===): This operator compares both the value and the type without any type coercion. If the operands are of different types, it will always return false.
 */
let a; // initialized but not assigned a value is undefined
let b = null; // explicitly assigned a null value
console.log(a);
/**
 * undefined means a variable has been declared but has not yet been assigned a value. It also signifies the absence of a value for function parameters that weren't provided, or properties that don't exist on an object.
 *
 * When you'll see undefined:
 * Declared variable, no assignment
 * Missing function arguments
 * Non-existent object properties:
 * Function return value (implicitly): If a function doesn't explicitly return anything, it implicitly returns undefined.
 */

/**
 * null means the intentional absence of any object value. It's a primitive value that represents a deliberate non-value. You explicitly assign null to a variable to indicate that it currently holds no meaningful object.
 *
 * When you'll see null:
 * Explicit assignment: You assign null yourself to indicate "no value."
 * DOM elements not found: When you try to select a DOM element that doesn't exist.
 */
