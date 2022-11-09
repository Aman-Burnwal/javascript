// reading how many test cases are persents there
// var test = Number(readline());
let t = 1;

// this loop will run til 0. but why till 0? because 0 is a falsy value means when t will be 0
// it means while will get false
// while (test--) {

    // according to the question 1st line will be the totlal number of Paratha so
    // we are assingning the number of paratha in P variable
    let p = 10;
    // let p = Number(readline());

    // 2line line contains total cocks with their rank 1
    let cooks = [4, 1, 2, 3, 4];
    // let cooks = readline().split(" ").map(Number);

    // in cooks first index tells how many cooks are persent there
    let L = cooks[0];

    
    let beg = 0;

    // as we know that there is no more rank then 8 so
    // as per formula t = (p * (p + 1) * R) / 2
    // p = number of paratha;
    // R = Rank of every cook;
    let end = p*(p + 1) * 4;

    let ans = 0;

    while (beg <= end) {
        
        let mid = Math.floor(beg + (end - beg) / 2);

        if (no_of_paratha(mid, L, cooks) >= p) {
            ans = mid; end = mid - 1;
        } else {
            beg = mid + 1;
        }
    }

    console.log(ans);



// }

function no_of_paratha(time_limit, L, cooks) {

    let total_paratha = 0;

    for (let i = 1; i <= L; i++) {

        total_paratha += paratha_by_coock(cooks[i], time_limit)
    }
    return total_paratha;
}

function paratha_by_coock(rank, time) {
    let t = 0;
    let p = 0;

    while (t + (p + 1) * rank <= time) {
        t += (p + 1) * rank
        p += 1;
    }

    return p;
}

