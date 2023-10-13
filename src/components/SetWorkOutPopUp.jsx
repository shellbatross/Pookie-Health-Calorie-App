import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React from "react"
import "./SetWorkOutPopUp.scss";
function StaticExample() {
    return (
      <div
        className="modalshow"
        style={{ display: 'block', position: 'absolute', backgroundColor: "white",
        width : "500px", borderColor: "black", fontSize: " 20px", marginTop: "400px"
    }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Set up a workout</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>No workout has been set, please go set one.</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Go set workout</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  
  export default StaticExample;
