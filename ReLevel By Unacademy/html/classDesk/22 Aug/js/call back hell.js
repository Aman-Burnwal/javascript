function simpleFun() {

    setTimeout(() =>{
        console.log("Data from api 1");

        setTimeout(()=> {

            console.log("Data from api 2");

            setTimeout(() => {

                console.log("Data from api 3");

                setTimeout(() => {
                    console.log("Data from api 4")
                }, 2000)

            },4000)

        }, 2000)

    }, 5000)


    setTimeout(() => {
        console.log("This is another api")
    }, 6000)
}

simpleFun();