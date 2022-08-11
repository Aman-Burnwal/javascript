// Problem - 5

// Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

// Example-1
// Input:   A: [1 2 3 3 4 5 6] 
//          B: [3 3 5]

// Output: [3 3 5]


function printIntersection(arr1, arr2, m, n) {
    let i = 0, j = 0;

    while (i < m && j < n) {
      if (arr1[i] < arr2[j])
        i++;
      else if (arr2[j] < arr1[i])
        j++;
      else {
        console.log(arr2[j] + " ");
        i++, j++;
      }
    }
  }
  
  var arr1 = [1, 2, 3, 3, 4, 5, 6];
  var arr2 = [3, 3, 5];
  
  var m = arr1.length;
  var n = arr2.length;
  
  printIntersection(arr1, arr2, m, n);
  



