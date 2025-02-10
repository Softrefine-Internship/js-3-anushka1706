// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

const arrToObj = (arr) => {
  const newObject = {};
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const [key, value] = arr[i];
      newObject[key] = value;
    }
  }
  return newObject;
};

const input = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];

console.log(arrToObj(input));
