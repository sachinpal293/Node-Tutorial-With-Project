function asyncTask(cb)
{
    setTimeout(()=>{
       cb("Something went wrong","This is my data ");
    },0)
}

asyncTask((err,data)=>{
    if(err) 
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})