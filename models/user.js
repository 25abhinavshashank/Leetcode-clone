const mongoose=require('mongoose')

const {schema}=mongoose;

const userSchema=new schema({
     firstname:{
        type:String,
        require:true,
        minLength:3,
        maxLength:10
     },
     lastname:{
        type:String,
        minLength:3,
        maxLength:10
     },
     email:{
        type:String,
        unique:true,
        require:true,
     },
     agr:{
        type:Number,
        min:6,
        max:80
     },
     role:{
        type:String,
        enum:['admin','user'],
        default:'user'
     },
     problemSolved:{
        type:[string]
     }
},{timeStamp:true})


const User=mongoose.model("user",userSchema)

model.exports=User;