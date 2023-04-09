function isPowerofTwo(n) {
    // code here

    let curr = 0;
    let i = 0;

    while (curr <= n) {
        
        curr = Math.pow(2, i);
        i++;
    }



    if (curr == n) return "yes"
    return "No"

}


console.log(isPowerofTwo(23))