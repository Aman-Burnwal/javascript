
let arr = [10, 6, 7, 5, 4]
find(arr, 6,5 )

function find(arr, no, length) {

    for(let i = 0; i < length; i++) {
        let test = false, test1 = false;

        for(let j = 0; j < length; j++) {
            if(no - i === arr[j] ) {
                test1 = true;
                break;
            }
        }


        for(let j = 0; j < length; j++) {
            if(no + i === arr[j] ) {
                test = true;
                break;
            }
        }

        if(test != true) {
            return console.log(no + i);
        }

        if(test1 != true) {
            return console.log(no - i)
        }
    }
}