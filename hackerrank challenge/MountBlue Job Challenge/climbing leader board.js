function climbingLeaderboard(ranked, player) {
    const ranks = [];
    let rank = 1;

    for (let i = 0; i < ranked.length; i++) {
        if (ranked[i] !== ranked[i - 1]) {
            ranks[ranked[i]] = rank++;
        }
    }

    let j = ranked.length - 1;

    for (let i = 0; i < player.length; i++) {

        while (j >= 0 && player[i] >= ranked[j]) { 
            j--;
        }
        if (j < 0) {
            ranks[player[i]] = 1;
        } else if (player[i] === ranked[j]) {
            ranks[player[i]] = ranks[ranked[j]];
        } else {
            ranks[player[i]] = ranks[ranked[j]] + 1;
        }
    }

    return player.map((p) => ranks[p]);
}


console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]))