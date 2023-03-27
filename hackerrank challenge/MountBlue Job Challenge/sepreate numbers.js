
function separateNumbers(s) {

    // Write your code here
    if (s[0] == 0 || s.length <= 1) return console.log("NO");

    for (let i = 0; i < s.length / 2; i++) {

        let subStr = s.slice(0, i + 1);

        let num = BigInt(subStr);

        let validStr = subStr;

        while (validStr.length < s.length) validStr += String(++num);

        if (validStr == s) return console.log("YES " + subStr);
    
    }

    return console.log("NO")
}


separateNumbers("99999999999100000001")
