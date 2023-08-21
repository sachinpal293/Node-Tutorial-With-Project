const prompt = require('prompt-sync')();
const userlogin = ()=>{
    console.log("Enter User Name and passwors ");
    
    let username = prompt("Enter User Name : ");
    let password = prompt("Enter Password : ");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Performing User Authentication ");
            if(username==='sachin' && password==='123')
            {
                resolve("User Authenticated");
            }else
            {
                reject("Authentication Faild");
            }
        },1000);
    })
}

function goToHome(userAuthStatus) 
{
     return Promise.resolve(`Go To Homepage as ${userAuthStatus}`)
}

// userlogin().then((response) =>
// {
//     console.log("User Valid")
//    return goToHome(response);
// }).then((response) =>
// {
//     console.log(response);
// }).catch((err)=>{
//     console.log(err);
// })


// perform same task through async await
async function performTask () {
    
    try{
    const response = await userlogin();
    console.log("Valid user");
    const authstatus = await goToHome(response);
    console.log(authstatus);
    }catch(e){
        console.log(e);
    }
}

performTask();