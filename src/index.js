const { configDotenv } = require('dotenv');
const express=require('express');
const main = require('../.config/db');
const app=express();
configDotenv();
const cookieParser=require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

main()
.then(()=>{

    app.listen(process.env.PORT,()=>{
    console.log("Server is listening at port no. "+process.env.PORT);
   })
})
.catch((err)=>{
    console.log("Error occured"+err)
})



