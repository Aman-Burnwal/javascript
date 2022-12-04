/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    let count = [];
    let str = [];

    for (let i = 0; i < s.length; i++) {

        if (str.includes(s[i])) {
           
            let ind = str.indexOf(s[i]);
            let val = count[ind];
            val += 1;
            count[ind] = val
        } else {

            str.push(s[i])
            count.push(1);
        }
        
        
    }
    console.log(count, str)
    let ans = ""

    for (let i = 0; i < count.length; i++) {
       
        let swap = i;
        for (let j = i; j < count.length; j++) {

            if (count[swap] < count[j]) {
                swap = j;
            }
        }
        [count[i], count[swap]] = [count[swap], count[i]]
        
        // [str[i], str[swap]] = [str[swap], str[i]]
        let temp = str[i];
        str[i] = str[swap];
        str[swap] = temp;
        while (count[i]--) {
            ans += str[i];
        }
    }
    return ans;
    
};

console.log(frequencySort("abaddd"))