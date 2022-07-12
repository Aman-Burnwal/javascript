function Add(){
    var num1 = parseInt(prompt())
    var num2 = parseInt(prompt())
    var result = (num1 + num2);
    return document.getElementById("re1").innerHTML = result;

}
function Substract(){
    var num1 = parseInt(prompt())
    var num2 = parseInt(prompt())
    var result = (num1 - num2);
    return document.getElementById("re2").innerHTML = result;
    

}
function Multiply(){
    var num1 = parseInt(prompt())
    var num2 = parseInt(prompt())
    var result = (num1 * num2);
    return document.getElementById("re3").innerHTML = result;


}

function Divide(){
    var num1 = parseInt(prompt())
    var num2 = parseInt(prompt())
    var result = (num1 / num2);
    return document.getElementById("re4").innerHTML = result;
}
function Sqrt(){
    var num1 = parseInt(prompt())
    var num2 = 0.5
    var result = Math.sqrt(num1, num2);
    return document.getElementById("re5").innerHTML = result;
}
function power(){
    var num1 = parseInt(prompt())
    var num2 = parseInt(prompt())
    var result = Math.pow(num1, num2);
    return document.getElementById("re6").innerHTML = result;
}

