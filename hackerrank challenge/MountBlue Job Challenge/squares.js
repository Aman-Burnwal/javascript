
function squares(a, b) {
    // Write your code here

    let square = 0
    let num = a;
    for (let i = a; i <= b; i++) {


        if (Number.isInteger(Math.pow(i, 0.5))) {
            square++;
            num = Math.pow(i, 0.5);

            break;

        }


    }
    if (square) {
        square--;

        while (num * num <= b) num++, square++;
    }
    return square;

}

console.log(squares(3, 10))

