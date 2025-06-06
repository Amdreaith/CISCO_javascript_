/* 
Unary arithmetic operators



There are also several unary arithmetic operators 
(operating on a single operand). Among them there are the plus
 + and minus - operators.

Both operators convert operands to the Number type,
 while the minus operator additionally negates it.
*/

let str = "123";
let n1 = +str; // converts string to number
let n2 = -str;
let n3 = -n2;
let n4 = +"abcde"

console.log(`${str} : ${typeof str}`);
console.log(`${n1} : ${typeof n1}`);
console.log(`${n2} : ${typeof n2}`);
console.log(`${n3} : ${typeof n3}`);
console.log(`${n4} : ${typeof n4}`); // NaN