

let subArray = (a) => {
    for (let l = 0; l < a.length; l++) {
        let mj = []
        for (let i = l; i < a.length; i++) {
            mj.push(a[i])
            console.log(mj)
        }
    }
}
let a = [5, 4, 3, 2, 1]
subArray(a);