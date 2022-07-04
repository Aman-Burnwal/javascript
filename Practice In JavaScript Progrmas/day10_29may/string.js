var fname = "ama";

var reversename = "";
for(let i = fname.length-1; i >= 0; i--){

    reversename = reversename + fname[i];
}

console.log(reversename);


if(fname === reversename){
    console.log("pali")
}