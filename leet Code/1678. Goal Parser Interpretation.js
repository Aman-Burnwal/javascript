/**
 * quetion link : - https://leetcode.com/problems/goal-parser-interpretation/
 */


/**
 * You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
 

Constraints:

1 <= command.length <= 100
command consists of "G", "()", and/or "(al)" in some order.
 */


/**
 * @param {string} command
 * @return {string}
 */

// solution 1

// var interpret = function (command) {

//     let replaced = true;
//     while (replaced) {
//         replaced = false;
//         if (command.includes("()")) {
//             replaced = true;
//             command = command.replace("()", "o")
//         }

//         if (command.includes("(al)", "al")) {
//             replaced = true;
//             command = command.replace("(al)", "al");
//         }
//     }
//     return command;
// };

// solution 2
var interpret = function (command) {

    let result = ""
    for (let i = 0; i < command.length; i++) {

        if (command[i] === "G") {

            result += "G"

        } else if (command[i] === "(") {

            command[i + 1] === ")" ? result += "o" : result += "al"
            i++;
            
        }


    }
    return result;
}

const command = "G()()()()(al)";
console.log(interpret(command));