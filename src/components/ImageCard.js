import React, { useState } from "react";
import { Card, Button, Form, ButtonGroup } from "react-bootstrap";
import axios from "axios";

function ImageCard({ image }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(image.title);
  const [liked, setLiked] = useState(image.liked);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setCurrentTitle(image.title);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        `https://augie-backend.onrender.com/api/images/update/${image._id}`,
        {
          title: currentTitle,
        }
      );
      setIsEditing(false);
      image.title = currentTitle; // Update the local image title
    } catch (error) {
      console.error("Error updating title:", error);
    }
  };

  const handleLikeClick = async () => {
    try {
      await axios.post(
        `https://augie-backend.onrender.com/api/images/like/${image._id}`,
        {
          liked: !liked,
        }
      );
      setLiked(!liked); // Update the local liked status
    } catch (error) {
      console.error("Error liking image:", error);
    }
  };

  const handleTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  };

  return (
    <Card className="h-100 shadow">
      <Card.Img
        variant="top"
        src={`https://augie-backend.onrender.com/${image.path}`}
      />
      <Card.Body className="d-flex flex-column justify-content-between card-footer">
        {isEditing ? (
          <Form.Control
            type="text"
            value={currentTitle}
            onChange={handleTitleChange}
            autoFocus
          />
        ) : (
          <Card.Title
            style={{ color: "white", textAlign: "center", padding: ".1rem" }}
          >
            {currentTitle}
          </Card.Title>
        )}
        <ButtonGroup style={{ paddingBottom: "1rem" }}>
          <Button
            variant={liked ? "danger" : "primary"}
            onClick={handleLikeClick}
          >
            {liked ? "Liked" : "Like"}
          </Button>
          {isEditing ? (
            <>
              <Button variant="secondary" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleSaveClick}>
                Save
              </Button>
            </>
          ) : (
            <Button variant="info" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
