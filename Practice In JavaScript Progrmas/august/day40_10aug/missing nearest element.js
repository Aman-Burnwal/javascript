let arr = [10, 6, 7, 5, 4]

missingElement(arr, 5, 6);

function missingElement(arr, len, number) {
    let set = new Set()

    arr.forEach(element => set.add(element));


    for (let i = 0; i < len; i++) {
        if (!set.has(number - i)) {
            console.log(number - i);
            return;
        }

        if (!set.has(number + i)) {
            console.log(number + i)
            return;
        }
    }
}