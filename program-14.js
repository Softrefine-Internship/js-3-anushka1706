// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function countFrequency(str) {
  const result = {};
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    result[strArr[i]] = (result[strArr[i]] || 0) + 1;
  }
  return result;
}

console.log(countFrequency("hello"));
