// https://www.hackerrank.com/contests/mountblue-technologies/challenges/mars-exploration/submissions/code/1358044864

function marsExploration(s) {
    // Write your code here

    let totalSOS = s.length / 3;
    let ans = 0;

    for (let i = 1; i <= s.length; i++) {

        if (i % 3 === 1) {

            if (s[i - 1] !== "S") ans++;
        }
        else if (i % 3 === 2) {

            if (s[i - 1] !== "O") ans++;
        }
        else if (i % 3 === 0) {

            if (s[i - 1] !== "S") ans++
        }
    }

    return ans;

}


// optimized solution

function marsExploration(s) {

    let orignalMessage = "SOS";
    let wrongCharacter = 0;
    for (let i = 0; i < s.length; i+= 3) {

        let message = s.slice(i, i + 3);

        if (message !== orignalMessage) {
            
            for (let j = 0; j < 3; j++) {

                if (message[j] !== orignalMessage[j]) wrongCharacter++;
            }
        }
    }
    return wrongCharacter;
}