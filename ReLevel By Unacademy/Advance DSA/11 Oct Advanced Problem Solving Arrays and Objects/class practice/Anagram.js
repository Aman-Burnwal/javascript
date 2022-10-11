// Anagram – An anagram of a string is a string that contains the same characters but the order can be different.

// Example – unacademy, acadmyenu are an anagram of each other
// Problem – Given an array of strings.You need to print all anagrams together.

// For example –

// Input – {“data”, “atad”, “number”, “tada”, “adat”, “bernum” }
// Output – {“data”, “atad”, “tada”, “adat”, “number”, “bernum” }


function anagram(input) {

    if (input.length === 0 || input.length === 1) return input;

    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let str = input[i];
        let sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }

    // console.log(map)

    let result = [];
    for (let [key, value] of map) {
        result.push(...value);
    }

    return result;
}
let input = ['data', "atad", "number", "tada", "adat", "bernum"]
console.log(anagram(input))