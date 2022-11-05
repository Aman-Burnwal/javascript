let num = 124523;

function sum(num) {

    let result = 0;

    while (num > 0) {

        result += num ;
        num = Math.floor(num / 10);
       
    }
    return result;
}

console.log(sum(num));