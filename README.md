# Real-Time Form with Socket.IO, Next.js, and Express

## Overview
This project is a simple real-time form submission system using **Socket.IO, Next.js (TypeScript), Tailwind CSS, and Express**. It demonstrates how to integrate **WebSockets** into a Next.js frontend and an Express backend.

## Features
- **Real-time Communication**: Users can submit a form, and only the sender sees the response.
- **Socket.IO Integration**: Implements WebSocket communication between frontend and backend.
- **Next.js with TypeScript**: Uses modern React patterns with hooks.
- **Express Server**: Handles the Socket.IO server and API routes.
- **Tailwind CSS**: Provides a clean UI for the form.

---
## Project Structure
### Branches
The repository contains multiple branches to separate concerns:

1. **`basic-socket-setup`** - Implements a minimal WebSocket setup.
2. **`express-integration`** - Sets up the Express server with basic API routes.
3. **`frontend-form-state`** - Manages form state in Next.js with React hooks.
4. **`main`** - The stable and fully functional version of the app.

Each branch builds upon the previous ones, allowing step-by-step learning.

---
## Installation & Setup
### Prerequisites
Make sure you have **Node.js** installed.

### Clone the Repository
```sh
git clone https://github.com/CGAJAY/socketio-beginner-tutorial.git
cd socketio-beginner-tutorial
```

### Install Dependencies
Run the following command to install the required packages:
```sh
npm install
```

### Running the Backend (Express + Socket.IO)
Navigate to the backend folder (if separate) and start the Express server:
```sh
npm run dev  # or node server.js
```

The backend runs on **http://localhost:5000**.

### Running the Frontend (Next.js)
In another terminal, start the Next.js app:
```sh
npm run dev
```
The frontend runs on **http://localhost:3000**.

---
## How It Works
### 1. Backend (Express + Socket.IO)
- Creates an HTTP server and initializes **Socket.IO**.
- Listens for `formSubmit` events from the client.
- Sends a response back to **only the sender**.

### 2. Frontend (Next.js + React)
- Connects to the Socket.IO server.
- Listens for **formResponse** events from the server.
- Updates the state with the received message.

---
## API & Events
### **Backend (Socket.IO Events)**
| Event         | Description |
|--------------|-------------|
| `connection` | Triggered when a user connects to the WebSocket server. |
| `formSubmit` | Received from frontend when a user submits the form. |
| `formResponse` | Sent back to the same user with a formatted response. |
| `disconnect` | Triggered when a user disconnects. |

### **Frontend (Socket.IO Events)**
| Event         | Description |
|--------------|-------------|
| `formSubmit` | Emits user input to the server. |
| `formResponse` | Listens for responses from the server. |

---
## Future Improvements
- Add **MongoDB** for persistent storage.
- Implement **user authentication**.
- Support **multiple users with private messaging**.

---
## Contributing
Feel free to create a pull request if you'd like to improve this project!

---
## License
This project is open-source and available under the [MIT License](LICENSE).
