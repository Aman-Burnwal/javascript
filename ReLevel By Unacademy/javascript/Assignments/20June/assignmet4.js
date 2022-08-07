// 4. Seetha is working as a professor in a college and she is having 100+ student records and she wants
// to convert student’s names into uppercase. Write a program to help Seetha to Change the student
// name into uppercase.
// Constraint
// Input should be string not an number or any other data type
// Input string should be lowercase or uppercase letters
// Input Format
// The input should be string separated by new line
// Output Format
// Sort the given set of strings and print each string one by one.
// Sample Input 1:
// divya
// seetha
// shanmugi
// mohan khan
// mohan tata
// Output:
// DIVYA
// SEETHA
// SHANMUGI
// MOHAN KHAN
// MOHAN TATA

const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const upperCase = (arr) => {
    const lowerArr = LOWER_ALPHABET.split('');
    const upperArr = UPPER_ALPHABET.split('');
    const lowerObj = {};
    const upperObj = {};
    const outputArr = [];
    lowerArr.map((item, index) => lowerObj[item] = (index + 1));
    upperArr.map((item, index) => upperObj[index + 1] = item);
    
    arr.map(inp => {
        let newStr = '';
        inp.split('').map(item => {
        if (lowerObj[item]) {
            newStr += upperObj[lowerObj[item]];
        }
        else {
            newStr += item;
        }
    })
    outputArr.push(newStr)
    })
    
    return outputArr;
}

console.log(upperCase(["divya",
"seetha",
"shanmugi",
"mohan khan",
"mohan tata"]
))