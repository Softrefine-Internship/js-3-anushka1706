// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }
function groupProperty(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const name = arr[i]["name"];
    const id = arr[i]["id"];

    if (result[name]) {
      result[name].push(id);
    } else {
      result[name] = [id];
    }
  }

  return result;
}

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

console.log(groupProperty(arr));
