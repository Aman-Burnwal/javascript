// Problem Statement 

// Given 2 numbers M and N where

// M = number of lectures happened
// N = number of lectures attended

// Your task is to find number of lectures which need to be attended to achieve 75% attendance

// For example –

// Input -
// M = 7, N = 6


// Output -
// 0 (75% attendance already achieved)

console.log(requiredAttendence(100, 74));

function requiredAttendence(M, N) {
    let minDays = Math.floor(M * 0.75);
    if(N > minDays) {
        return 0
    } else {
        return minDays - N;
    }


}