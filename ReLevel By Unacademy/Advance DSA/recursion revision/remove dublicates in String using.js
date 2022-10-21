let ans = "";
function withOutDuplicates(str, len) {
    if (len === str.length) {
        return ans;
    }

    if (str[len] !== str[len + 1]) {
        ans += str[len];
    } 
        

    withOutDuplicates(str, len += 1)
    
}

withOutDuplicates("helloolls", 0)

console.log(ans)