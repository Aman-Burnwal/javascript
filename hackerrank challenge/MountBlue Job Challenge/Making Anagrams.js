
function makingAnagrams(s1, s2) {
    // Write your code here
    let freqMap = new Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {

        let ind = s1.charCodeAt(i) - 97;
        
        freqMap[ind]++;
    }


    for (let i = 0; i < s2.length; i++) {

        let ind = s2.charCodeAt(i) - 97;
        freqMap[ind]--;
    }

    let count = 0;

    for (let i = 0; i < 26; i++) {

        count += Math.abs(freqMap[i]);
    }
    return count;

}