const readline = require('readline');
const prompt = require('prompt-sync')();
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// rl.question("What is Your name : ", (name)=>{
//     console.log(`hii ${name}`)
//     rl.close();
// })

const name = prompt("What is your name : ");
console.log(name);