"use client";
import Image from "next/image";
import {io} from "socket.io-client";
import { useEffect } from "react";

export default function Home () {

  // Connect to the server when the component is mounted 
  useEffect(()=> {

    // Connect to the server using socket.io client library
    const socket = io("http://localhost:5000");
  
    // Log the connection status when the server is connected
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Log the disconnection status when the server is disconnected
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    }
    );
    
  }, []) // Empty array means this effect will only run once when the component is mounted

  return (
  <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <h1 >Home</h1>
    <Image src="/globe.svg" alt="logo" width="100" height="100" />  
  </div>)
    
}
