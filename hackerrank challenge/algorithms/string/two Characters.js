function alternate(s) {
    // Write your code here

    let len = s.length;

    if (len <= 1) return 0;

    const dynamicArr = new Array(26).fill(0);
    const dynamicArrCount = new Array(26).fill(0);

    for (let i = 0; i < 26; i++) {

        dynamicArr[i] = new Array(26).fill(0);
        dynamicArrCount[i] = new Array(26).fill(0);

    }

    
    for (let i = 0; i < len; i++) {
        let letter = s[i];
        let char = s.charCodeAt(i) - 97;

        // updating row

        for (let row = 0; row < 26; row++) {

            if (dynamicArr[char][row] === s[i]) {
                dynamicArrCount[char][row] = -1;
            }


            if (dynamicArrCount[char][row] !== -1) {
                
                dynamicArr[char][row] = letter;
                dynamicArrCount[char][row]++;
            }
        }

        for (let col = 0; col < 26; col++) {

            if (dynamicArr[col][char] === s[i]) {
                dynamicArrCount[col][char] = -1;
            }


            if (dynamicArrCount[col][char] !== -1) {

                dynamicArr[col][char] = letter;
                dynamicArrCount[col][char]++;
            }
        }
        
    }


    let max = 0;


    for (let i = 0; i < 26; i++) {

        for (let j = 0; j < 26; j++) {

            max = Math.max(max, dynamicArrCount[i][j])
        }
    }
    
    return max;

    

}


console.log(alternate("az"))