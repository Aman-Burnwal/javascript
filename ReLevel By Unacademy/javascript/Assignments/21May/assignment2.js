// Requirements: "2. Write a function that compares two numbers and returns the larger of the two.
// Bonus: Output appropriate message if numbers cant be compared or are equal"

function largerNumber(num1, num2){
    largerNum = num1 > num2 ? num1 : num2;
    return console.log(largerNum);
}

largerNumber(2, 3);
largerNumber(3, 2);