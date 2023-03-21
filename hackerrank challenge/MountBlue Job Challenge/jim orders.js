function jimOrders(orders) {
    // Write your code here

    for (let i = 0; i < orders.length; i++) {
        orders[i] = [orders[i][0] + orders[i][1], i];
    }

    
    let time = []

    for (let i = 0; i < orders.length; i++) {
        
        let minind = i;
        for (let j = i + 1; j < orders.length; j++) {

            if (orders[minind][0] > orders[j][0]) {

                minind = j;
            }
        }

        if (minind !== i) {
            
            let temp = orders[minind];

            orders[minind] = orders[i];
            orders[i] = temp;
            
        }
        time.push(orders[i][1] + 1)
       
    }

   


    return time;

  

}

const orders = [
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3]

];
    
console.log(jimOrders(orders))

console.log(9 > 9)