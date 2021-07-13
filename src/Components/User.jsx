import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import EditForm from '../Components/EditForm'

const User = ({ user, handleDelete, handleEdit }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteHandle = (e) => {
      handleDelete(user.id);
    };
  return (
    <>
       <div className="user">
        <Card className="mb-4">
          <Card.Header>{user.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
            <Button className="btn btn-primary" onClick={handleShow}>Edit</Button>
            <Button className="btn btn-default" onClick={deleteHandle}>Delete</Button>
          </ListGroup>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            user={user}
            handleEdit={handleEdit}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default User;
