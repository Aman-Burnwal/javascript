/*
    Reverse Pyramid

Problem – 
        Given a number N. You need to print a reverse pyramid having N rows using numbers 1 to N. For
example –

    Input – 6
    Output – 1 2 3 4 5 6
              2 3 4 5 6
               3 4 5 6
                4 5 6
                 5 6
                  6
Approach –
        Intuition - Since, it is printing numbers N times, it's obvious that we need to
        use the loop concept here. Now, based on the pattern in the problem, we
        need to decide the pattern of calling loops.
Steps -
        1) Outer loop - iterate from 1 to N - variable i
        2) Inner loop 1 - print space (Iterate from 1 to i) - variable j
        3) Inner loop 2 - print number(Iterate from i to N) - variable j
        4) Print new line
*/


const num = 6;
pyramid(num)

function printline(i, num, space) {
    let totalNum = i
    for (let j = i + 1; j <= num; j++) {
        totalNum += " " + j;
    }
    return console.log(space + totalNum)
}

function pyramid(num) {
    let space = "";

    for (let i = 1; i <= num; i++) {
        printline(i, num, space);
        space += " "
    }
    return;
}