function dynamicArray(n, queries) {
    // Write your code here

    let arr = [];
    let results = [];
    let LA = 0;
    let N = n;
    while (N--) arr.push([]);
    

    for (let i = 0; i < queries.length; i++) {

        let idx = ((queries[i][1] ^ LA) % n);

        if (queries[i][0] === 1) arr[idx].push(queries[i][2]);
 
  
        else {
            LA = arr[idx][queries[i][2] % arr[idx].length]
            results.push(LA);
        }



    }


    return results;




}


let queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
]

console.log(dynamicArray(2, queries))