function indexForund(arr, len, x) {
    

    if (arr[len] === x) return len;


    return len < 0 ? -1 : indexForund(arr, len -= 1, x)
} 


const arr = [1, 2, 3, 4, 34, 12]

console.log(indexForund(arr, arr.length - 1, 4))
