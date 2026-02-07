//Promises

// it basically means ki aapmne jo task diay h woh queue m toh lg gay h but abhi compleete nhi hoga
//Promise ek object hota hai jo future me kisi async ka result represent karta hai.
// Result ya to:

// resolve (success) hoga

// ya reject (error) hoga

// The promise object represents the eventual completion or failure of an asynchronous operation and its resultng Value

//promises has three states
// 1. pending
// 2.fulfilled 
// 3.rejected

const promiseone=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is completed",1000);
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("shreya jain async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"shreya",
            email:"shreya@com"
        })

    },1000)
})

promisethree.then(function(user){
    console.log(user)

})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
         let error=true
         if(!error){
            resolve({username:"shreya",password:90})
         }else{
            reject("error something went wrong")
         }
    },1000)
})

promisefour
.then((user)=>{        
   console.log(user);
   return user.username    //chaining
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("the promise is either resoleved ad rejected")
}) //the callback to execute when the promise actually resolved or rejected


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=true
    if(!errror){
        resolve({username:"shreya",password:"90"})
    }else{
        reject("error js went wrong")
    }
    },1000)
})
//async wait krta h kam k hone ka complete hota h tbhi woh aage bdta hotehrwise whi p eror show krta h
async function consumepromisefive(){
    try{
        const response=await promisefive 
        console.log(response);
    }catch(error){
      console.log(error)
    }
}
consumepromisefive()


async function getallUsers(){
     try{const response= await fetch("")
    const data= response.json()
    console.log(data);
     }
     catch(error){
        console.log("error");
     }
}

getallUsers()


// fetch api

// node js m browser nhi h 

// teh xmlhttp request became so difficult callback hells ko handle kran difficult h and asssynchrom=nous task ko perform krna difficult h

// fetch api-> teh global fetch() method starts the process of fetching a resource from a network ,returning a promise which is fullfilled once the response is available 

// promise se request kri and appko error aa gya 404 woh kha milega...->as a response milega and error us case m aaega jis case m request kr hi nhi paya h onfilled m hi count hot ah
// 
// const response=fetch("something")
// fetch->1. data-> onfilled[]
//                  onrejection[]

// 2.->web browser based api handle kr lega and or Node
// network request -> agr gyi toh onfilled m jaegi and agr nhi gyi toh onrejection m jaegi
// ek bar data fullfilled ho gya toh response ko fullfilled krega jo ki global memory m store h
