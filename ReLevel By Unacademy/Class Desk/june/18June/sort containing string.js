// Write a program array containing string and sort the string array in descending order. (Input
    // array: [a’, ‘b’, ‘c’, ‘z’, ‘h’])
    // Explanation: sort function will accept comparator passing localeCompare and comparing the
    // string.



// solution


const array = ['a', 'b', 'z', 'h'];


// decreament order

array.sort((a, b) => b.localeCompare(a));

console.log(array);