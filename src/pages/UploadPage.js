import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);

    try {
      const response = await axios.post(
        "https://augie-backend.onrender.com/api/images/upload",
        formData
      );
      setMessage(response.data.message);
      setTitle(""); // Reset title
    } catch (error) {
      setMessage("Error uploading image.");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col md={6}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Upload Image</h2>
              {message && <p className="text-center text-danger">{message}</p>}
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    accept="image/*"
                    type="file"
                    onChange={onFileChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Upload
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
