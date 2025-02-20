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
    
// Listen to the port 3000
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

