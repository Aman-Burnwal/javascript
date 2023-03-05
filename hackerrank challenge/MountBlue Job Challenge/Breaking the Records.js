

function breakingRecords(scores) {
    // Write your code here

    let max = scores[0];
    let min = scores[0];
    let scoresIn = 0;
    let scoresDn = 0;

    for (let i = 0; i < scores.length; i++ ) {
        
        if (scores[i] > max) {
            max = scores[i];
            scoresIn++
        }

        if (scores[i] < min) {
            min = scores[i];
            scoresDn++
        }


    };

    let ans = [scoresIn, scoresDn];
    return ans;

}


let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(breakingRecords(arr))