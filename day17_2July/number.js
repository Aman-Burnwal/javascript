// function totalSub(num){
//     if(num === 0){
//         return;
//     }
//     var count = 0 
//     while(num > 0){

//         var gret = num % 10;
//         var tem = Math.floor(num / 10);
//         if(gret < tem){
//             gret = tem;
//         }
        
//         num = num - gret;
//         count += 1;
//     }
// }


let num = 27;
var subtotal = 0 
while(num >= 0){

    var gret = num % 10;  // 45 % 10 = 5
    var tem = Math.floor(num / 10); 
    if(gret < tem){
        gret = tem;
    }
    
    num = num - gret;
    // 27 = 27 - 7 = 20
    // 20 = 20 - 2 = 18
    // 18 = 18 - 8 = 10
    // 10 = 10 - 1 = 9
    // 9 = 9 - 9 = 0
    subtotal += 1;
}

console.log(subtotal)


// console.log(Math.floor(27 / 10));


