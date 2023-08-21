require('dotenv').config();
const express = require('express');
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require('./middelware/errorHandler');
const connectDb = require("./configs/dbConnection");



const port =process.env.PORT || 5000;
connectDb();

app.use(express.json())
app.use('/api/contacts', contactRoutes)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`The server run on the port ${port}`);
});