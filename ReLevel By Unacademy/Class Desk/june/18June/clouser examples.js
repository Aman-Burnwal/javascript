/**
 * 
    ● In this example function counter is
 *  returning the function which is called as
 *  anonymous function and that function is
 *  referring the variable which is available in
 *  the parent function.  
   
    ● In the 10th line we are calling the function
 *  counter and storing the anonymous
 *  function in the variable, then calling the
 *  anonymous function will make the
 *  variable in the parent function available
 *  for child function.
 
    ● This concept is used to achieve the
*   private function in javascript.

 */


function counter() {
    let count = 0

    return function sum(value) {
        count += value;
        console.log(count);
    }
} 


let count1 = counter();

count1(1);

count1(2);

count1(3);
count1(4);

let count2 = counter();

count2(1);
count2(4);
