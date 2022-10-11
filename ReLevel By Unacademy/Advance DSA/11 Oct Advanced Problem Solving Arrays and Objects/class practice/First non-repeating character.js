// // Non - repeating – A character is known as a non - repeating character when its frequency is unit in a given string.
// //     Problem – Given a string.You need to print the first non - repeating character.For example –
// // Input – str = “unacademy”
// // Output – u





// Approach – We can use HashMap and frequency concept.We can insert characters as keys in the map and their
// respective frequencies as values.
//     Steps –
// 1) Create a map having a character as key and frequency as value
// 2) Iterate the given string and check whether a given character has a unit frequency.
// 3) If yes, print given character as output
// Code Link -> https://jsfiddle.net/9x52zmyL/
// Time Complexity –
// If there are N characters in string str, then complexity will be O(N)
// Space Complexity –
// If there are N characters in string str, then complexity will be O(N)


function firstNOnRepeatingElement(str) {

    if (str.length === 0 || str.length === 1) return str;

    let splited_str = str.split("");

    let hash = new Map();

    splited_str.map(index => {
        if (hash.has(index)) {
            let val = hash.get(index);
            val++;
            hash.set(index, val)
        } else {
            hash.set(index, 1);
        }
    })

    for (index of hash) {
        // console.log(index[1])
        if(index[1] === 1) return index[0];
    }

    return ""
}

console.log(firstNOnRepeatingElement("uaman"))

