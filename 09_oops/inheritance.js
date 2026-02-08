class User{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`username is${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@gamil.com","123")
chai.addCourse()

const masalachai=new User("masalachai")
// masalachai.addCourse() // not access
masalachai.logme()
chai.logme();
console.log(chai instanceof Teacher)  //true
console.log(chai instanceof User) // true

