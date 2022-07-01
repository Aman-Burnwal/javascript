


// for (let i = 0; i <= 50; i++) {
//     if (i < 10) {
//         console.log(i)
//     } else {
//         let temp = i % 10;
//         if (temp == Math.floor(i / 10)) {
//             console.log(i)
//         }

//     }
// }









// function checkPalindrome(str) {

//     var len = str.length;

//     for (let i = 0; i < len / 2; i++) {


//         if (str.charAt(i) != str.charAt(len - i - 1))
//             return false;
//     }
//     return true;
// }


// for (j = 1; j <= 50; j++) {
//     if (checkPalindrome(j.toString())) {
//         console.log(j);
//     }
// }



function checkingpalindrome(str){
    let strlen = str.length;

    for(let i = 0; i < strlen /2; i++){
        if(str.charAt(i) != str.charAt(strlen - i -1)){
            return false;
        }
    }
    return true;
}





for (j = 1; j <= 50; j++) {
    if (checkingpalindrome(j.toString())) {
        console.log(j);
    }
}












