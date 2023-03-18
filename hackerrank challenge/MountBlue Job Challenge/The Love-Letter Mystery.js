function theLoveLetterMystery(s) {
    // Write your code here

    let i = 0;
    let j = s.length - 1;
    let count = 0;

    while (i < j) {

        if (s[i] !== s[j]) {
            const code1 = s.charCodeAt(i);
            const code2 = s.charCodeAt(j);
            count += Math.abs(code1 - code2);
        }
        i++;
        j--;
    }
    return count;

}
