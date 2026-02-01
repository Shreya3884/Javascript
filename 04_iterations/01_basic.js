//for
// for(let i=0;i<10;i++){
//     const element=i;
//     if(element==5){
//         console.log(element);
//     }
//     console.log(element);
// }

// // console.log(element) //bhr accessible nhi h

// for(let i=0;i<10;i++){
//     console.log(`outer value :${i}`);
//     for(let j=0;j<10;j++){
//     console.log(`inner loopvalue is ${j} and outer loop value is ${i}`)

//     }

// }

//Break and continue

// for(let i=0;i<=20;i++){                 
//     if(i==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`inner value is ${i}`)
// }
// //output
// inner value is 0
// inner value is 1
// inner value is 2
// inner value is 3
// inner value is 4
// detected 5


for(let i=0;i<=20;i++){                 
    if(i==5){
        console.log(`detected 5`);   //that condition is skipped
        continue;
    }
    console.log(`inner value is ${i}`)
}

