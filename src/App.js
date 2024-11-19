import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import './styles/global.css';
import './styles.css';  


const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>Inicio</Link>
          <Link to="/productos" style={{ textDecoration: "none", fontWeight: "bold" }}>Productos</Link>
          <Link to="/nosotros" style={{ textDecoration: "none", fontWeight: "bold" }}>Nosotros</Link>
          <Link to="/contacto" style={{ textDecoration: "none", fontWeight: "bold" }}>Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;