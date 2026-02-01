// let a=10;
// const b=20;
// var c=30; //

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="shreya"
    function two(){
        const website="youtube"
        console.log(username);


    }
    // console.log(website); //error
    // two()     //shreya
    // console.log(username) //shreya
}

one()   //no output


// nested function jb hote h toh chaild function parent k value ko access kr pate h
// 
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
//   console.log(x);
}
 // this is closure
const fn = outer();
fn(); // 10 



// if(true){
//     const username="shreya"
//     if(username==="shreya"){
//         const website="youtube"
//         console.log(username+website);
//     }
//     console.log(website); //not access
// }
// console.log(username); //not access
//console.log(addone(5)) //no error
// function addone(num){
//     return num+1
// }


console.log(addtwo(5))  //error
const addtwo=function(num){
    return num+2;
}

