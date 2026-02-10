// Closure
// -> a closure is the combination of a function bundled together with referernces to its surrounding sate ...
// in other words -> it gives you the access to teh outer function from an inner function at the creation time

// Lexical Scoping->
// function init(){
//     let name="shreya";
//     function displayname(){
//         console.log(name);
//     }
//     displayname();
// }
// init();

function outer(){
    let username="shreya"
    console.log(secret) // not defined
    function inner(){
        let secret="234"
        console.log("inner",username);
    }
    function inner2(){
        console.log("inenrtwo",username);
        console.log(secret) // not accessible
    }
    inner()
    inner2()


}
outer()
console.log(username) // not accessible 
// function k andr function if outer function m koi avriable h then woh inner function m bhi access ho ajega this is called lexical scoping
//  siblings apps m cahnge nhi krenge

function makeFunc(){
    const name="shreya"
    function dispalyname(){
        console.log(name);
    }
    return displayname;
}
const myfunc=makeFunc();
myfunc();
// closure-> jb app ek function hi return krte ho tb function ka pura scope return hota h sirf fucntion return nhi hota h....pura lexical scope return hota h


// document.getElementById("orange").onclick=function(){
document.body.style.backgroundColor:"orange"}


function clickHandle(color){
    return function(){
        document.body.style.backgroundColor=`${color}`
    }
}

document.getElemntById("orange").onclick=clickHandle("orange")

