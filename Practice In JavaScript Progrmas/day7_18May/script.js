// var num = 5;

// if(num % 2 === 0){
//     console.log("even");
// } else{
//     console.log("Odd")
// }

// var a = 4;
// console.log(typeof(a));
// var a = "Aman"
// console.log(typeof(a));

// var i = 0,j=0;
// for(i=0;i<5;i++){
// for(j=0;j<4;j++){
// if(i>1)
// break;
// }
// console.log("Relevel  " + i + "   " + j);
// }

// var n = 8;
// function isPerfectSquare(n){
//     var x=Math.floor(Math.sqrt(n));
//     if(x*x==n){
//     return true;
//     }
//     else{
//     return false;
//     }
// }

// console.log(isPerfectSquare(81));



// A function to check if n is palindrome
function isPalindrome(n)
{
	// Find reverse of n
	var rev = 0;
	for (var i = n; Math.trunc(i) > 0; i /= 10)
	{
		rev = ((rev*10) + (Math.trunc(i)%10));
		
		}

	// If n and rev are same, then n is palindrome
	return (n==rev);
}
	

// prints palindrome between min and max
function countPal(min, max)
{
	for (var i = min; i <=max; i++)
	{
		if(isPalindrome(i))
		document.write(i+" " );
	}
}

// Driver program to test above function
countPal(100 , 150);
