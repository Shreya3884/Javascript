// const coding=["java","ruby","python"]
// const values=coding.forEach((item)=>{
//     console.log(items);
//     return item;
// })
// console.log(values) //undefined

const mynum=[9,7,8,6,5]
// const val=mynum.filter((num)=>num>4)
// console.log(val)

// const newnum=mynum.filter((num)=>{
//     return num>4
// })
// console.log(newnum)
// forEach()

// 👉 Purpose: Do something for each element
// 👉 Return value: undefined
// 👉 Use when: You want side effects (log, update UI, push to another array)

// const nums = [1, 2, 3, 4];

// nums.forEach(n => {
//   console.log(n * 2);
// });
// ❌ Cannot return a new array
// ❌ Cannot stop early (break doesn’t work)

// 🔹 filter()

// 👉 Purpose: Select elements based on a condition
// 👉 Return value: new array
// 👉 Use when: You want a subset of data

// const nums = [1, 2, 3, 4];

// const evenNums = nums.filter(n => n % 2 === 0);

// console.log(evenNums); // [2, 4]


// ✅ Returns a new array
// ✅ Original array stays unchanged

// ❌ Using forEach when you need filter:

// // WRONG
// let evens = [];
// nums.forEach(n => {
//   if (n % 2 === 0) evens.push(n);
// });


// ✅ Better:

// const evens = nums.filter(n => n % 2 === 0);

// 🧠 One-line memory trick

// forEach = “do something”

// filter = “pick something”


//MAP METHOD
const mynum=[8,9,0]
const newnum=mynum.map((num)=>{return num+10})
console.log(newnum)  //[18,19,10]

forEach()

👉 Purpose: Do something with each item
👉 Return value: undefined
👉 Use when: You want side effects (log, update DOM, mutate external variable)

const nums = [1, 2, 3];

nums.forEach(n => {
  console.log(n * 2);
});


❌ Does not return a new array
❌ Not chainable

🔹 map()

👉 Purpose: Transform each item
👉 Return value: new array
👉 Use when: You want a modified version of the array

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]


✅ Returns a new array
✅ Chainable (map().filter().reduce())