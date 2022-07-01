// write a function that takes an and checks that the array is in assending order or in dessending order
// if the array is in assending order then return "it is in assending order"
// if the array is in dessending order then return "it is in dessending order"
// if the array is not in assending or dessending order then return "not in assending or dessending order"

const array = [1, 2, 3];
let length = array.length;
checking(array, length);

function checking(array, length){
    if(length == 1 || length==0){
        return 1;
    }
    if(array[length - 1] > array[length - 2]){
        return Ascending(array,length);
    }
    if(array[length - 1] < array[length-2]){
        return Descending(array, length);
    }
}
function Descending(array, length){ 
    if(length === 1 || length === 0){
        return  1;
    }   
    if(array[length - 1] > array[length - 2]){
        return 0;
    }
    return Descending(array, length - 1)
}

function Ascending(array, length){
    if(length === 1 || length === 0){
        return 1;
    }
    if(array.length - 1 < array.length - 2){
        return 0;
    }
    return Ascending(array, length - 1);
}

if(checking(array, length) != 0){
    if(Ascending(array, length) != 0){  
        console.log("in assending order");
    }
    else if(Descending(array, length) != 0){    
        console.log("in dessending order");
    }   
}
else{
    console.log("not in assending or dessending order");
}
