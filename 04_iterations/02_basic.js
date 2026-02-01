// while(condition){
//     //statements
// }

let index=0;
while(index<=10){
    console.log(`value of index is ${index}`);
    index=index+2;
}

let myarr=["shreya","jain","suhani"]
let arr=0;
while(arr<myarr.length){
    console.log(`value is ${myarr[arr]}`)
    arr=arr+1
}


/// do while loop-> condition phle check hogi and then loop chlega
let score=11;
do{
   console.log(`${score}`)
   score++;
}while(score<=10) //difference h ki ek bar toh loop chlega 

const strr=["shreya",'jain',"suhani"]
for(const str of strr){
    console.log(str);
}

const greeting="hello world"
for(const greet of greeting){
    console.log(greet)
}

//MAPS-> object ki trh store hote h and store key value pairs and hr ek key unique hoti h

// const map=new Map()
// map.set("in","india")
// map.set("usa","united state of america")
// console.log(map);


// for(const [key,value] of map){
//     console.log(key,"->",value);
// }
// in -> india
// usa -> united state of america



const myobj={
    "game1":"nfs",
    "game2":"shu"
}
// for(const [key,value] of myobj){
//     console.log(key,"->",value);
// }

// //obj is not iterable by for of loop

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for(const key in obj){
    console.log(key);
    console.log(`${key} the value is ${obj[key]}`)
}

const pro=["js","ruby","java"]
for(const key in pro){
    console.log(pro[key])
}