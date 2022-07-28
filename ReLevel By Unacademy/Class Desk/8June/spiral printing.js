const arr =
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7]];

printInSpiralForm(arr);



function printInSpiralForm(arr) {

    let first_row = 0, last_row = arr.length - 1;
    let first_col = 0, last_col = arr[0].length - 1

    while(first_row <= last_row && first_col <= last_col) {

        let i;
        // left to right printing
        for(i = first_col; i <= last_col; i++) {
            console.log(arr[first_row][i]);

        }
        // console.log("one")
        first_row++;
        
        // top to bottom printing
        for(i = first_row; i <= last_row; i++) {
            console.log(arr[i][last_col]);
        }
        last_col--;
        // console.log("two")

        // bottom right to left printing
        if(first_row <= last_row) {
            for(i = last_col; i >= first_col; i-- ) {
                console.log(arr[last_row][i]);
    
            }
            // console.log("three")
        }

        last_row--
        

        // bottom to top printing
        if(first_col <= last_col) {
            for(i = last_row; i >= first_row; i--) {
                console.log(arr[i][first_col]);
            }
            // console.log("four")
        }

        first_col++;
        
    }

}
