async function getdata(){
    let respone = await fetch("https:covid19.mathdro.id/api");
    let data = await respone.json();
    return data;
}

getdata().then((d) => {
    console.log(d.confirmed.value);
})