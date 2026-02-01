// function sayMyNAme(){
//     console.log("My name is shreya");
// }

// sayMyNAme();


// function addTwoNumber(num1,num2){ //functiond efinition k time jo likhte h these are paarmetrers
//     console.log(num1+num2);
// }

// // addTwoNumber(4,5) // argument is 4,5 

// const result=addTwoNumber(9,8);
// console.log(result);    //result k andr value undefined hoti h
//kyuki function n return nhi kiya h

// function addTwoNumber(num1,num2){
//     // let result=num1=num2;
//     // return result;
//     return num1+num2;
// }

// let result=addTwoNumber(8,9)
// console.log(result);
//  function addTwoNumber(num1, num2) {
//   return num1 + num2;
// }

// let result = addTwoNumber(8, 9);
// console.log(result);

// function loginusermessg(username="sam"){  //default value
//     if(username===undefined){       // if(!username){}
//         console.log("please enter username");
//         return;
//     }
//     return `${username}just logged in`
// }

// let m=loginusermessg("shreya")  //if no value is passed undefined is the ans
// console.log(m)


// function calculatecartPrice(...num1){
//     return num1;
// }
// console.log(calculatecartPrice(6,77,88)) //[6,77,88]

// function name(val1,val2,...num1){
//     return num1;
// }

// console.log(name(88,99,67,99))  //[67,99]

const user={
    useranme:"shreya",
    price:88
}

function handleuser(anyobject){
    console.log(`any:name is${anyobject.useranme} and price is${anyobject.price}`);

}

handleuser(user)

const arr=[99,88,78]
function returnSecondArr(getarr){
    return getarr[1]
}

console.log(returnSecondArr(arr));