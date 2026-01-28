const myarr=["shreya","shivam","janu","suhani"];
const myarr2=["shreya","jahnvi","suhani","sunny"];
myarr.push(myarr2)
console.log(myarr) //arary k andr array aa gya h
console.log(myarr[4][1]) //jahnvi

m=myarr.concat(myarr2)
console.log(m) //new array bna dega dono ararys ko jod k

const n=[...myarr,...myarr2]
console.log(n) //new array bna dega dono ko jod k
//spread operator (...) jo aray h uske elements ko alg alg dal dega


const anotherarry=[1,2,3,4,5,6,7,[9,7],[8,6]];
const real_another_array=anotherarry.flat(2) 
console.log(real_another_array) //jitni bhi values hh unko single arary m la dega

Array.isArray("shreya") //false
console.log(Array.from("shreya")) //['s','h','r','e','y','a']  string ko array m convert kr dega

let q=myarr.indexOf("suhani")
console.log(q) //3  index of suhani

// console.log(Array.from({name:"shreya"})) {} //[]  object ko array m convert ni kr skta}
  

let score1=9;
let score2=9;
let score3=4;
console.log(Array.of(score1,score2,score3)) //[9,9,4]  array of method jo values di h unko array m convert kr dega

