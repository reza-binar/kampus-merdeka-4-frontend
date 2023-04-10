import React from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function DeleteModal({ show, handleClose, id, setReload }) {
  const onDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      toast.success(`Success to delete post with id: ${id}`);
      handleClose();
      setReload(true);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <Modal show={id !== 0 && show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Post - {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
