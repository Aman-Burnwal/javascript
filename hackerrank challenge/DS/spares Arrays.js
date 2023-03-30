// brute force method

function matchingStrings(stringList, queries) {
    // Write your code here

    let queriesIs = [];

    for (let i = 0; i < queries.length; i++) {

        let query = queries[i];
        let count = 0;
        for (let j = 0; j < stringList.length; j++) {

            if (query === stringList[j]) count++;
        }
        queriesIs.push(count);
    }
    return queriesIs;


}


// optimize code



function matchingStrings(stringList, queries) {
    // Write your code here

    let count = {};


    for (const stirng of stringList) {
        
        count[stirng] = (count[stirng] || 0) + 1;

    }

    let result = [];

    for (const query of queries) {
        
        result.push((count[query] || 0));
    }

    return result;


}