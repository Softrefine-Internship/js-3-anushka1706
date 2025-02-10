// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

// const maxStr = (arr) => {
//   let max = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max.length) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
const maxString = (arr) => {
  return arr.reduce((max, e) => (e.length > max.length ? e : max), "");
};
const arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
console.log(maxString(arr));
// console.log(maxStr(arr));
