// OBJECT-> Collection Of Properties and methods

// constructor
// prototype
// instances ->new and this


// 4 pillars of oops

// 1. abstraction->details hide
// 2.encapsulation->wrap kr diya jo access krna chahhte ho toh kro and jo nhi kfna chate ho woh mtt kro
// 3.Inheritance->properties inherit krna parent ki
// 4.Polymirphism->ek hi method itne kam kr deta h

const user={
    username:"shreya",
    logincount:8,
    signedin:true,
    getUserdetails:function(){
        console.log("got user details from database")
    }
}

console.log(user.username)
console.log(user.getUserdetails())

// const promiseone=new Promise()
// const date=new date()-> constructor ka mtlb h ek hi object se multiple instances bana skte ho

function User(username,logincount,isloggedin){
   this.username=username
   this.logincount=logincount;
   this.isloggedin=isloggedin;
//    return this;->implicitly defined hota h
     this.greeting:function(){
        console.log(`welcome ${this.username}`)
     }
}

const userone=new User("shreya",88,true);
const usertwo=new User("jahnvi",88,false);
console.log(userone)
console.log(usertwo)

// new se value overwrite nhi hoti h

