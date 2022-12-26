
// The absolute a

// Given an absolute a for a file as A.
// Return the string A as a simplified absolute a

// Note: a is in Unix System format In Unix - style file system:
//  A period '.' refers to the current directory.
// A double period '..' refers to the directory up a level.
// Any multiple consecutive slashes '//' are treated as a single slash '/'.
// In Simplified Absolute a: 
// The a starts with a single slash '/'.Any two directories are separated by a single slash '/'.
// The a doesn't end with trailing slashes ' / '.
//  The a only contains the directories on the a from the root directory to the target file 
// or directory(i.e., no period '.' or double period '..') a will not have whitespace characters
// .Input Format The only argument given is string A.

// Output Format Return a string denoting the simplified absolue a for a file(Unix - style).

//     Samples 1: Input: A = "/home/" Output: "/home"

// Samples 2: Input: A = "/a/./b/../../c/" Output: "/c"
function simplifyPath(a) {



}

console.log(simplifyPath("/home/"))