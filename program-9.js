// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function combinations(str) {
  const allCombinations = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      allCombinations.push(str.toLowerCase().slice(i, j));
    }
  }

  return allCombinations;
}
const str = "Dogs";
console.log(combinations(str));
