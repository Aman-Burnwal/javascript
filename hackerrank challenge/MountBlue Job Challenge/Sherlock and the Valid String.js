function isValid(s) {
    // Write your code here

    let map = new Map();


    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            
            let temp = map.get(s[i]);

            temp += 1;
            map.set(s[i], temp)
        } else map.set(s[i], 1);
    }

    

    let freqMap= new Map()
    
    for (const value of map.values()) {

        if (freqMap.has(value)) freqMap.set(value, freqMap.get(value) + 1);
            
        else freqMap.set(value, 1);
    }

    map.clear();

    if (freqMap.size === 1) return "YES";
    
    else if (freqMap.size === 2) {

        // storing keys
        let [k1, k2] = freqMap.keys();
        // storing values
        let [v1, v2] = freqMap.values();
        
        if ((k1 === 1 && v1 === 1) || (k2 === 1 && v2 === 1)) return "YES";

        else if (Math.abs(k1 - k2) === 1 && (v1 === 1 || v2 === 1)) return "YES";
        
    }
    return "NO"


    
}


console.log(isValid("aabbcd"))