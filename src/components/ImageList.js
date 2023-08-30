import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { Container, Row, Col } from "react-bootstrap";

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend
    axios
      .get("https://augie-backend.onrender.com/api/images")
      .then((response) => {
        setImages(response.data);
      });
  }, []);

  return (
    <Container>
      <Row style={{ marginTop: "2rem" }}>
        {images.map((image) => (
          <Col md={3} style={{ marginBottom: "2rem" }} key={image._id}>
            <ImageCard image={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImageList;
