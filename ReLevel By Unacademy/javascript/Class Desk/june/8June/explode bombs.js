/*Explode Bombs Problem.

● Given a matrix. There are bombs placed at some cells denoted by value -1. So,
wherever a bomb is placed, the cells around it explodes which means there value
gets incremented by 1 except if that is a bomb too. Initial value of all empty cells is
assumed to be 0. So, print the final state of the matrix after all bombs explode.

Algorithm:

1. Iterate on the bombs array.
2. Set the cells with bomb to -1 in the output matrix initialised to 0.
3. Then, visit all the cells around the bomb and increment them by 1 if it does not
contain a bomb already.
4. Print this output matrix.



*/

const arr = [
    [0, 0, -1, 0],
    [-1, 0, -1, 0],
    [0, -1, 0, 0]
]

// calling the function and initilize our array
explodingBomb(arr);

// printing the array
console.log(arr);


// function declaratin
function explodingBomb(arr) {


    let  last_row = arr.length;
    let  last_col = arr[0].length;
    

    for (let i = 0; i < last_row; i++) {

        for(let j = 0; j < last_col; j++) {

            if(arr[i][j] === -1) {


                // top 
                if((i - 1 >= 0 && i - 1 < last_row) && arr[i - 1][j] !== -1) {
                    arr[i - 1][j] += 1;
                }

                // bottom

                if(i + 1 >= 0 && i + 1 < last_row && (arr[i + 1][j] !== -1) ) {
                    arr[i + 1][j] += 1;
                }

                // right
                if(j + 1 >= 0 && j + 1 < last_col && arr[i][j + 1] !== -1) {
                    arr[i][j + 1] += 1;
                }

                //left 
                if(j - 1 >= 0 && j - 1 < last_col && arr[i][j - 1] && arr[i][j - 1] !== - 1) {
                    arr[i][j - 1] += 1;
                }


                // left top 

                if(i - 1 >= 0 && i - 1 < last_row && j - 1 >= 0 && j - 1 < last_col && arr[i - 1][j - 1] !== -1) {
                    arr[i - 1][j - 1] += 1;
                }

                // right top

                if(i - 1 >= 0 && i - 1 < last_row && j + 1 >= 0 && j + 1 <last_col && arr[i - 1][j + 1] !== -1) {
                    arr[i - 1][j + 1] += 1;
                }

                // down right

                if(i + 1 >= 0 && i + 1 < last_row && j + 1 >= 0 && j + 1 < last_col && arr[i + 1][j + 1] !== - 1) {
                    arr[i + 1][j + 1] += 1;
                }

                //down left
                if(i + 1 >= 0  && i + 1 < last_row && j - 1 >= 0 && j - 1 < last_col && arr[i + 1][j - 1] !== -1) {
                    arr[i + 1][j - 1] += 1;
                }
            }

        }
    }
    return arr;
}



