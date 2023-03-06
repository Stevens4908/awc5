import React from "react";
import ContactForm from "../components/Contactanos/ContactForm";
import FondoContact from "../components/Contactanos/FondoContact";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/estilos_contact.css'
import ParticulasIncubadoras from "../components/Incubadoras/ParticulasIncubadoras";

class Contactanos extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoContact/>
                <ContactForm  />
               { /*<div className="container-fluid  titulo_con">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                             <p className=" ">CONTÁCTANOS</p>
                        </div>
                    </div>
        </div>*/}
               <ParticulasIncubadoras/>
            </React.Fragment>

        );
    }
}
 
export default Contactanos ;