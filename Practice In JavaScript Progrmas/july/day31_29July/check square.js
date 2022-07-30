// console.log(PerfectSquare(4)); 

let PerfectSquare = (n) => {
    let check;
    for (let i = 1; i < n; i++) {
        if (i * i === n) {
            check = true;
            break;
        }

        else {
            check = false;
        }

    }
    return check;
}


let result = PerfectSquare (5);

console.log(result);
