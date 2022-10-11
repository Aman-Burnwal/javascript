

function anagram(s, t) {

    if (s.length !== t.length) return false;

    let store = {};

    for (let i = 0; i < s.length; i++) {
        if (store[s[i]] > 0) {
            store[s[i]] += 1;
        } else {
            store[s[i]] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (store[s[j]] > 0) {
            store[s[j]] -= 1;
        }

        if (store[s[j]] < 0) {
            return false;
        }
    }
    return true;
}

console.log(anagram("aman", "mana"))