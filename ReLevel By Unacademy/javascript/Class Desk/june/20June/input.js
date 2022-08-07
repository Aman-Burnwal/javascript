// • Using process, we can get the input in a single time
// • Create a file named testStdinUsingProcess.js or a name you
// prefer and write the below mentioned code in it and then try
// running the code.


process.stdin.resume();
process.stdin.setEncoding('utf8');

//declare global variable
var input_stdin = "", chunks = "", input_currentTime = 0

//standard input is stored into input_stdin
process.stdin.on('data', function(data) {
    input_stdin += data;
})

//standard input is done and stored in an array
process.stdin.on('end', function(){
    chunks = input_stdin.split("\n");
    start();
})

function start() {
    maxcount = chunks.shift();
    chunks = chunks.filter(function(e){return e});

    chunks.forEach(function(val, index){
        if(maxcount -- > 0) {
            solveProblem(val);
        }
    })
}


function solveProblem(numba) {
    var solution = checkfactorial(numba);
    console.log(solution);
}

function checkfactorial(number) {
    var temp = 1;
    var sum = 0;
    
    while(temp <= number) {
        temp = temp*5;
        sum = sum + Math.floor(number/temp);
    }
    
    return sum;
}
