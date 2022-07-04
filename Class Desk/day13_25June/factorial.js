// var temp = 1;
// function factoril(num){
    
//     for(let i = 1; i <= num; i++){
//         temp = temp * i;
        
//     }
//     console.log(temp)
// }

// factoril(4);











function factoril(num){
    if(num == 1){
        return 1;
    }

    return num* factoril(num - 1);
}

console.log(factoril(4))















