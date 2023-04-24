function dac(arr , i , j) {

    if(small(arr, i, j)) return solution(arr, i, j)
    else {

        let p = divide(arr, i, j);
        let s1 = dac(arr, i, p);
        let s2 = dac(arr, p + 1, j)

        let s = combine(s1, s2);

        return s;
    }
    
}


function solution(arr, i, j) {

    
}

function divide(arr, i, j) {


}


function combine(s1, s2) {

    
}


