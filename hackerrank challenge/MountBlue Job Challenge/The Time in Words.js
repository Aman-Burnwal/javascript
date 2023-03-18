function timeInWords(h, m) {
    // Write your code here

    let time = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  
    if (m === 0) return `${time[h]} o' clock`;
    else if (m === 15) return `quarter past ${time[h - 1]}`;

    else if (m === 30) return `half past ${time[h - 1]}`;

    else if (m === 45) return `quarter to ${time[h]}`

    if (m < 30) {

        if (m <= 20) {
            return `${time[m - 1]} minutes past ${time[h - 1]}`;
        } else {

            const m2 = m % 10

            return `twenty ${time[m2 - 1]} minutes past ${time[h - 1]}`
        }


    } else {
        m = 60 - m;
        h === 11 ? h = 1 : h = h;
        const m2 = m % 10
        return m <= 20 ? `${time[m - 1]} minutes to ${time[h]}` : `twenty ${time[m2 - 1]} minutes to ${time[h]}`;
    }
};




console.log(timeInWords(5, 31)); // "five o' clock"
console.log(timeInWords(5, 15)); // "quarter past five"
console.log(timeInWords(5, 30)); // "half past five"
console.log(timeInWords(5, 45)); // "quarter to six"
console.log(timeInWords(5, 1)); // "one minute past five"
console.log(timeInWords(5, 10)); // "ten minutes past five"
console.log(timeInWords(5, 20)); // "twenty minutes past five"
console.log(timeInWords(5, 21)); // "twenty one minutes past five"
console.log(timeInWords(5, 29)); // "twenty nine minutes past five"
console.log(timeInWords(5, 31)); // "twenty nine minutes to six"
console.log(timeInWords(5, 40)); // "twenty minutes to six"
console.log(timeInWords(5, 50)); // "ten minutes to six"
console.log(timeInWords(5, 31)); // "one minute to six"