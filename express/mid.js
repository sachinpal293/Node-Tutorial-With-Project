const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const multer = require('multer');
const Router = express.Router();
const upload = multer({dest: "./public/uploads"});

const PORT = 5001;

// Built-in middleware
app.use(express.json());
// Application level middleware

const loggerMiddleware = (req, res, next) =>{
console.log(`${new Date()} ===  Request [${req.method}]  [${req.url}]`);
next();
}

app.use(loggerMiddleware);
// Third party middleware
app.use(logger("combined"));
// Router - level middleware

  const fakeAuth = (req,res,next) =>{
       const authStatus = true;
       if(authStatus)
       {
        console.log("User auth status", authStatus);
        next();
       }else
       {
        res.status(401);
        throw new Error("User is invalid");
       }
  }

  app.use(fakeAuth)
  app.use("/api/user", Router)
  

  const getAllUSer = (req, res) => {
    res.json({message:"Get All user Details"});
  }

  const createUser = (req, res) => {
    console.log('The new user is created ', req.body);
    res.json({message:"Create User"});
  }

  Router.route('/').get(getAllUSer).post(createUser);

// error handling

 const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {
        case 401:
            res.json({
                title:"Unauthorized",
                message:err.message
            })
            break;
        case 404:
             res.json({
                    title:"Page Not Found",
                    message:err.message
                })
            break;
        case 500:
            res.json({
                    title:"Interval server error",
                    message:err.message
                })
            break;
    
        default:
            break;
    }
 }

  

app.post("/upload", upload.single("image"), (req,res,next)=>{
    console.log(req.file, req.body);
    res.send(req.file)
},(err, req, res, next)=>{
    res.status(400).send({err:err.message});
})

 app.all("*",(req,res)=>{
    res.status(404);
    throw new Error("Route not found");
 })

 app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})