// create  a function that takes a string and returns the number of vowels in the string

function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}



console.log(countVowels('hello'));