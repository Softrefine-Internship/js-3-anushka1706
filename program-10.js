// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

function longestWord(str) {
  const strArray = str.split(" ");
  let maxLength = 0;
  let maxWord = "";

  for (const word of strArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxWord = word;
    } else if (word.length === maxLength) {
      maxWord += " " + word;
    }
  }

  return maxWord;
}

const input = "This is a demo Strings find the largest word from it";
console.log(longestWord(input));
