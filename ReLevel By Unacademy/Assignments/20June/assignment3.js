// 3. Assume that the input will be a word with odd letter count. Print the output as given below.
// start with middle letter from first line. Next line two letter from middle . Continue still you print all
// letters in last line. Then start with the first letter and continue for the remaining letters.
// Constraint
// Input string length should be odd number not even
// Input Format
// The input should be string separated by space
// Output Format
// Start with middle letter from first line. Next line two letter from middle . Continue still you print all letters in
// last line. Then start with the first letter and continue for the remaining letters.
// Sample Input 1 :
// W E L C O M E

// Explanation: Start with middle letter ‘C’ from first line. Next line two letter ‘C O’ from middle . Continue still
// you print all letters in last line. Then start with the first letter and continue for the remaining letters.
// Output :
//             C
//           C O
//         C O M
//       C O M E
//     C O M E W
//   C O M E W E
// C O M E W E L


const oddLetter = (letter) => {

    const letterArr = letter.split(' ');
    const letterLen = letterArr.length;
    const middle = (letterLen - 1) / 2;
    const newLetter = letterArr.slice(middle).concat(letterArr.slice(0, middle))
    const arr = [];
    letterArr.forEach(element => {
        arr.push(newLetter.join(' '));
        newLetter.pop();
        newLetter.unshift(' ');
    });
    arr.reverse();
    return arr.join('\n');
}

console.log(oddLetter('R E L E V E L'))