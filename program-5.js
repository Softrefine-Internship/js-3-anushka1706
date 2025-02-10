// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

function frequency(arr) {
  const countMap = {};

  arr.forEach((item) => {
    const key = item.employeeName.toLowerCase();
    countMap[key] = (countMap[key] || 0) + 1;
  });
  console.log(countMap);
  return Object.entries(countMap).map(([key, value]) => ({
    employeeName: key,
    occurrences: value,
  }));
}
const input = [
  { employeeName: "Ram", employeeId: 23 },
  { employeeName: "Shyam", employeeId: 24 },
  { employeeName: "Ram", employeeId: 21 },
  { employeeName: "ram", employeeId: 25 },
  { employeeName: "Kisan", employeeId: 22 },
  { employeeName: "Shyam", employeeId: 20 },
];

console.log(frequency(input));
