function sum(a,b){
    return a+b;
}

function dosum(a,b,sumcall){
    return sumcall(a,b);
}

 result = dosum(5,7,sum)

console.log(result)


const hello =()=> {
    console.log("Hello World!");
}

setTimeout(hello, 5000)

function getData(data, getNextData){
    setTimeout(()=>{
        console.log(`Data received: ${data}`);
        if(getNextData){
            getNextData();
        }
    },3000);
}

getData("Username");
getData("Email");
getData("Password");

getData("username", ()=>{
    console.log("Getting email");
    getData("Email", ()=>{
        console.log("Getting password");
        getData("Password");
    })
})
