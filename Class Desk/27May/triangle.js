// Problem - 4
// Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?
// (Students are not expected to take any user input, solve the problem using hardcoded value)
// Example-1
// Input: a=7,b=10,c=5
// Output: Triangle

function checkingTraingle(a, b, c) {
    if(a + b <= c || b + c <= a || c + a <= b) {
        return false;
    }
    return true;
}

if(checkingTraingle(7, 10, 5)){
    console.log("Triangle")
} else {
    console.log("Not a Triangle");
}