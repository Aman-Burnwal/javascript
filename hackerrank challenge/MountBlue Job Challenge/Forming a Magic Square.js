



function formingMagicSquare(s) {
    // Write your code here

    const magic = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2]
    ]
    let min = Infinity;
    s = s.flat();

    for (let i = 0; i < magic.length; i++) {
        
        let dif = 0;
        let arr = magic[i];
     

        for (let i = 0; i < 9; i++) {
            
            dif += Math.abs(s[i] - arr[i]);

        }

        min = Math.min(min, dif);
    }
    return min;
}


const arr = [[4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]
]

console.log(formingMagicSquare(arr));

