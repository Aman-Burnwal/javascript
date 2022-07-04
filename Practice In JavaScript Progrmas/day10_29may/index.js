let n = parseInt(readline());
	while(n--)
   {
      let arr = [];
	arr = readline().split(" ");
	var a = arr[0];
	var b = arr[1];
	var c = arr[2];
      var l;
// write your code here
    arr = "45 23 54"
	if((a > b && a < c) ||(a < b && a > c)){
    	console.log(a);
	}else if((b > a && b < c) || (b < a && b > c)){
    	console.log(b)
	}else{
    	console.log(c);
	}
}