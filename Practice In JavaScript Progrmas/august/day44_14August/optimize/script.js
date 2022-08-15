
document.getElementById("btn").onclick = function (event)
{
   var mystring = document.getElementById('str').value;
  //write logic to find the length of string
    var length = mystring.length;
    document.getElementById('len').value = length;
    document.innerHTML =  len;

    
}

document.getElementById("btn2").onclick = function (event)
{
    palindrome(document.getElementById('len').value);
    document.innerHTML =  "len";

}
function palindrome(myString){

//write palindrome logic
    var len = myString.length;
    var mid = Math.floor(len/2);

    var first = myString.substring(0,mid);
    var last = myString.substring(mid+1,len);

    var reverse = last.split("").reverse().join("");

    if(first == reverse){
        document.getElementById('len').value = true;
        
    }   else{
        document.getElementById('len').value = false;
        
    }
    
    


}
