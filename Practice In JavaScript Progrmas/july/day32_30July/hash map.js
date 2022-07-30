let countMap = new Map();

//Set and Get : two functions/operations on a Map
//Set -> set (key, value) in the map
//Get -> get value for a given key

countMap.set('a', 2);
countMap.set('b', 6);
countMap.set('c', 7);
countMap.set('a', 9);

console.log(countMap.get('c'))
