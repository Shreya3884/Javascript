// higher order array
// const coding=["is","ruby","java"]
// coding.forEach(function (val){
//     console.log(val)

// })  // iterations over arary and objects


// coding.forEach((item)=>{
//      console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

const mycoding=[
    {
        languagename:"java"
    },
    {
        languagename:"python"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languagename)
})