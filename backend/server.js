import {createServer} from 'http';
import {Server} from 'socket.io';
import express from 'express';
import cors from 'cors';

const app = express(); // Create a new express app
const PORT = 5000; // Define the port number
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from the client side
    credentials: true,
};

// Create an http server by passing the express app
const httpServer = createServer(app);

// Create a new instance of socket.io by passing the http server object
const io = new Server(httpServer, {
    // Set the CORS policy to allow requests from the client side
    cors: {
        origin: 'http://localhost:3000',
    }
}); 

app.use(cors(corsOptions)); // Apply the cors options to the express app
app.use(express.json()); // Allow the express app to parse incoming json payloads

// Create a route to handle the root path
app.get('/', (req, res) => {
    res.status(200).json({message: 'Silence is golden'});
});

// Listen to the connection event
io.on('connection', (socket) => {
    // Log a message when a user connects
    console.log(`A user has connected ${socket.id}`); 

    // METHOD 1: SEND THE MESSAGE ONLY TO THE SENDER 
    socket.on('formSubmit', ({name, message}) => {
        // Log the name and message to the console
        console.log(`Name: ${name}, Message: ${message}`);

        const responseMessage = `${name} says: ${message}`;

    // Send the response ONLY to the sender
    socket.emit("formResponse", responseMessage);
    });

    // METHOD 2: BROADCAST THE MESSAGE TO ALL CONNECTED CLIENTS
    // socket.on('formSubmit', ({name, message}) => {
    //     const responseMessage = `${name} says: ${message}`;

    //     // Send the response to all connected clients
    //     io.emit("formResponse", responseMessage);
    // });

    // Listen to the disconnect event
    socket.on('disconnect', () => {
        // Log a message when a user disconnects
        console.log(`A user has disconnected ${
            socket.id
        }`);
    });
});

    
// Start the server on the specified ports
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
