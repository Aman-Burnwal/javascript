// brute force method
// time complexity (o^2);

function minimumDistances(a) {
    // Write your code here

    let minIndex = Infinity;

    for (let i = 0; i < a.length; i++) {
    
        for (let j = i + 1; j < a.length; j++) {

            if (a[i] === a[j]) {

                minIndex = Math.min(minIndex, Math.abs(i - j));           
            }
        }  
    }
    return minIndex === Infinity ? -1 : minIndex;
}



function minimumDistances(a) {

    let map = {};

    let minIndice = Infinity;

    for (let i = 0; i < a.length; i++) {

        if (a[i] in map) {
            
            let distance = i - map[i];

            minIndice = Math.min(distance, minIndice)
        }
    }

    return minIndice === Infinity ? -1 : minIndice;
}