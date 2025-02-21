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

app.use(cors(corsOptions)); // Apply the cors options to the express app

// Create an http server by passing the express app
const httpServer = createServer(app);

// Create a new instance of socket.io by passing the http server object
const io = new Server(httpServer, {
    // Set the CORS policy to allow requests from the client side
    cors: {
        origin: 'http://localhost:3000',
    }
}); 

// Create a route to handle the root path
app.get('/', (req, res) => {
    res.status(200).json({message: 'Silence is golden'});
});

// Listen to the connection event
io.on('connection', (socket) => {
    // Log a message when a user connects
    console.log('A user has connected'); 

    // Log the socket id of the connected user
    console.log('User socket id is: ', socket.id);
    
    socket.emit('message', 'Hello from the server'); // Emit a message to the client side

    // listen to the message event from the client side
    socket.on('message', (data) => {
        // Log the message received from the client
        console.log('Message from the client: ', data);
    });

    // listen to the disconnect event from the client side
    socket.on('disconnect', () => {
        console.log('A user has disconnected'); // Log a message when a user disconnects
    });
});
    
// Start the server on the specified ports
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

