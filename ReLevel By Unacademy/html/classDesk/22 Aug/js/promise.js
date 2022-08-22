function promiseExmaple() {

    let iserror = false;

    return new Promise((resolve, reject) => {
        let data = "hello"
        let error = null;
        setTimeout(() => {
            if(iserror === false) {
                resolve(data);
            } else {
                reject(error)
            }
        })
    })
}

promiseExmaple().then((d) => {
    console.log(d)
}).catch((err) =>{
    console.log(err);
})