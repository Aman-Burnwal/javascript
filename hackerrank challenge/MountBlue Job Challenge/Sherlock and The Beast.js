
function happyLadybugs(b) {
    // Write your code here

    let underScore = b.includes("_")
    let matched = true;



    let freqMap = new Array(26).fill(0);

    if (underScore) {

        for (let i = 0; i < b.length; i++) {

            let code = b.charCodeAt(i) - 65;

            if (code <= 26 && code >= 0) freqMap[code]++;



        }

        for (let i = 0; i < 26; i++) {

            if (freqMap[i] === 1) return "NO"
        }
    }

    else {

        let map = new Map();

        for (let i = 1; i < b.length; i++) {

            if (b[i] !== b[i - 1]) {
                if(map.has(b[i])) return "NO"
                map.set(b[i])
            }

        }
        if (b[b.length - 1] !== b[b.length - 2]) return "NO"; 
    }

    return "YES"

}

console.log(happyLadybugs("AABBC"))