// const error = new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message)

const { CustomError } = require("./CustomError");

// const CustomError = require("./CustomError");

// throw new CustomError("Something went wrong");

// caught exception
// try{
//     dosomething();
// }catch(e){
//     console.log("Something went wrong");
//     console.log(e);
// }

function dosomething() {
    const data = fetch("localhost:3000/api")
    // console.log("Hii, I am from the dosomething fuction");
    return data 
}



// process.on("uncaughtException", (error)=>{
//     console.log("there is an uncaught exception");
//     process.exit(1);
// })

//  Exception with promises

// const promis = new Promise((resolve, reject)=>{
//     if(true){
//         resolve(dosomething());
//     }else{
//         reject(dosomething());
//     }
// })


// promis.then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log("Error occured ");
//     console.log(err);
// })


// Exception with async and await
const Something = async ()=>{
    try{
        await dosomething();
    }
    catch(e){
        throw new  CustomError(e.message);
    }
}

Something();