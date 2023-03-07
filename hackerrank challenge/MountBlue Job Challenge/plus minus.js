

function plusMinus(arr) {
    // Write your code here

    let possitive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zero++;
        else if (arr[i] > 0) possitive++;
        else negative++;


    }
    console.log(possitive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);

}

