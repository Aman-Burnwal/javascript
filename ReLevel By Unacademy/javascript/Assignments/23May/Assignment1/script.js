var data={
    'Alex':'Developer',
    'John':'Artist',
    'Strek':'Singer',
    'Smith':'Actor'
    }
    function designation(){
    let empName=document.getElementById("name").value;
    if(data[empName]!= undefined){
    document.getElementById("designation").innerHTML = empName + " is
    "+data[empName]
    }
    }