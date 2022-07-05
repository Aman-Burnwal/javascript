

let name1 = "Banti";
let wrongName = "abnit";

function anagram(name, wrongName){
    nLength = name.length;
    wLength = wrongName.length;

    if(nLength != wLength){
        return console.log("not same")
    }

    for(let i = 0; i < nLength ; i++){
        for(let j = 0; j < wLength; j++){
            if(name[i] === wrongName[j]){
                name.sbustr(i)
                break;
            }

        }
    }
    if(name.length > 0 || wrongName.length > 0){
        return console.log("not")
    }
    else{
        return console.log("Yes")
    }
}

anagram(name1, wrongName);