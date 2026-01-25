console.log("2">1); //true
console.log(null<0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(undefined==0);   //false
console.log(undefined>0);    //false
console.log(undefined>=0);  //false


//===
// value and their datatypes also checked
console.log("2"===2);  //false
console.log(null===undefined); //false
console.log(2=="2"); //true

const id= Symbol("123");
const anotherId=Symbol("123")
console.log(id===anotherId); //false
