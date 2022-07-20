function mergeSortedArrays(arr, l, m, r){
    //First sorted array -> l to m
    //Second sorted array -> m + 1 to r
    
    let firstArrayLength = (m - l) + 1
    let secondArrayLength = e - m
    
    let leftPart = new Array(firstArrayLength);
    let rightPart = new Array(secondArrayLength);
    
    for(let i = 0; i < firstArrayLength; i++){
      leftPart[i] = arr[l + i];
    }
    
    for(let j = 0; j < secondArrayLength; j++){
      rightPart[j] = arr[m + 1 + j]
    }
    
    let i = 0, j = 0, k = l;
    
    while(i < firstArrayLength && j < secondArrayLength){
      if(leftPart[i] <= rightPart[j]){
        arr[k] = leftPart[i];
        i++;
      } else{
        arr[k] = rightPart[j];
        j++;
      }
      k++;
    }
    
    while(i < firstArrayLength){
      arr[k] = leftPart[i];
      i++;
      k++;
    }
    
    while(j < secondArrayLength){
      arr[k] = rightPart[j];
      j++;
      k++;
    } 
  }
  
  
  function mergeSort(arr, l, r){
    if(l >= r){
      return;
    }
    
    let m = l + parseInt((r - l) / 2)
    
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    mergeSortedArrays(arr, l, m, r)
  }
  
  let arr = [5, 3, 2, 99, 0, 4]
  mergeSort(arr, 0, arr.length - 1)
  console.log(arr)
  