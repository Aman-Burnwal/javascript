// https://www.hackerrank.com/contests/mountblue-technologies/challenges/kangaroo

function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    // 0 2 5 3 no
    // 0 3 4 2  

    let jump = 0;

    if (v1 < v2) {
        
        while (x2 <= x1) {
            
            x1 += v1;
            x2 += v2;

            jump++;

            if (x1 === x2) return "YES";
        }
        
    } else {
        while (x1 <= x2) {

            x1 += v1;
            x2 += v2;

            jump++;

            if (x1 === x2) return "YES";
        }
    }

    return "NO"

}


console.log(kangaroo(4, 2, 0, 3))