    let arr = s.split("");
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    if (arr.length === 0) {
        return "Empty String";
    } else {
        return arr.join("");
    }