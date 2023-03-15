
function timeConversion(s) {
    // Write your code here

    let ansTime = "";

    if (s.includes("AM") && s.includes("12")) {

        ansTime += "00"
        for (let i = 2; i < s.length - 2; i++) {

            ansTime += s[i];

        }
        return ansTime;
    }
    else if (s.includes("AM")) {
        return s.slice(0, -2);
    }

    else if (s.includes("PM")) {

        let t = Number(s.slice(0, 2));

        t === 12 ? t += 0 : t += 12;
        ansTime += t;
        for (let i = 2; i < s.length - 2; i++) {
            ansTime += s[i]
        }
    }

    return ansTime


}