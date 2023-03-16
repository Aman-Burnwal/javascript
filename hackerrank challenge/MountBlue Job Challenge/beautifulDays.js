function beautifulDays(i, j, k) {
    // Write your code here

    let bDay = 0;
    while (i <= j) {


        let reversed = Number(String(i).split("").reverse().join(""));
        let absDiff = Math.abs(i - reversed);

        if (absDiff % k === 0) bDay++;
       
        i++;
    }
    return bDay;
}


console.log(beautifulDays(20, 23, 6))