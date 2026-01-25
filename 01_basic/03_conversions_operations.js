let score="33abc"
console.log(typeof score);         //string
console.log(typeof (score));       //string
let valueInNumber=Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //Nan  in case of undefined the value is also nan
// in caseof true value will be 1
// in case of string value will be nan
// in case of false value will be 0


// ...........
let n=null;
console.log(typeof n);        //object
let m=Number(n);
console.log(m);         //0
console.log(typeof m);   //number
// empty is converted into false
// "shreya" converted into true
