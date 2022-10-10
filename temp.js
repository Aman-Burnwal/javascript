function twoSum(a,n) {
  let l = 0;
  let r = a.length-1
  
  while (l < r) {
    sum = a[l] + a[r]
    if(sum > n){
      r--;
    }

    else if(sum === n)
    {
      return [l,r]
    }

    else{
       return "No target match...!"
      }
  }
}

let a = [2,7,11,15]
console.log(twoSum(a,9))