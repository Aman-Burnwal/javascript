// Write a method that accepts an array of integers and updates every element with multiplication of
// previous and next elements.

// Note:
//  First element is replaced by multiplication of first and second. 
//  Last element is replaced by multiplication of last and second last.

// Example: 
// Input:
// a = [2, 3, 4, 5, 6]

// n = a.length
// 
// Output: 
// [6, 8, 15, 24, 30]

let a = [2, 3, 4, 5, 6]
console.log(multipliedArray(a));



function multipliedArray(array) {
    let length = array.length;
    let curr, pre;

    for(let i = 0; i < length; i++) {
        if(i === 0) {
            curr = array[i];
            array[i] = curr * array[i + 1];
            continue;            
        }
        if(i === length - 1) {
            pre = curr;
            array[i] = pre * array[i]
            break;
        }
        pre = curr;
        curr = array[i];
        array[i] = pre * array[i + 1];
    }
    return array;
}


