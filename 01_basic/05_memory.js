const { useInsertionEffect } = require("react");

//stack (primitive) and heap(non primitive )  //only copy bnti h original value m koi change nhi aata h
let myYoutubeChannel="codewithharry"; // stored in stack
let anotherYoutubeChannel=myYoutubeChannel;
anotheryoutubecahnnel="shreya"
console.log(myYoutubeChannel); //codewithharry
console.log(anotherYoutubeChannel); //shreya

// non primitive datatypes  //refernces point hote h original change ho jata h
let ucerone={
    name:"shreyaa"
}

let usertwo=ucerone;
usertwo.name="harry"
console.log(ucerone.name); //harry
console.log(usertwo.name); //harry

