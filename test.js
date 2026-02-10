const arr=[]
%DebugPrint(myarr)
// continous,holey
// SMI(small integer)
// Packed element
// Double(float,string,function)

const arr2=[1,3,2,4,5]
// PACKED_SMI_ELEMENT
arr2.push(6.0)  //pACKED_dOUBLEeLEMNT

arr2.push(7) // packed element

arr2[10]=11 // Holey elements->because it has now multipletype of elements'..otimizationis also differet

console.log(arr2)
console.log.og(arr2.length) //11
console.log(arrTwo[9]) // undefined

// bound check
// hasOwnProperty(arr2,9)
// hasOwnProperty(arrTwo.prototype,9
// hasOwnProperty(Object.prototype,10)
// holes are very expemsive
const arr3=[1,2,3,4,5]
console.log(arr3[2])
// SMI>Double>NormalPacked
//holes_smi>holes_double_hole_packed
 
const arr4=new Array(3)
// just 3 hoels_smi_elements
arr4[0]="1" // holey_packed_elements
arr4[1]="8"
arr[2]="6"

const arr5=[] // more optimization than new array

arr5.push("1") // it is packed now 


const arr6=[1,2,3,4,5]
arr6.push(NaN)
arr6.push(Infinity) // packed double

// for loop and for of loop and for each loop
// internal bydefault method ko use kro 


