// Problem Statement 

// Given a number N. You need to print a reverse pyramid having N rows using numbers 1 to N. For
// example -


// Input -

// 6

// Output -
//   1 2 3 4 5 6
//    2 3 4 5 6
//     3 4 5 6
//      4 5 6
//       5 6 
//        6


// Steps -

// 1.	 Outer loop - iterate from 1 to N - variable i

// 2.	Inner loop 1 - print space (Iterate from 1 to i) - variable j

// 3.	Inner loop 2 - print number(Iterate from i to N) - variable j

// 4.	Print new line




function pyramid (N) { 
    let blanck = ""

    for(let i = 1; i <= N; i++) {

        let num = i;
        for (j = i + 1; j <= N; j++) {

            num += " " + j 

        }
        console.log(blanck + num + blanck)
        blanck += " "
    }
    return;
    
}

pyramid(6);
