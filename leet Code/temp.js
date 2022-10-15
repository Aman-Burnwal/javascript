function maxmimumWord(sentence) {
    let max = 0;

    for (let i = 0; i < sentence.length; i++) {

        const total = sentence[i].split(" ").length;

        max = Math.max(total, max);
        

    }

    return max;
}


const sentence = ["please wait", "continue to fight", "continue to win"];

console.log(maxmimumWord(sentence));