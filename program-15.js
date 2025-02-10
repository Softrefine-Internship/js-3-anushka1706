// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function checkSubset(set1, set2) {
  let isSubset = true;

  set1.forEach((element) => {
    if (!set2.has(element)) {
      isSubset = false;
    }
  });

  return isSubset;
}
let set1 = new Set([1, 2, 4, 5]);
let set2 = new Set([3, 4]);
let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);
let set5 = new Set([3, 4, "anushka"]);
console.log(checkSubset(set1, set2));
console.log(checkSubset(set3, set4));
console.log(checkSubset(new Set(), set4));
console.log(checkSubset(set5, set4));
