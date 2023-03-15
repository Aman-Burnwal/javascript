
function dayOfProgrammer(year) {
    // Write your code here

    // days according to the month;
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = 256;

    
    // question says in year 1998 february started from 14th feb it means 32 days was not 1st feb
    // it was 14th feb thats why we are adding 13 days in days;
    if (year === 1918) {
        day += 13;

        // Gregorian calendar, leap years are either of the following:

        // Divisible by 400.
        // Divisible by 4 and not divisible by 100.
    } else if (year > 1918 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        days[1] = 29;

        //  Julian calendar, leap years are divisible by 4;
    } else if (year < 1918 && year % 4 === 0) {
        days[i] = 29;
    }


    let month = 0;
    let i = 0;

    while (day > 28) {
        day -= days[i];
        i++;
        month++;
    }

    return `${day}.${month}.${year}`

}


console.log(dayOfProgrammer(1800))