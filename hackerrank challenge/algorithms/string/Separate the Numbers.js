
// function separateNumbers(s) {

//     // Write your code here
//     if (s[0] == 0 || s.length <= 1) return console.log("NO");

//     for (let i = 0; i < s.length / 2; i++) {

//         let subStr = s.slice(0, i + 1);

//         let num = BigInt(subStr);

//         let validStr = subStr;

//         while (validStr.length < s.length) validStr += String(++num);

//         if (validStr == s) return console.log("YES " + subStr);

//         console.log(validStr);

//     }

//     return console.log("NO")
// }



function separateNumbers(s) {
    // Write your code here

    if (s[0] === 0 || s.length <= 1) return console.log("NO");

    for (let i = 0; i < s.length / 2; i++) {

        let subStr = s.slice(0, i + 1);
        let num = BigInt(subStr);
        let subStr1 = subStr;

        while (subStr1.length < s.length) subStr1 += String(++num);

        if (subStr1 == s) return "YES " + subStr;

        console.log(subStr1)
    }
    return "NO"
}


console.log(separateNumbers("89"))
