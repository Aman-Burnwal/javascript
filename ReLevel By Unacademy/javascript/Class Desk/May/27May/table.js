// Problem - 1
// Write a program to create a Mathematical calculation table from 0 to given number n.


function mathTable(table, n) {
    console.log("The table of ", table, " and ", n, " is :--------------->>>>>>>>>>>>>>>>>>>>>>>")
    for(let i = 1; i <= n; i++){
        console.log(table, " *  ", i, "   =  ", table * i);
        
    }
}
mathTable(5, 10);