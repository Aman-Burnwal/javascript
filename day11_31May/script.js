// function myfunction(a){

//     // if(a > 0)
//     //     var c = parseFloat(a)
//     return parseInt(a);
// }


// // console.log(myfunction(10));

// var a = 30;

// if(a == parseInt){
//     console.log(true)
// }else{
//     console.log(false);
// }





// function newFucntion(a){
//     c = Math.round(a, 2);

//     return c;
// }

// var d = newFucntion(1043.4534);

// console.log(d);






var num = 10;
var a = true;
for(let i = 2; i <= num; i++){
    if(num % i === 0){
        a = false;
        break;
    }

}
console.log(a);
while(a != true){
    num++
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            a = false;
            break;
        } else {
            a = true;
        }
    }
    i = 0;
    console.log(a)
}

console.log(num);