// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]

function changePropertyValue(arr, propertyName, propertyVal) {
  const [[id, val]] = Object.entries(propertyName);
  const [[name, name_val]] = Object.entries(propertyVal);
  for (let i = 0; i < arr.length; i++) {
    for (const key in arr[i]) {
      if (key === id && arr[i][key] === val && typeof name_val === "string") {
        console.log(name_val);
        arr[i][name] = name_val;
      }
    }
  }
  return arr;
}
const arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

console.log(
  changePropertyValue(arr, { employee_id: 3 }, { employee_name: "anushka" })
);
