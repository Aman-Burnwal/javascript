let string1 = 'Shrey';
let string2 = 'Shreyas'
let string3 = 'Shreyansh'
let string4 = 'Shreyansh'

//Shrey, Shreyansh, Shreyas

//Syntax
// referenceString.localeCompare(comparisonString)
// if referenceString should come before comparsionString, output = -1
// if referenceString should come after comparsionString, output = 1
// if referenceString is same as comparsionString, output = 0


console.log(string1.localeCompare(string2)) // referenceString comes before comparsionString, output = -1

console.log(string2.localeCompare(string1)) // referenceString comes after comparsionString, output = 1
console.log(string2.localeCompare(string3)) // referenceString comes after comparsionString, output = 1

console.log(string3.localeCompare(string4)) // referenceString comes same as comparisonString, output = 0