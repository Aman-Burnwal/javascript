function anagram(s) {
    // Write your code here

    let len = s.length;

    if (len % 2 === 1) return -1;

    const left = {};
    const right = {};
    const newlen = Math.floor(s.length / 2);


    for (let i = 0, j = s.length - 1; i < newlen; i++, j--) {
        const leftChar = s[i];
        const rightChar = s[j];

        left[leftChar] = (left[leftChar] || 0) + 1;
        right[rightChar] = (right[rightChar] || 0) + 1;
    }

   

    let keys = Object.keys(left);
    let count = 0;
    for (let i in left) {

        let val = left[i];
        
        if (right[i]) {
            
            let val2 = right[i];

            if (val > val2) count += val - val2
        } else count += val;
    }

    return count;
    
};


console.log(anagram("xaxbbbxx"))