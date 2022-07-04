const array = [1, 2, 3];
length = array.length;
// checkingArray(array, length);

function checkingArray(array, length){
  if(length == 1 || length == 0){
    return 1;
  }

  if(array.length - 1 < array.length - 2){
    return Descending(array, length);
  }

  if(array.length - 1 > array.length - 2){
    return Ascending(array, length);
  }
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

function Descending (array, length){
  if(length === 1 || length === 0){
    return 1;
  }
  if(array.length - 1 > array.length - 2){
    return 0;
  }
  return Descending(array, length - 1);
}

if(checkingArray(array, length) != 0){
  if(Ascending(array, length) != 0){
    console.log("Ascending Order");
  }
  if(Descending(array, length) != 0){
    console.log("Descending Order");
  }
} else{
  console.log("Not in Ascending or Descinding");
}