// Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
// Input – [2,3,15,6]
// Output –
// Minimum element - 2
// Maximum element - 15
// Approach – We can use linear search technique in this.
// Steps -
// 1) Initialize min and max to minimum and maximum of first 2 elements
// 2) Iterate through array from index 3rd and update min and max respectively after comparison
// 3) Return the output


const arr = [1, 2, 6, 2, 0, -1, 43, 94, 4];
minAndMax(arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

/*
function minAndMax (arr) {
    let min = arr[0];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return console.log(min, max);
}
*/


//using object

  


//Minimum and maximum element
//Input: arr, Output: object

/*
object = {
	min: value,
  max: value
}
*/
//Declare an object
function MinMax(min, max){
    this.min = min;
    this.max = max;
  }
  
  //Function to find min and max of an array
  function findMinMaxInAnArray(arr){
    //let minmaxObj = new MinMax(arr[0], arr[0]);
    let minmaxObj = {
      min: arr[0],
      max: arr[0]
    }
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < minmaxObj.min){
        minmaxObj.min = arr[i];
      }
      
      if(arr[i] > minmaxObj.max){
        minmaxObj.max = arr[i];
      }
    }
    
    return minmaxObj;
  }
  
  let arr1 = [5, 7, 4, 3, -1, 99, 45, 0, -5];
  let ans = findMinMaxInAnArray(arr1);
  console.log(`Minimum number is ${ans.min} and maximum number is ${ans.max}`);
  