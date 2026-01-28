// singleton

// literals ki trh bnate h toh singleton nhi Bnega
//constructor through object.create
// OBJECT LITERALS

// const user={
//     name:"shreya",
//     age:20,
//     // [mys1]:"mykey1value", //symbol as key
// }
// console.log(user.name)
// console.log(user["name"])

// const mys1=Symbol("key1")
// console.log(user.mys1)  //mykeyvalue
// console.log(user[mys1])

// user.name="shivamm"
// // Object.freeze(user) //freeze krne k baad object m kuch change ni kr skte


// user.greeting=function(){
//     console.log("hello js user")
// }
// console.log(user.greeting) //function anonymous

// console.log(user.greeting()) //hello js user undefined

// user.greeting2=functon(){
//     console.log(`hello my name is &{this.name}`)
// }
// console.log(user.greeting2())  //hello my name is shreya and undefined



// // singleton object
// // const student=new Object();

// // //Non singleton Object
// // const student={}

// const tinderuser={};
// tinderuser.id="678"
// tinderuser.name="shreya"
// tinderuser.isloggedin=false
// console.log(tinderuser)

const regularuser={
    email:"sommy@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shreya",
             lastname:"jain",
                    }
    }
}

console.log(regularuser.fullname.userfullname.firstname)
console.log(regularuser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3={obj1,obj2}
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//spread operator
const obj3={...obj1,...obj2}
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users={
    id:1,
    email:"shreya@gmail.com",
}

//console.log(Object.keys(tinderuser)) //['id','name','isloggedin']
// console.log(Object.values(tinderuser)) // [ 1, 'shreya',false]
// console.log(Object.entries(tinderuser)) // [ [ 'id', 1 ], [ 'name', 'shreya' ], [ 'isloggedin', false ] ]

console.log(tinderuser.hasOwnProperty("email")) //false
