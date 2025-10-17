import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "hotpink", padding: "1rem" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white" }}>Home</Link>
      <Link to="/original" style={{ marginRight: "1rem", color: "white" }}>Original</Link>
      <Link to="/info" style={{ marginRight: "1rem", color: "white" }}>Info</Link>
      <Link to="/extra" style={{ color: "white" }}>Más</Link>
    </nav>
  );
}
