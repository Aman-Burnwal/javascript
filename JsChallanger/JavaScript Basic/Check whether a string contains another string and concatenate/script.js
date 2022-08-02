// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation


function myFunction(a, b) {
     
    return a.includes(b) ? b + a : a + b
}

/* 
myFunction('cheese', 'cake')
Expected
'cheesecake'
myFunction('lips', 's')
Expected
'slips'
myFunction('Java', 'script')
Expected
'Javascript'
myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am'
*/