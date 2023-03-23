
function pangrams(s) {
    // Write your code here

    s = s.toLowerCase();

    let arr = new Array(26).fill(1);


    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;
        let char = s.charCodeAt(i) - 97;
    
        arr[char]--;
    }
    console.log(arr)

    for (let i = 0; i < 26; i++) {
        console.log(arr[i])
        if (arr[i] >= 1) return "not pangram";
    }
    return "pangram";

}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"))
