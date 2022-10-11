// Anagram – An anagram of a string is a string that contains the same characters but the order can be different.

// Example – unacademy, acadmyenu are an anagram of each other
// Problem – Given an array of strings.You need to print all anagrams together.

// For example –

// Input – {“data”, “atad”, “number”, “tada”, “adat”, “bernum” }
// Output – {“data”, “atad”, “tada”, “adat”, “number”, “bernum” }


function anagram(input) {

    let leng = input.length;

    if (leng === 0 || leng === 1) return input;

    let obj = {};

    input.map(i => {
        let cur = i;
        let stored = i.split('').sort().join('');

        !obj[stored] ? obj[stored] = [cur] : obj[stored].push(cur);
    })
    return Object.values(obj);
}
let input = ['data', "atad", "number", "tada", "adat", "bernum"]
console.log(anagram(input))