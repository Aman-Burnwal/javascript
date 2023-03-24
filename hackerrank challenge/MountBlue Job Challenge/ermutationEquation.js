function permutationEquation(p) {
    // Write your code here
    let map = new Map();

    for (let i = 0; i < p.length; i++) {

        map.set(p[i], i)

    }

    let ans = [];

    for (let i = 0; i < p.length; i++) {

        let temp = map.get(i + 1) + 1;



        let val = map.get(temp);

        ans.push(val + 1)

    }

    return ans

}

console.log(permutationEquation([5, 2, 1, 3, 4]))