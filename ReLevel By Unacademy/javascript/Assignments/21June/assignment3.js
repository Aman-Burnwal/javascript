// Question 3: Create an JSON object for grades of a class having structure
// {"name": 'John', "grade": 8, "sex": 'M'},
// Also write a program to find classroomAverage ,boysAverage ,girlsAverage,highestGrade and lowestGrade

var grades = [{
    "name": 'John',
    "grade": 8,
    "sex": 'M'
},
{
    "name": 'Sarah',
    "grade": 12,
    "sex": 'F'
},
{
    "name": 'Bob',
    "grade": 16,
    "sex": 'M'
},
{
    "name": 'Johnny',
    "grade": 2,
    "sex": 'M'
},
{
    "name": 'Ethan',
    "grade": 4,
    "sex": 'M'
},
{
    "name": 'Paula',
    "grade": 18,
    "sex": 'F'
},
{
    "name": 'Donald',
    "grade": 5,
    "sex": 'M'
},
{
    "name": 'Jennifer',
    "grade": 13,
    "sex": 'F'
},
{
    "name": 'Courtney',
    "grade": 15,
    "sex": 'F'
},
{
    "name": 'Jane',
    "grade": 9,
    "sex": 'F'
}
];
let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grade))
)
console.log(average(grades));
console.log(average(getBoys(grades)));
console.log(average(getGirls(grades)));
console.log(maxGrade(grades));
console.log(minGrade(grades));
