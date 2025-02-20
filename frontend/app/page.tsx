import Image from "next/image";
import {io} from "socket.io-client";

export default function Home () {
  // Connect to the server using socket.io client library
  const socket = io("http://localhost:5000");

  // Log the connection status
  socket.on("connect", () => {
    console.log("Connected to the server");
  });
  
  return (<div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <h1 >Home</h1>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  </div>)
    
}
