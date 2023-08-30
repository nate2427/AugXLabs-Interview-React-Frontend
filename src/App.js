import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Container fluid className="p-0 App">
        <Row noGutters>
          <Col xs={12} md={3} lg={2}>
            <Navbar />
          </Col>
          <Col
            style={{ height: "99vh", overflowY: "scroll" }}
            xs={12}
            md={9}
            lg={10}
            className="p-3"
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<UploadPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
