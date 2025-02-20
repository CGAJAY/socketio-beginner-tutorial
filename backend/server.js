import {createServer} from 'http';
import {Server} from 'socket.io';

const PORT = 5000; // Define the port number

// Create a new server
const httpServer = createServer();

// Create a new instance of socket.io by passing the http server object
const io = new Server(httpServer, {
    // Set the CORS policy to allow requests from the client side
    cors: {
        origin: 'http://localhost:3000',
    }
}); 

// Listen to the connection event
io.on('connection', (socket) => {
    console.log('A user has connected'); // Log a message when a user connects

    // Listen to the message event from the client side
    socket.on('message', (message) => {
        console.log(message); // Log the message to the console 
        
    });

    // listen to the disconnect event from the client side
    socket.on('disconnect', () => {
        console.log('A user has disconnected'); // Log a message when a user disconnects
    });
});
    
// Listen to the port 3000
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

