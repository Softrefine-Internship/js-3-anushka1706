// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }
function flattenObj(obj) {
  const result = {};

  Object.entries(obj).forEach(([key, val]) => {
    if (typeof val === "object" && val !== null) {
      const flattened = flattenObj(val);
      Object.entries(flattened).forEach(([childKey, childVal]) => {
        result[`${key}.${childKey}`] = childVal;
      });
    } else {
      result[key] = val;
    }
  });

  return result;
}
const obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: "+91-999999999",
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: ["GFG", "ghj"],
  },
};

console.log(flattenObj(obj));
