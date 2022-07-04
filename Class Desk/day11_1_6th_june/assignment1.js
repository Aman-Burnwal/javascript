// Requirements: "Given a positive integer A, find a pair of integers a, b such that
// a and b are positive
// A <= B
// a^2 + b^2 = A
// 0<=A<=100000

function squareSum(num) {
    var a = 0;
    while (a * a < num) {
        var b = 0;
        while (b * b < num) {
            if (a * a + b * b == num) {
                if (a <= b) {
                    console.log(a + "," + b);
                }
            }
            b += 1;
        }
        a += 1;

    }
}



squareSum(50);
