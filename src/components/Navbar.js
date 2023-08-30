import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav
      style={{ height: "100vh", justifyContent: "center" }}
      className="flex-column bg-dark p-3 navbar"
    >
      <Nav.Link
        style={{
          fontSize: "2rem",
          borderBottomColor: "white",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
        }}
        href="/"
        className="text-white mb-2"
      >
        Photo Vault
      </Nav.Link>
      <Nav.Link
        style={{
          fontSize: "2rem",
          borderBottomColor: "white",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
        }}
        href="/upload"
        className="text-white"
      >
        Upload Image
      </Nav.Link>
    </Nav>
  );
}

export default Navbar;
