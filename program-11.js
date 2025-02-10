// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true
const checkAnagram = (originalStr, anagramStr) => {
  const cleanStr = (str) => {
    return str.toLowerCase().trim();
  };
  return (
    cleanStr(originalStr).split("").sort().join("") ===
    cleanStr(anagramStr).split("").sort().join("")
  );
};

// const anagram = (originalStr, anagramStr) => {
//   const cleanStr = (str) => str.toLowerCase().trim();

//   const getCharCount = (str) => {
//     let charCount = {};
//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
//   };

//   let str1 = cleanStr(originalStr);
//   let str2 = cleanStr(anagramStr);

//   if (str1.length !== str2.length) return false;

//   let charCount1 = getCharCount(str1);
//   let charCount2 = getCharCount(str2);

//   for (let char in charCount1) {
//     if (charCount1[char] !== charCount2[char]) {
//       return false;
//     }
//   }

//   return true;
// };

console.log(checkAnagram("evil", "vile"));
console.log(checkAnagram("a gentleman", "elegant man"));
console.log(checkAnagram("eleven plus two", "twelve plus one"));
// console.log(anagram("eleven plus two", "twelve plus one"));
