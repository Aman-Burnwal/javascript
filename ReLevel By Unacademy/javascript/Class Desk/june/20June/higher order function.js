const arr = [1, 2, 3, 4, 5];

const filter = arr.filter(function(item){
    return item > 3
})

console.log(filter);


//sorting

const sorting = arr.sort(function(a, b){
    return b - a;
})

console.log(sorting);