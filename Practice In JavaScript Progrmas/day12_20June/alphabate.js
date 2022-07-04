let a = "Example "

// console.log(a)

for(let i = a.length - 1; i >= 0; i--){
    if(a[i] >= 'a' && a[i] <= 'z' || a[i] >='A' && a[i] <= 'Z'){
        console.log(a[i])
        break;
    }
}


// let str = " Example4 "

// let lastchar;
// for(let i = str.length - 1; i >= 0; i--){
//     if(str[i] != ' '){
//         lastchar = str[i];
//         break;
//     }
    
// }

// // console.log(lastchar)