function partition(a, l, r) {
    let pivot = a[r]

    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
        if (a[j] < pivot) {
            i++;
            let mj = a[j]
            a[j] = a[i]
            a[i] = mj;
        }
    }

    let virus = a[i + 1]
    a[i + 1] = a[r]
    a[r] = virus;

    return i + 1;
}

function name1(a, l, r) {
    if (l < r) {
        let pi = partition(a, l, r)
        name1(a, l, pi - 1)
        name1(a, pi + 1, r)
        return a;
    }
}




let a = [5, 1, 3, 7, 8, 9, 10, 2, 4]
console.log(name1(a, 0, a.length - 1))