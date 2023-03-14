function countingValleys(steps, path) {
    // Write your code here

    let valley = 0;

    let sealLevel = 0;

    for (let i = 0; i < path.length; i++) {

        if (path[i] === "U") {
            
            sealLevel++
        }

        else {

            if (sealLevel === 0) valley++;

            sealLevel--;
        }
    }

    return valley;

}