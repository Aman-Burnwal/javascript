function theLoveLetterMystery(s) {
    // Write your code here
    let len = s.length;
    
    let count = 0;
    for (let i = 0; i < len / 2; i++) {  
    
        count += Math.abs(s.charCodeAt(i) - s.charCodeAt(len - i - 1));
    }

    return count;

}


console.log(theLoveLetterMystery("cba"))
