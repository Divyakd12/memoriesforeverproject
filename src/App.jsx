
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddEntry from "./pages/AddEntry";
import Memories from "./pages/Memories";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";
import ViewEntry from "./pages/ViewEntry";

function App() {

  return (
    
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        
        <Route path="/about" element={<About />} />

        <Route path="/view" element={<ViewEntry />} />

        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddEntry />
            </ProtectedRoute>
          }
        />

        <Route
          path="/memories"
          element={
            <ProtectedRoute>
              <Memories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/themetoggle"
          element={
            <ProtectedRoute>
              <ThemeToggle />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;