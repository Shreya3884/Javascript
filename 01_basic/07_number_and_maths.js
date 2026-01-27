const score=600
console.log(score);

const balance =new Number(1000);
console.log(balance); //[Number:1000]
console.log(typeof balance); //object
console.log(balance.toString().length) //4
console.log(balance.toFixed(2)); //1000.00


let num = 123.456;

console.log(num.toFixed(2));      // "123.46"
console.log(num.toPrecision(5));  // "123.46" ye output kaise aaaya
// both round krke data dete h and return type string hota h
// toFixed jo hota h wo decimal point k baad kitne digit chahiye wo btata h
// toPrecision total kitne digit chahiye wo btata h

const hundreds=100000;
console.log(hundreds.toLocaleString("en-IN")); //1,00,000


// Math
console.log(Math) //object
console.log(Math.pi); //3.141592653589793
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.round(4.4)) //4
console.log(Math.round(-4.6)) //-5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.8)) //4
console.log(Math.min(2,34,5,6,-9,0)) //-9   
console.log(Math.round(4.9)) //5
console.log(Math.max(2,34,5,6,-9,0)) //34
console.log(Math.random()) //0 to 0.999999
console.log(Math.random()*10) //0 to 9.99999

console.log(Math.floor(Math.random()*10)) //0 to 9
console.log(Math.floor(Math.random()*10)+1) //1 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) +min)