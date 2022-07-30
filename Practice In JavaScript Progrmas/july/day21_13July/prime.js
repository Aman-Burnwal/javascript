// let n = -20;
// for (let i = 0; i <= n; i++) {
//     let prime = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             prime = 1;
//             break;
//         }
//     }
//     if (i > 1 && prime == 0) {
//         console.log(i)
//     }
// }

function primeis(num) {
    if(num <= 1) {
        return -1;
    }

    for(let i = 2; i < num; i++) {
        let a = true;
        for(let j = 2; j <= i; j++ ) {
            if(i % j === 0) {
                a = false;
                break;
            }
        }
        if(a === true){
            console.log(i)
        }
    }

}

primeis(20)