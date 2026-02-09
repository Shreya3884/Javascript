const user={
    _email:"h@hc.com",
    _password:"abc",

    get email(){
       return this._email.toUpperCase()
    },
    set email(value){ //email is just a property email and _email is same
       this._email=value   
    }
}

const tea=Object.create(user)
console.log(tea._password)
console.log(tea.email)

