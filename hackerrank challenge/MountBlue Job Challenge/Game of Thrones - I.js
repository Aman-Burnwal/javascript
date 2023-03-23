
function gameOfThrones(s) {
    // Write your code here

    let freqMap = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i) - 97;

        freqMap[charCode]++;
    };


    let count = 0;

    for (let i = 0; i < 26; i++) {

        if (freqMap[i] === 1 || freqMap[i] % 2 === 1) {

            if (count) {
                return "NO"
            } else {
                count++;
            }
        }


    }
    return "YES";

}
