const express = require('express');
const app = express();

const PORT= 8080;

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get('/user',(req,res)=>{
    res.send("HII i am user");
})

app.get('/user/:id',(req,res)=>{
    res.send("get user through id");
})

app.post('/user/',(req,res)=>{
    res.send("Create a new User");
})


app.put('/user/:id',(req,res)=>{
    res.send("Update the user");
})

app.delete('/user/:id',(req,res)=>{
    res.send("Delete the user");
})
app.listen(PORT, ()=>{
    console.log(`App Running  on port ${PORT}`);
})