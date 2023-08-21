const path = require('path')

const filepath = "\\Users\\Dell\\Desktop\\Web Development\\Node in one\\filepath\\sample.txt";

// console.log(path.dirname(filepath));

// console.log(path.basename(filepath));

// console.log(path.extname(filepath));

// console.log(__dirname )
// console.log(__filename)


// const samplefile = "sample.txt";

// console.log(path.join(path.dirname(filepath),samplefile));



const fs = require("fs");
const fsPromise = require("fs").promises;
// console.log(filepath)
// Reading from  A FILE Async
// fs.readFile(filepath,"utf-8",(err, data) => {
//     if(err) throw new Error("Something went wrong");
//     console.log(data);
// })

// try{
//     const data = fs.readFileSync(path.join(__dirname, "filepath", "sample.txt"))
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

const filereading = async () =>{
    try{
        const data = await fsPromise.readFile(filepath, {encoding: "utf-8"});
        console.log(data);
    }catch(err){
        console.log("Something went wrong");
        // console.log(err)
    }
}

filereading();

// Writting itno a file 
const pathfile = path.join(__dirname,"filepath","text.txt");
const content = "Hii i am jarves how are you guys!"

// fs.writeFile(pathfile, content, (err) => {
//         if(err) throw new Error("Something went wrong");
//         console.log("Write operation completed");
//     })


const writingfile = async () =>
{
    try {
        await fsPromise.writeFile(pathfile, "\nHow are you budddy",{
            flag:"a+"
        });
        // await fsPromise.appendFile(pathfile, "\nI want to become a software developer");

        await fs.promises.rename(
            pathfile,
            path.join(__dirname, "filepath","newText.txt")
        )
        const data = await fsPromise.readFile(path.join(__dirname, "filepath","newText.txt"),
        {encoding:"utf-8"})
        console.log(data)
    }catch(err){
        console.log(err);
    }
}

writingfile();