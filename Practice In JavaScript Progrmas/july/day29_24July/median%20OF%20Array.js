function randomPivot(arr, l, r){
    let pivotIndex = Math.floor(Math.random() * (r - l) + l)
    
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[r];
    arr[r] = temp;
  }
  
  function partition(arr, l, r){
    randomPivot(arr, l, r);
    
    let pivot = arr[r];
    
    let i = l - 1;
    
    for(let j = l; j <= r - 1; j++){
      if(arr[j] < pivot){
        i++;
        //Swap arr[i] with arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    
    //Swap arr[i + 1] with arr[r]
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    
    return (i + 1);
  }
  
  function kthIndexElement(arr, l, r, k){
    let pIndex = partition(arr, l, r);
    
    if(pIndex === k){
      return arr[pIndex]
    }
    
    else if(pIndex < k){
      return kthIndexElement(arr, pIndex + 1, r, k);
    }
    
    else{
      return kthIndexElement(arr, l, pIndex - 1, k);
    }
  }
  
  function findMedian(arr){
    let n = arr.length;
    let median;
    
    if(n % 2 === 1){
      median = kthIndexElement(arr, 0, n - 1, Math.floor(n / 2));
    } else {
      let a = kthIndexElement(arr, 0, n - 1, Math.floor(n / 2));
      let b = kthIndexElement(arr, 0, n - 1, Math.floor(n / 2) - 1);
      median = (a + b) / 2;
    }
    
    return median;
  }
  
  
  let arr = [12, 3, 4, 7, 5, 19, 26, 23];
  //[3, 4, 5, 7, 12, 19, 23, 26]
  console.log(findMedian(arr))
  