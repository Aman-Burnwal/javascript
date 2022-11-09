// question link: - https://www.spoj.com/problems/PRATA/
// reading how many test cases are persents there
var test = Number(readline());
// let t = 1;

// this loop will run til 0. but why till 0? because 0 is a falsy value means when t will be 0
// it means while will get false
while (test--) {

    // according to the question 1st line will be the totlal number of Paratha so
    // we are assingning the number of paratha in P variable
    // let p = 10;
    let p = Number(readline());

    // 2line line contains total cocks with their rank 1
    // let cooks = [4, 1, 2, 3, 4];
    let cooks = readline().split(" ").map(Number);

    // in cooks first index tells how many cooks are persent there
    let L = cooks[0];

    
    let beg = 0;

    // as we know that there is no more rank then 8 so
    // p = number of paratha;
    // as per formula t = (p * (p + 1) * R) / 2
    //                  = p * (p + 1) * 8 / 2
    //                  = p * (p + 1) * 5;
    let end = p*(p + 1) * 4;

    // by default ans is 0
    let ans = 0;

    // using binary search
    while (beg <= end) {
        
        // finding the mid
        let mid = Math.floor(beg + (end - beg) / 2);

        // no_of_paratha() is a function where we will pass mid as a time
        // L as total no. of coocks
        // and all cooks as cooks
        // and our function will return how many paratha can be made in mid time
        // if paratha can be made more then require paratha then we will update the minimum time(ans) as mid
        if (no_of_paratha(mid, L, cooks) >= p) {

            // we are updating the minimum time to make the require paratha
            ans = mid;
            // so there is posibilities to make require paratha in less than mid time
            // so we are updating end with mid - 1;
            end = mid - 1;
        } else {
            // if we don't get more or equal to require paratha it means cooks need more time to make it
            // so wil increase beg with mid + 1;
            beg = mid + 1;
        }
    }

    console.log(ans);



}

// this function will help to find the total number of paratha made in mid time;
function no_of_paratha(time_limit, L, cooks) {

    // here time_limit is our mid;
    // L is the no. of cooks;
    
    // by default cooks made 0 paratha 
    let total_paratha = 0;

    // now we will run the loop till L
    // here i = 1 because cooks[0] is L (number of cooks) according to the question
    for (let i = 1; i <= L; i++) {

        // we know that everey coock has a rank and they takes time according to their rank to cook a paratha
        // to calculate how many cooks[i] can make a pratha in mid time(time_limit)
        // we are using here another function as paratha_by_coock it will return how many cooks[i] made the paratha in limited time
        // and then we simply add with previous cooks made and current cook made paratha;
        total_paratha += paratha_by_coock(cooks[i], time_limit)
    }
    // return the total number of paratha made in mid(time_limit) time by all cooks
    return total_paratha;
}

// this fuction is used to get the number of paratah made by cooks[i] in limit time;
function paratha_by_coock(rank, time) {

    // t = time // current time by default 0 because whenever cook will start to coock paratha time will be 0
    let t = 0;
    // currently he have made 0 parahta so p = 0;
    let p = 0;

    //  (t + (p + 1) * rank) <= time means can our coock make another paratha in under the time
    // if it's true than add one paratah 
    // else break the loop 
    while (t + (p + 1) * rank <= time) {
        // finding and updating the time to make next (another) paratha
        t += (p + 1) * rank

        // updating the number of paratha the was made
        p += 1;
    }

    // returning the number of paratha
    return p;
}

// Input:
// 3
// 10
// 4 1 2 3 4
// 8
// 1 1
// 8
// 8 1 1 1 1 1 1 1 1

// Output:
// 12
// 36
// 1
