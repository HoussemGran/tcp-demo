
const net = require("net");


const client  = net.connect({port : 8080});

client.on("connect" , ()=>{
    console.log("connected to the server");
})

client.on("error",()=>{
    console.log("server disconect");
})

client.on("data",(data)=>{
    console.log("server say : "+data.toString());
})

let message = "hello server i'm the client"

client.write(message);

