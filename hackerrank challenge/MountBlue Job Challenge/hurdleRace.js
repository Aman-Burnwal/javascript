function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height);
    return max > k ? max - k : 0;

}


console.log(hurdleRace(7, [1, 6, 3, 5, 2]))