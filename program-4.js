// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

function findProp(arr, key, value) {
  let index;
  for (let i = 0; i < arrayObj.length; i++) {
    for (const prop in arrayObj[i]) {
      if (prop === key && arrayObj[i][prop] === value) {
        index = i;
      }
    }
  }
  return index || "index not found";
}

const arrayObj = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
  },
];

console.log(findProp(arrayObj, "prop_1", "val_4"));
