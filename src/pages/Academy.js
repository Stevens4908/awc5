import React from "react";
import FondoAcademy from "../components/Academy/FondoAcademy";
import FotosAcademy from "../components/Academy/FotosAcademy";

import '../styles/estilos_academy.css'

class Academy extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoAcademy/>
                <FotosAcademy/>
                
            </React.Fragment>

        );
    }
}
 
export default Academy ;