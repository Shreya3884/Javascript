//arrays
const array=[0,1,2,3,4]; //elements can be of any data type
console.log(array[2]) //2

//array make shallow copy means referencing to one point change in one array lead to change in another arary

const myarr=new Array(2,2,3,4);
console.log(myarr)
console.log(typeof myarr) //object

// ARRAY MATHODS
myarr.push(6) //add element at last
console.log(myarr)

myarr.pop() //remove last elemnt

myarr.unshift(0) //add elemnt at start
console.log(myarr)

myarr.shift() //remove first element
console.log(myarr)

console.log(myarr.length) //length of array
console.log(myarr.includes(8)) //true or false based on the arary
console.log(myarr.indexOf(3)) //index of element if not present return -1

const newarr=myarr.join()
console.log(myarr); // simple array
console.log(newarr); //string k format m

//SLICE AND SPLICE
const n1=myarr.slice(1,3)
console.log(n1) //2,3 (3rd index is not included)
console.log(myarr) //original arary remains same

console.log(myarr.splice(1,3))  
console.log(myarr) //riginal arary changes(1 se 3 tk k index elements remove ho ajega)


