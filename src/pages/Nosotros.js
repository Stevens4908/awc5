import React, { Fragment } from "react";
import FondoVideo from "../components/Nosotros/FondoVideo";
import FotoNosotros from "../components/Nosotros/FotoNosotros";
import ParticulasNosotros from "../components/Nosotros/ParticulasNosotros";



class Nosotros extends React.Component {
    state = {  } 
    render() { 
        return (

          <React.Fragment>

             
                <FondoVideo/>
                <FotoNosotros/>
                   <ParticulasNosotros/>
          </React.Fragment>
          
        );
    }
}



 export default Nosotros ;