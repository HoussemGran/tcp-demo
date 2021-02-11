
const net = require("net");

const server = net.createServer(socket=>{


    console.log("client connected "+JSON.stringify(socket.address()));
    socket.write("hello client welcome to the server");    
        
    socket.on("data",(data)=>{
        console.log("client say : "+data.toString());
    })

    socket.on("error" , ()=>{
        console.log("client disconnect");
    })

})

server.listen(8080 , ()=>{
    console.log("listen on port 8080");
});
