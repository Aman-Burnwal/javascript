// 2) Write a program to find the second smallest number from array using loops concept
// Input -> [11,34,54,22,13,78]
// Output -> 13

const arr = [11,34,54,22,13,78]

console.log(secondLargestNumber(arr));

function secondLargestNumber(arr) {

    let length = arr.length;

    if(arr.length < 2) 
        return;
    
    
    let firstsmallest = arr[0], secondsmallest =arr[1];

    if(firstsmallest < secondsmallest) {
        let temp = firstsmallest;
        firstsmallest =  secondsmallest;
        secondsmallest = temp;
        
    }

    for (let i = 0; i < length; i++) {

        if(arr[i] < firstsmallest) {

            secondsmallest = firstsmallest;
            firstsmallest = arr[i];
                
        }else if (arr[i] < secondsmallest && arr[i] != firstsmallest){

            secondsmallest = arr[i];
        }
            
    }

    return secondsmallest;
}