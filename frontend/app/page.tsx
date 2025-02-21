"use client";
import {io} from "socket.io-client";
import {useState, useEffect} from "react";


// Connect to the server socket 
// Declare the socket outside the component to ensure it is initialized only once:
const socket = io("http://localhost:5000"); 
export default function Home () {

  const [name, setName] = useState(""); // state for the name input
  const [message, setMessage] = useState(""); // state for the message input
  const [responses, setResponses] = useState<string[]>([]); // state for the responses from the server
  
  // Listens to the formResponse event from the server
  useEffect(() => {
    // Function to handle the formResponse event
    const handleFormResponse = (data: string) => {
      // Adds the response to the responses state 
      setResponses((prevResponse) => [...prevResponse, data]);
    }
    // Listens for the formResponse event from the server and adds the response to the responses state
    socket.on("formResponse", handleFormResponse);

    return () => {
      // removes the event listener when the component unmounts
      socket.off("formResponse"); 
    };

  }, []); // empty array to run once when the component mounts

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent the default form submission

    if(name.trim() && message.trim()) {
      // emits the formSubmit event to the server with the name and message
      socket.emit("formSubmit", {name, message}); 
      setName(""); // clears the name input
      setMessage(""); // clears the message input
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Real-time Form with Socket.IO</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-80">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 w-full mb-2 rounded"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="border p-2 w-full mb-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>

      {/* Render responses from the server */}
      {responses.length > 0 && (
      <div className="mt-4 bg-green-100 text-green-700 p-3 rounded w-80 text-center">
          <h2 className="font-bold">Responses:</h2>
          <ul className="text-left">
            {responses.map((res, index) => (
              <li key={index} className="border-b p-2">{res}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
    
}
