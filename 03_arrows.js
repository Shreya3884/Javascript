

// const user = {
//   username: "shreya",
//   price: 99,
//   welcomemessg: function () {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);
//   }
// };
// user.welcomemessg()
// user.username="shreya"
// user.welcomemessg()
// console.log(this) //empty object dega

// agr yhi hum browserm kre toh window object dega


// function chai(){
//     console.log(this); //chl jaega
// }
// chai()

// const chai =function(){
//     let username="shreya"
//     console.log(this); //chl jaega
//     console.log(this.username); //undefined
// }
// chai()

// function chai(){
//     let username="shreya"
//     console.log(this.username); //undefined
// }
// chai()

//this jo h object m hi kam krta h aise function m kam nhi krta

// //////////////ARROWS FUNCTION////////


// const chaim=()=>{
//     let username="shreya"
//     console.log(this.username) //undefined
//     console.log(this)    //empty object

// }
// chaim()

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addtwo(8,7)) //15

//implicit return

// const addtwo=(num1,num2)=>num1+num2
// console.log(addtwo(9,8))

// const addtwo=(num1,num2)=>(num1+num2)
// console.log(addtwo(8,9)) 

const addtwo=(num1,num2)=>({
    username:"shreya"
}
)
console.log(addtwo(7,8)) //undefined for output parenthesis m wrap kre

const myarr=[9,0,8];
myarr.forEach()