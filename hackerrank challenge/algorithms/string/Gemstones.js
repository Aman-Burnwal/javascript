function gemstones(arr) {
    // Write your code here

    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0].length;

    let set = new Set();

    for (let i = 0; i < arr[0].length; i++) {

        set.add(arr[0][i]);
    }


    for (let i = 1; i < arr.length; i++) {

        let temp = arr[i];
        let tempSet = new Set();
        for (let j = 0; j < temp.length; j++) {

            if (set.has(temp[j])) tempSet.add(temp[j]);


        }

        set = tempSet;
    
       
    }

    return set.size;


}






console.log(gemstones(["basdfj", "asdlkjfdjsa","oafhdlasd", "bnafvfnsd"]));