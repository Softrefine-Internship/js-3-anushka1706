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
  let maxLength = 0;
  let maxWords = [];

  for (const word of arr) {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxWords = [word];
    } else if (word.length === maxLength) {
      maxWords.push(word);
    }
  }
  return maxWords.join(" ");
};

const arr = ["JavaScript", "Pythonllll", "Java", "C++", "Ruby", "Swift"];
console.log(maxString(arr));

// console.log(maxStr(arr));
