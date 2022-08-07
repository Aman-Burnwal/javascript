/*
Sort Array of 0,1
Given an array having 0,1 as input.We need to write a function that sorts the array in ascending order without using inbuilt
sort function
Expected time complexity :O(n)
Expected space complexity:O(1)
Example:
Input: {0, 1, 1,0, 0, 1}
Output: {0, 0, 0, 1, 1, 1}
Input:{0,0,1,1,0,1,0}
Output:{0,0,0,0,1,1,1}

Approach:
We divide the array into three parts .Part one containing the zeros,second part containing the values
which can be zero or one and the last part containing one.If the element in second part is zero will
reduce the size of second part,if the element is one will move it to the third part and reduce the size
of second part.

Algorithm
1)We will have two indices mid=0,end=N and there are three parts
(0,mid):the elements here will be 0
(mid,end):the elements here can be 0,1
(end,N):the elements here will be 1
Where N = size of the array

2)We will be traversing the array from start to end until mid is less than end

3)If the mid element is 0,increment mid by one

4)If the mid element is 1,will swap with the element at index end and decrement the value of end by one

6)We will continue doing this till the mid value is less than the end.








Complexity Analysis:

Time Complexity :O(n)
Only one iteration of the array is made

Space Complexity:O(1)
No extra space is required
*/



function sortZeroesAndOnes(arr){
    let end = arr.length - 1;
    let mid = 0;

    while(mid < end) {
        arr[mid] === 0 ? mid++:""
        if(arr[mid] === 1) {
            let temp = arr[mid];
            arr[mid] = arr[end];
            arr[end] = temp;
            mid++;
            end--
        }
    }
    return arr;
    
}

let arr = [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0];
console.log(sortZeroesAndOnes(arr))
