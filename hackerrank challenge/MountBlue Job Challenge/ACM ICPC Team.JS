
function acmTeam(topic) {


    let count = 0;
    let max = [];
    
    for (let i = 0; i < topic.length - 1; i++) {

        let a = topic[i].split("")
        // console.log(a, i);

        for (let k = i +  1; k < topic.length; k++) {

            let sum = 0;
            let b = topic[k].split("")
            // console.log(a, b);


            for (let j = 0; j < a.length; j++) {
                

                sum += Number(b[j]) | Number(a[j])
            }
            if (max.length === 0) max.push(sum);
                
            else if (max[max.length - 1] === sum) max.push(sum);
            
            else if (max[max.length - 1] < sum) {
                
                while (max.length && max[max.length - 1] < sum) {
                    max.pop();
                }
                max.push(sum);
            }
            

        }
    }

    let ans = [max[0], max.length]
    return ans;


}


const table = [
    "10101",
    "11100",
    "11010",
    "00101"
];
// console.log(0 | 0)

console.log(acmTeam(table));
