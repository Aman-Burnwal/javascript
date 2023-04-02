function pangrams(s) {
    // Write your code here
    let set = new Set();

    for (let i = 0; i < s.length; i++) {

        if (s[i] === " ") continue;

        let char = s[i].toLowerCase();
        set.add(char);
    }


    return set.size === 26 ? "pangram" : "not pangram";
}


const letter = "We promptly judged antique ivory buckles for the next prize"

console.log(pangrams(letter))

