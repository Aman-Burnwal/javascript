// closure is a combination of function and lexcical enviornment

// lexcical enviornmet are those who is accessed by a function out side the function

// closures are automatically created while we create a closure

function outerFunction () {
    let data = "This is a lexcila enviornment";

    function innerFunction () {
        console.log(data)
    }

    // innerFunction();

    return innerFunction;
}

// calling the function here;
// outerFunction();


let print = outerFunction();

print();




