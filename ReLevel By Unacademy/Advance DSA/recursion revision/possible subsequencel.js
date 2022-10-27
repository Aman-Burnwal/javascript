
function possibleSubsequence(str, ans) {
    if (str.length == 0) {
        console.log(ans);
        return;
    }
    let ch = str[0];
    let ros = str.slice(1);
    possibleSubsequence(ros, ans + ch);
    possibleSubsequence(ros, ans);
}



const arr = ['a', 'b', 'c'];

console.log(possibleSubsequence(arr, ""))