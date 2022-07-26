/*roblem Statement 
Given a number N. Your task is to find the consecutive numbers which are adding up to give N

For example –

Input -
10

Output -

1,2,3,4

Steps -
1.	 Iterate from 1 to N/2
2.	Verify if adding consecutive numbers giving N else skip that sequence and check for another
*/


function consecutive(N) {

    let start = 1, end = Math.trunc((N + 1) / 2);


    while (start < end) {

        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum = sum + i;

            if (sum == N) {

                for (let j = start; j <= i; j++)
                    console.log(j + " ");

                console.log();
                break;
            }


            if (sum > N)
                break;
        }
        sum = 0;
        start++;
    }
}


let N = 15;
consecutive(N);