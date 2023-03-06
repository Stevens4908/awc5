import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loading.css'
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from "react-bootstrap";

function Alerta() {
    
  const [show, setShow] = useState(true);

  return (

<React.Fragment>

<ToastContainer  >
    <Row>
        <Col xs={12}>
            <Toast onClose={() => setShow(false)} show={show} delay={6000} autohide>
            
            <Toast.Body>¡Arrastra la pantalla!</Toast.Body>
            </Toast>
        </Col>
        
    </Row>

</ToastContainer>



</React.Fragment>

  );
}

export default Alerta;