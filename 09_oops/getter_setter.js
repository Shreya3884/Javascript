class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return `${this._email}`
    }
    set email(value){
         this._email=value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh` //abchitesh
    }
    set password(value){
       this._password=value
    }

}
const hitesh=new user("shreya@gmil.com","abc")
console.log(hitesh.email)
console.log(hitesh.password)

// getter and setters->


