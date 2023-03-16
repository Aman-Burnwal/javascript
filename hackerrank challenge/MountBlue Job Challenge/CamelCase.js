
function camelcase(s) {
    // Write your code here

    if (s.length <= 1) return s.length;
    let word = 1;

    for (let i = 0; i < s.length; i++) {

        let charCode = s.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) word++;

    }
    return word;

}


// optimized solution;

function camelcase(s) {
    // Use a regular expression to count the number of capital letters in the string
    return (s.match(/[A-Z]/g) || []).length + 1;
}
