//dates

let mydate=new Date();
console.log(mydate) //current date and time

console.log(mydate.toString())
console.log(typeof mydate) //object
console.log(mydate.toDateString()) //Sat Jun 01 2024

let mycreateddate=new Date("01-14-2023");

let mytimestamp=Date.now()
console.log(mytimestamp) //1685624324861
console.log(Math.floor(Date.now()/1000)) //to convert in second and avoiding decimal point

// newDate.toLocaleString("default",{
// weekday:"long"
// })