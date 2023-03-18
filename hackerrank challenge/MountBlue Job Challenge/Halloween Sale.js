function howManyGames(p, d, m, s) {
    // Return the number of games you can buy


    let sum = 0;
    let count = 0;

    while (sum <= s) {

        sum += p;

        if (p - d > m) p -= d;
        else p = m;

        count++;
    }
    return sum === s ? count : count -= 1;

}