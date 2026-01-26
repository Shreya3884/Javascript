let str1="shreya";
let str2="jain";
let str3=str1+str2;
console.log(str3); //shreyajain
console.log(typeof str3); //string

const name="shreya";
const repocount=5;
console.log(`my name is ${name} and my repocount is ${repocount}`);
// BY BACKTICKS U CAN DROP VARAIBLES DIRECTLY IN STRING 

// string Declaration

const gameName= new String("chess jain");
console.log(gameName); // [String: 'chess']
console.log(typeof gameName); //object
console.log(gameName.toUpperCase()); //CHESS

// Escape sequence characters
const str4="shre\'ya"; //shre'ya
console.log(str4);
const str5="shre\"ya"; //shre"ya

console.log(gameName.length); //5
console.log(gameName[4]);  //s
console.log(gameName.charAt(4)) //s
console.log(gameName.indexOf('e')); //2
console.log(gameName.lastIndexOf('s')); //4
console.log(gameName.includes('ch')); //true
console.log(gameName.startsWith('ch')); //true
console.log(gameName.endsWith('ss')); //true
console.log(gameName.toUpperCase()); //CHESS
console.log(gameName.toLowerCase()); //chess
console.log(gameName.trim()); //chess jain // no space in starting nad ending bich m ho skta h
console.log(gameName.split('')); // [ 'c', 'h', 'e', 's', 's', ' ', 'j', 'a', 'i', 'n' ]
console.log(gameName.replace('chess','carrom')); //carrom jain
console.log(gameName.slice(0,5)); //chess // ek part nikal k deta h and last value is not included original m change nhi krta h
console.log(gameName.slice(6)); //jain
// slice m negative index dene p last se reverse krke deta h

console.log(gameName.substring(0,5)); //chess  // 5 is not included // ignore negative value and start with 0
console.log(gameName.substring(6)); //jain // 6 se lekr end tk ka hisa
console.log(gameName.valueOf()); //chess jain //actual value nikal k deta h
console.log(gameName.concat(" is a fun game")); //chess jain is a fun game
console.log(gameName.trimStart()); //aage k space ko hta dega
console.log(gameName.trimEnd()); //end k space ko hta dega



