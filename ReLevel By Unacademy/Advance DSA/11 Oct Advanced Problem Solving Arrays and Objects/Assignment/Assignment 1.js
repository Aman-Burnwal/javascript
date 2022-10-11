// Requirements: Find the first element having a maximum frequency in a string “unacademy


function maxelement(str) {
    const store = {};


    for (let i = 0; i < str.length; i++) {
        
        if (store[str[i]] > 0) {
            store[str[i]] += 1;
        } else {
            store[str[i]] = 1;
        }
    }

    let max = 0;
    let maxElement = ""

    for (element in store) {
        
        if (store[element] > max) {
            max = store[element]
            maxElement = element;
        }
    }
    return maxElement;
}
let value = "unacademy";
console.log(maxelement(value));


