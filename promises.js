// const promise = new Promise((resolve, reject) => {
//     console.log("Async task Execution")
//     if(false)
//     {
//         const person = {name:"Sachin"}
//         resolve(person);
//     }
//     else
//     { 
//         const errcode = "404"
//         reject(errcode);
//     }
// });

// promise.then(
//     (val)=>{console.log(val)},
    // (val)=>{console.log(val)}
// ).catch(()=>{console.log("Failed!")})
// .finally(()=>{console.log("Clean up")})


// promise chaining 

const p = Promise.reject("err")

p.then((val)=>{
    console.log(val)
     return "done2"})
.then((val)=>{
    console.log(val);
   return "done3";})
    
.then((val)=>{
    console.log(val);
})
.catch((err)=>{console.log(err)})