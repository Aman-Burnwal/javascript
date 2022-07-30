// 2. Distance to Office (15 min):

// Problem Statement:
// A man reaches his office `y` min late when he travels at x km/hr. If he travels at x+2 km/hr then he
// reaches the office `y-10` min early. Find the distance between his home and office given the value
// of x and y.
// Example:

// Input x=4, y=20
// Output 6


// Example Explanation:
// Suppose the distance between the office and home is D and the time he takes to reach the office
// is T minutes.
// Case-1: when he reaches the office 20 minutes late the time taken to cover the distance D would
// be T+20
// Case-2: When he reaches the office 20-10 i.e. 10 minutes earlier then the time taken taken to
// cover D is T-10
// Now in both the cases Distance is same, therefore `(T+20)*4` = (T-10)*6 . On solving we get T = 70
// minutes.
// Now using this T in any of the case say case 1 we get D = 90 * 4 = 360 minutes * km / hr = 6 km/hr



var x = 4;
var y = 20;
let time = y * (x+1) - 5 * (x+2) ;
let distance = ( (y+time) / 60 ) * x ;
console.log("Distance between the house and office is : ",distance," km");
