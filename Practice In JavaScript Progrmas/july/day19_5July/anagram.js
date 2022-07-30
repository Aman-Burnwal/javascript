let anagram = (s1, s2) => {
    if (s1.length != s2.length) {
        return false;
    }

    let count = {}
    for (let i of s1) {
        count[i] = (count[i] || 0) + 1;
    }

    for (let j of s2) {
        if (!count[j]) {
            return false;
        }
        count[j] -= 1.
    }
    return true;
}

console.log(anagram('bunty', 'nubyt'))