// Immediately Invoked Function Expressions(iffe)

// (unction chai(){
//     console.log("db connected")
// })
// chai();

// //

(function chai(){  //named iife
    console.log("shreya jain");
})();

(()=>{     //unamed iife
    console.log("shivam");
})();

((name)=>{
    console.log(`Db connected ${name}`)
})("shreya")

