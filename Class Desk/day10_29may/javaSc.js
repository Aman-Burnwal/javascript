// function number(num1, num2){
//     return num1 + num2;
// }

// function isgreaterThan(num){
//     if(num> 100){
//         return "greater";
//     } else{
//         return "lower";
//     }
// }


// var sum = number(12, 56);

// console.log(isgreaterThan(sum));


// sum = number(45, 98);
// console.log(isgreaterThan(sum));







// var a = function(){
//     console.log("aman");

// }
// a();


// var a = 5;

// function num(){
//     return a = 6;
// }

// console.log(a);


// var a = 24;



// Number.isInteger(Math.pow(a, 0.5)) ? console.log("square") : console.log("not");






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


if( orignalNumber === reverse){
    console.log("palindrom");
} 