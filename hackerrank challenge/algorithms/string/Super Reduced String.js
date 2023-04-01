// function superReducedString(s) {
//     // Write your code here

//     let map = new Map();
//     let ans = ""

//     for (let i = 0; i < s.length; i++) {

//         if (map.has(s[i])) {
//             map.set(s[i], map.get(s[i]) + 1);

//         } else map.set(s[i], 1);
//     }
//     // console.log(map)

//     for (let i of map) {

//         console.log(i)

//         if (i[1] % 2 !== 0) ans += i[0];
//     }

//     return ans.length ? ans : "Empty String";


// }



function superReducedString(s) {

    

    if (s.length === 0) return "Empty String";

    let canReduce = true;

    while (canReduce && s.length) {
        let ans = ""
        canReduce = false;

        for (let i = 0; i < s.length; i++) {

            if (s[i] !== s[i + 1]) {
                ans += s[i]

            } else {
                i++;
                canReduce = true;
            }
        }
        s = ans;
      
    }



    return s.length === 0 ? "Empty String" : s;
}
console.log(superReducedString("aaabccddd"))