function kaprekarNumbers(p, q) {
    // Write your code here
    const ans = []
    if (p <= 8) {
        ans.push(1);
        p = 8;
    }

    while (p <= q) {
        let sqare = Math.pow(p, 2).toString();
        let len = Math.floor(sqare.length / 2);
        let arr = [sqare.slice(0, len), sqare.slice(len, sqare.length)];
        console.log(p, arr)
        if (Number(arr[0]) + Number(arr[1]) === p) ans.push(p);
        p++;
    }
    ans.length === 0 ? console.log("INVALID RANGE") : console.log(ans);

}

console.log(kaprekarNumbers(1, 100))