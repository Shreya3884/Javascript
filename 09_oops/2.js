// prototype->
// it is a mechanism that lets objects inherit properties and mathods from other objects

function multiple(num){
    return num*5
}
multiple.power=2
console.log(multiple(5))
console.log(multiple.power)
console.log(multiple.prototype)


// function->can be function and object

function createuser(username,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++; //this refers to current context
}

createuser.prototype.printMe=function(){
    console.log(`${this.score}`)
}

const chai=new createuser("shreya",98)
const tea=new createuser("chai",250)
chai.printMe()

//new keyword->

the new object is created.the new keyword initiates the craetion of a new javascript object.
