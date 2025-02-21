# Real-time Form with Socket.IO, Next.js, and Express

This project is a **real-time form submission system** built with:
- **Next.js (Frontend, TypeScript)**
- **Express.js (Backend, JavaScript)**
- **Socket.IO (Real-time communication)**
- **Tailwind CSS (Styling)**

It allows users to submit messages via a form, and only the sender sees the response in real-time.

---

## 📌 Features
- **Real-time form submission** using Socket.IO.
- **Only the sender sees their own response.**
- **TypeScript support** on frontend.
- **Simple setup** with Express.js and Next.js.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/CGAJAY/socketio-beginner-tutorial.git
cd socketio-beginner-tutorial
```

### 2️⃣ Install dependencies:
#### Backend (Express & Socket.IO):
```bash
cd backend
npm install
```
#### Frontend (Next.js & Tailwind CSS):
```bash
cd frontend
npm install
```

### 3️⃣ Start the servers:
#### Start the backend:
```bash
cd backend
npm run dev
```
#### Start the frontend:
```bash
cd frontend
npm run dev
```

---

## 📂 Folder Structure
```
📦 project-root
├── 📂 backend          # Express.js server
│   ├── server.js        # Main Express server with Socket.IO setup
│   ├── package.json    # Backend dependencies
├── 📂 frontend         # Next.js frontend
│   ├── app
│   │   ├── page.tsx   # Main form component with Socket.IO client
│   ├── package.json   # Frontend dependencies
│   ├── tsconfig.json  # TypeScript config
└── README.md          # Project documentation
```

---

## 🚀 Usage Guide
1. **Open** `http://localhost:3000` in your browser.
2. **Enter your name and message** in the form.
3. **Press Submit** – The response will appear in real-time (only visible to you).

---

## 🔗 Technologies Used
- **Next.js 15** (Frontend, TypeScript)
- **Express.js** (Backend, API, WebSockets)
- **Socket.IO** (Real-time Communication)
- **Tailwind CSS** (Styling)

---

## 🛠 Possible Improvements
- Add MongoDB for storing chat history.
- Enhance UI with animations.
- Support multiple users with chat rooms.

---

## 🤝 Contributing
Feel free to fork and create a pull request if you have improvements!

---

## 📜 License
This project is **open-source** under the MIT License.
