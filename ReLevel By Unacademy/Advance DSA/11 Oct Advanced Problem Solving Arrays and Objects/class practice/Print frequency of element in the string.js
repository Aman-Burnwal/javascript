// // Frequency – The frequency of an element in the string is defined as the number of times that element is present in the
// // string.
// //     Problem – Given a string and a character as input.You need to print the frequency of the character in a given string.
// // For example –
// // Input – str = “unacademy”, c = ‘a’
// // Output – 2



// Approach 1 – We can traverse string characters one by one and check if a given character is equal to that character.If it
// is matching, we can increase our count.
// Code Link - https://jsfiddle.net/x5r4wdgt/
// Approach 2 – We can also use recursion to find the frequency
// Code Link - https://jsfiddle.net/crk8217u/
// Time Complexity –
// If there are N characters in string str, then complexity will be O(N)
// Space Complexity –
// If there are N numbers in given array arr, then complexity will be O(1)


function frequency(str, character) {

    let splited = str.split("");
    let times = 0;
    splited.map(index => {
        if (index === character) {
            times++;
        }
    })
    return times;
}

console.log(frequency("unacademy", "u"))
