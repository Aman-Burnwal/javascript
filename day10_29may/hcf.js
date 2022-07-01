
// var hcfIs;
// function hcf(num1, num2){

//     var bigNum;
//     var smallNum;
//     if(num1 > num2){
//         bigNum = num1;
//         smallNum = num2;
//     } else{
//         bigNum = num2;
//         smallNum = num1;
    
//     }

//     for(let i = 1; i < smallNum; i++){
//         if((bigNum % i == 0 )&& (smallNum % i == 0)){
            
//             return hcfIs = i;
//         }
//     }

    
    
// }
// hcf(25,15);
// console.log(hcfIs);


var num1 = 15;
var num2 = 25;

if(num1 > num2){
    bigNum = num1;
    smallNum = num2;
} else{
    bigNum = num2;
    smallNum = num1;

}

console.log(smallNum + " " +bigNum);
var hcfIs;

for(let i = 1; i < smallNum; i++){
    if((bigNum % i == 0 )&& (smallNum % i == 0)){
        
        hcfIs = i;
    }
}

console.log(hcfIs);