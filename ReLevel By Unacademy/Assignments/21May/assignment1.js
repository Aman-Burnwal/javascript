/* Requirements: "Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location, and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”
*/

function astroguru(num_Of_Children, spouses_name, location, job){

    return console.log(`You will be a ${job} in ${location} and married to ${spouses_name} with ${num_Of_Children}.`)

}

astroguru(2,  "Aman", "India","Software Engineer");