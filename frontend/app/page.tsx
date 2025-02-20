"use client";
import {io} from "socket.io-client";


export default function Home () {
  // Connect to the server socket 
  const socket = io("http://localhost:5000"); 

  // Listen to the connect event from the server 
  socket.on("connect", () => {
    console.log('Connected to the server'); // log after connecting to the server socket
  });

  // Listen to the message event from the server
  socket.on("message", (data) => {
    // log the data from the server 
    console.log('Message from the server: ', data);
    // Emit a message to the server 
    socket.emit("message", "Hello from the client side"); 
  });  

  // Listen to the disconnect event from the server
  socket.on("disconnect", () => {
    console.log('Disconnected from the server'); // log after disconnecting from the server socket
  });

 
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <h1 className="font-extrabold">WEB SOCKETS BASICS</h1>    
    </div>)
    
}
