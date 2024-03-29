import React, {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/estilos_contact.css'
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from "react-bootstrap";



function ContactForm () {

    const form = useRef();
  
  
    
  
    
  
    const sendEmail = (e) => {
    
        e.preventDefault();
        
      emailjs.sendForm('adw', 'template_adw', form.current, 'Mbs8FafNtqcBrXATQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("¡Mensaje enviado!")
    };


    return ( 

        <React.Fragment>



<Container fluid className="centrar-form ">

    <Row className="justify-content-center">
        <p className="new_con text-center ">CONTÁCTANOS</p>
    </Row>

    <Row className="justify-content-center">
        <Col md={6}>

            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre:" name="user_namex" required />
                </div>
                <div className="form-group">
                    
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email:" name="user_email" required/>
                </div>
                <div class="form-group">
                        
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Asunto:" name="from_name" required/>
                </div>
                <div className="form-group">
                    
                    <textarea className="form-control  " id="exampleFormControlTextarea1" placeholder="Tu Mensaje:" rows="4" name="message" required></textarea>
                </div>
                <button type="submit" value="send" className="btn btn-primary btn-md" >Enviar Mensaje</button>
            </form>

        </Col>
    
    </Row>




</Container>











   {/*         

<div className="container-fluid  formulario ">


    <div className="row justify-content-center mt-0">
                <div className="col-md-12">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                                <p className="new_con text-center ">CONTÁCTANOS</p>
                        </div>
                    </div>
                   
                </div>
    </div>


  <div className="row justify-content-center">
        
        <div className="col-md-10 col-lg-6 ">
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre:" name="user_namex" required />
                </div>
                <div className="form-group">
                    
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email:" name="user_email" required/>
                </div>
                <div class="form-group">
                        
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Asunto:" name="from_name" required/>
                </div>
                <div className="form-group">
                    
                    <textarea className="form-control  " id="exampleFormControlTextarea1" placeholder="Tu Mensaje:" rows="3" name="message" required></textarea>
                </div>
                <button type="submit" value="send" className="btn btn-primary btn-md" >Enviar Mensaje</button>
            </form>
        </div>
  </div>        
</div>

    */}



        </React.Fragment>

     );
}

export default ContactForm;