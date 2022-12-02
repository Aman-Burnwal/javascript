/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {

    if (word1.length !== word2.length) return false;

    const word1Map = new Map();
    const word2Map = new Map();

    for (let i = 0; i < word1.length; i++) {
        word1Map.set(word1[i], (word1Map.get(word1[i]) || 0) + 1);
        word2Map.set(word2[i], (word2Map.get(word2[i]) || 0) + 1);
    }

    const word1Keys = Array.from(word1Map.keys());
    const word2Keys = Array.from(word2Map.keys());

    if (word1Keys.length !== word2Keys.length) return false;

    for (let i = 0; i < word1Keys.length; i++) {
        if (!word2Map.has(word1Keys[i])) return false;
    }

    const word1Values = Array.from(word1Map.values()).sort((a, b) => a - b);
    const word2Values = Array.from(word2Map.values()).sort((a, b) => a - b);

    for (let i = 0; i < word1Values.length; i++) {
        if (word1Values[i] !== word2Values[i]) return false;
    }

    return true;
};

let word1 = "abc", word2 = "bca";

console.log(closeStrings("cabbba", "abbccc"))