// Question 4: Write a program using recursion to print a triangle of length n.
// Input: 5
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

function printn(num) {

    if (num == 0)
        return;
    document.write("* ");

    printn(num - 1);
}
n

function pattern(n, i) {

    if (n == 0)
        return;
    printn(i);
    document.write("<br/>");

    pattern(n - 1, i + 1);
}

var n = 5;
pattern(n, 1);
