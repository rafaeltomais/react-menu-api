// let arr = [
//   {
//     name: "John",
//     age: 30,
//     city: "New York",
//   },
//   {
//     name: "Peter",
//     age: 40,
//     city: "Paris",
//   },
// ];

// let arr2 = JSON.parse(JSON.stringify(arr));
// arr2.push({
//   name: "Rafael",
//   age: 26,
//   city: "Udão",
// });

// console.log(arr);
// console.log(arr2);

let arr = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Peter",
    age: 40,
    city: "Paris",
  },
];

let arr2 = [...arr];
  arr2.push({
    name: "Rafael",
    age: 26,
    city: "Udão",
  })


console.log(arr)
console.log(arr2);
