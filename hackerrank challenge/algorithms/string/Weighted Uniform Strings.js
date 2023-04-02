function weightedUniformStrings(s, queries) {
    // Write your code here
    let map = new Map();
    let len = 0;
    for (let i = 0; i < s.length; i++) {

        let charCode = s.charCodeAt(i) - 96;
        if (s[i] === s[i - 1]) len += charCode;
        else len = charCode;
        map.set(len)


    }
    const ans = []

    for (let i = 0; i < queries.length; i++) {

        map.has(queries[i]) ? ans.push("Yes") : ans.push("No");
    }

    return ans;


}

console.log(weightedUniformStrings("abccddde"))
