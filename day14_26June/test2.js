let  n = parseInt(readline());
            let  arr =[];
arr = readline().split(" ");
console.log(countOddNumbers(arr, n));

function countOddNumbers(arr, n){
// write your logic here
    let count = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 != 0){
            count++;
        }
    }
	
}