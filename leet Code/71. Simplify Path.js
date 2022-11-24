/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {


    let stack = []
    path = path.split("/")

    for (let i = 0; i < path.length; i++) {

        if (path[i] === "..") {
            stack.pop();
            stack.pop();
        } else if (path[i] === "." || path[i] === "") {
            continue;
        } else {
            stack.push("/")
            stack.push(path[i])
        }
    }

    return stack.length === 0 ? "/" : stack.join("")
};


console.log(simplifyPath("/a//b////c/d//././/.."))
// "/../"
// "/home//foo/"
// "/a/./b/../../c/"
// "/a/../../b/../c//.//"
// "/a/../../b/./c//.//"