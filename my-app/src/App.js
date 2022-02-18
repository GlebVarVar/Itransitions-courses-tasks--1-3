// import './App.css'; // 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Login from "./Pages/login";
import Register from "./Pages/register";
import Dashboard from "./Pages/dashboard";
import Chat from "./Pages/chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
