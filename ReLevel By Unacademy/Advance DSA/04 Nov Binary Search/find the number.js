function getSum(sum) {
    let result = 0;
    
    while (sum > 0) {
        result += sum
        sum = Math.floor(sum / 10)
    }
    return result;
}

function findNum(n) {
    let beg = 1; end = n 

    while (beg <= end) {

        let mid = Math.floor(beg + (end - beg) / 2);

        let f = getSum(mid) 

        if (f === n) return mid;

        f > n ? end = mid - 1 : beg = mid + 1;
    }
    return -1;
}



console.log(findNum(116))