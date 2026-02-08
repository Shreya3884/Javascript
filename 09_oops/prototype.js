let myname="shreya    "
console.log(myname.trim().length)
console.log(myname.truelength);


let myheros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPrower:function(){
        console.log(`spidy pwer is ${this.spiderman}`)
    }
}
Object.prototype.shreya=function(){
    console.log(`hitesh is present in all obj`)
}
heropower.shreya()
myheros.shreya()

// object ko power mili h toh woh inherit ho jaegi array,function,string


//inheritance-> aise app properties inherit kr skte h
const user={
    name:"shreya",
    email:"shreya@.com"

}

const teacher={
    makevideo:true
}

const teachingsupport={
    isavalable:false
}

const tasupport={
    makeassignment:"js assignment"
    __proto__:teachingsupport
}

teacher.__proto__=user


// modern syntax

Object.setPrototypeOf(teachingsupport,teacher);

let anotherusername="chaiaurcode    "
String.prototype.truelength=function(){
    console.log(`${this}`) // current context
    console.log(`true length is :${this.trim().length}`)
}
anotherusername.truelength()
"shreya".truelength()
"icetea".truelength()
