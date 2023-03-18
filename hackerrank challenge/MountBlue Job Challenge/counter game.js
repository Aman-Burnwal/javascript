function counterGame(n) {
    // Write your code here

    if (n == 1) return "Richard";

    let count = 0;

    while (n !== 1) {

        // console.log(Math.pow(n, 0.5))
        
        if (Math.pow(n, 0.5) === Math.floor(Math.pow(n, 0.5))) n = n / 2;
        
        else if (n === 2) n = 1;
        else n = n - Math.pow(2, Math.floor(Math.pow(n, 0.5)));
        // console.log(n)
        count++;
        console.log(count)
      

    }

    return count % 2 === 0 ? "Louise" : "Richard"

}


console.log(counterGame(6))