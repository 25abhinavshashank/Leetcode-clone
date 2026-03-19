const mongoose=require('mongoose')

const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Uses Google and Cloudflare DNS


async function main(){
    try
       {await mongoose.connect(process.env.DB_CONNECTION_STRING);
       console.log("Connected to db")}
       catch(err){
        console.log(err)
       }
}

module.exports=main;