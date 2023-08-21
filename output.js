// const a = '1'
// const b = '2'
// console.log(a, b)

// format specifier in the node 
// %s for string representation
// %i for integer representation
// %d for floating point
// %o for octal representation

// console.log("My name is %s and i am %d years old","Sachin kumar pal", 23);

// console.clear();
// console.count("Sachin");
// console.count("Sachin");
// console.count("Sachin");
// console.count('Nisha')
// console.countReset("Sachin")
// console.count("Sachin")

// for measure the time taken by the function
// const sum = () => console.log(2+5);
// const mul = () => console.log(7*6);

// const measure = () =>{
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("mul()");
//   mul();
//   console.timeEnd("mul()");

// }

// measure();

const progressBar = require('progress')
const chalk = require('chalk');
const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas",{
    total : 100,
})

const time = setInterval(() =>
{
    bar.tick();
    if(bar.complete)
    {
        clearInterval(time);
        console.log(chalk.green('Downloding successfull'))
    }
},100)

