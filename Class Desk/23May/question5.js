// Create a program to reverse a string.
// Solution –
// Traverse the input string from last index and add each character to a new string. Print the new
// reversed string.

let str = "Aman";
let length = str.length -1;
let reverse = ""
for(let i = length; i >= 0; i--){
    reverse += str[i]
}
console.log(str);
console.log(reverse);
