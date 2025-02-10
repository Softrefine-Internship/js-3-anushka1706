// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

const checkSameProperty = (obj1, obj2) => {
  for (const key in obj2) {
    if (!(key in obj1)) {
      return false;
    }
  }
  return true;
};

const obj1 = { name: "John", age: 0, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };
const obj3 = { name: "John", degree: "CS" };
const obj4 = { name: "Max", age: 23, degree: "CS" };
console.log(checkSameProperty(obj1, obj2));
console.log(checkSameProperty(obj3, obj4));
