import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Context-Aware Speech Web-App</h1>
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}