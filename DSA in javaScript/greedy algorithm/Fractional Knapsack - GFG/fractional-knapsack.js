//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let W = input_ar0[1];
        let arr = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2*n;i+=2)
            arr.push(new Item(input_ar1[i], input_ar1[i+1]));
        let obj = new Solution();
        let num = obj.fractionalKnapsack(W, arr, n);
        console.log(parseFloat(num).toFixed(2));
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} W
 * @param {Item[]} arr
 * @param {number} n
 * @returns {number}
*/

/*
class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}
*/

class Solution 
{
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        // code here
        
        let avg = [];
        
        
        for(let i  = 0; i < n; i++) {
            
            let w = arr[i].weight;
            let v = arr[i].value;
            
            avg[i] = v / w;
        }
        
       this.merge(avg, 0, n - 1, arr);
       
       let max = 0;
       for(let i = 0; i < n && W > 0; i++) {
           let weight = arr[i].weight;
           let value = arr[i].value;
           
           if(W > weight) {
               
               W -= weight;
               max += value;
           }
           
           else {
               
               
               max +=( avg[i] * W);
               
               W = 0;
           }
           
       }
       return max;
        
        
        
        
        
    }
    
    merge(avg, l, r, arr) {
        
        if(l >= r) return 
        
        let mid = l +  Math.floor( (r - l) / 2 );
        
        this.merge(avg, l, mid, arr);
        this.merge(avg, mid + 1, r, arr)
        
        this.mergeArray(avg, l, mid, r, arr)
    }
    
    mergeArray(avg, l, m, r, w) {
        
        let leftLen = (m - l ) + 1;
        let rightLen = r - m;
        
        let k = l
        
        const left = [];
        const right = [];
        const wr = [];

        const wl = [];

        
        
        for(let i = 0; i < leftLen; i++) {
            left[i] = avg[i + l];
            wl[i] = w[i + l];

        }
        
        for(let i = 0; i < rightLen; i++) {
            right[i] = avg[ i + m +  1]
            wr[i] = w[i + m + 1];
          
        }
        
        let i = 0; 
        let j = 0;
        
        while(i < leftLen && j < rightLen) {
            
            if(left[i] < right[j]) {
                avg[k] = right[j];
                w[k] = wr[j];

                j++;
            }
            else {
                avg[k] = left[i];
                w[k] = wl[i];

                i++;
            }
            k++;
        }
        
        while(i < leftLen){
                avg[k] = left[i];
                w[k] = wl[i];

                i++;
                k++;
        }
        
        while(j < rightLen) {
                avg[k] = right[j];
                w[k] = wr[j];
         
                j++;
                k++;
        }
    }
    
    
}









 