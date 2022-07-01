let num = 121;

let reverse = 0; 
let remainder;
let orignalNumber = num;

while(num != 0){
    remainder = num % 10;
    reverse = reverse * 10 + remainder;

    num = Math.floor(num / 10);
}
console.log(reverse);