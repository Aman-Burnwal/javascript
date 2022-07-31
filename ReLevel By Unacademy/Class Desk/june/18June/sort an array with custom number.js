// Write a program to sort an integer array with custom number as reference.
// Sample Input:
// 2356481790
// 0 1 2 3 9 5 6 2 8 1 9
// Sample Output:
// 2 2 3 5 6 8 1 1 9 9 0
//  Explanation:
// • Our current integer is not 0123456789 it is 2356481790 as per the given input format.
// • So the integer should be sorted in the given order and the output is 2 2 3 5 6 8 1 1 9 9 0



const customSort = (order, arr) => {

    const numberObj = {};
    const resArr = [];

    order.split('').map((item, index) => {
        numberObj[item] = {
            value: [],
            order: index
        };
    })

    arr.map(item => {
        numberObj[item].value.push(item);
    });

    const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > b.order) ? 1 : -1);

    Object.values(sortedObj).map(item => {
        resArr.push(...item.value)
    });
    
    return resArr.join(' ');
}

const order = '2356481790';

const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
console.log(customSort(order, arr));
