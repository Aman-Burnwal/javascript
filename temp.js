
function solution (n) {


  for (i = 1; Math.pow(i, 3) <= n; i++) {

    for (j = n; j > 1; j = Math.floor(j / 3)) {

      for (k = 1;  Math.pow(k, 2) <= Math.pow(n, 5); k = k + 1) {

        console.log("a")
      }
      console.log("break")
    }
  }


}

solution(2)




