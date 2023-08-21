const makeapiCall = (time) =>{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve("This API is Executed  in: "+ time);
        },time);
    });
};

let multicall =[makeapiCall(2000), makeapiCall(1000),makeapiCall(500)];

Promise.all(multicall).then((values)=>{
    console.log(values);
})

Promise.race(multicall).then((values)=>{
    console.log(values);
})