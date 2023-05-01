/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {

    if (a === 1) return 1;

    let num = "";

    for (let i = 0; i < b.length; i++) num += b[i];



    num = parseInt(num);
    console.log(num);


    // if(num === 0) return 1;


    return helper(a, num % 1337);


};

function helper(a, num) {

    if (num === 1) return a;


    let mid = num / 2;


    let temp = helper(a, parseInt(mid));

    return num % 2 === 0 ? (temp * temp) % 1337 : (temp * helper(a, Math.ceil(mid)) % 1337);



}
console.log(superPow(2147483647,[2,0,0]))