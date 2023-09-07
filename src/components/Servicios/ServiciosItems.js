import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/estilos_servicios.css"
//import { Col, Container, Row } from "react-bootstrap";


function ServiciosItems() {


    const [claseuno, setclaseuno] = React.useState("normal")
    const [clasedos, setclasedos] = React.useState("normal")
    const [clasetres, setclasetres] = React.useState("normal")
    const [clasecuatro, setclasecuatro] = React.useState("normal")
    const [clasecinco, setclasecinco] = React.useState("normal")
   
       const ir_blockchain = () => {
        window.open("/blockchain","_self" );
       }
    
       const ir_sistematizacion = () => {
        window.open("/sistematizacion","_self" );
       }
    
       const ir_aumentada = () => {
        window.open("/aumentada", "_self")
       }
    
       const ir_virtual = () => {
        window.open ("/virtual", "_self")
       }

       const ir_consultorias = () => {
        window.open ("/consultorias", "_self")
       }



    return ( 


<React.Fragment>



<div className=" container-fluid  contain_servicios sin  ">

        <div className="row ">


                <div className="col-md-11  " >
                        <div className="row justify-content-center">
                                <div className="col-md-10 offset-md-1">

                                        <div className="row sin " > 
                                                <div className="col-12 sin ">
                                                        <div id="uno" className={`row  justify-content-center sin ${claseuno} `} >
                                                        <span className="con" onMouseEnter={() => setclaseuno("resaltado")} onMouseLeave={() => setclaseuno("normal")} onClick={ir_blockchain} >DESARROLLO BLOCKCHAIN</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="row sin" > 
                                                <div className="col-12  sin">
                                                        <div id="uno" className={`row  justify-content-center sin  ${clasedos} `}  >
                                                        <span className="con" onMouseEnter={() => setclasedos("resaltado")} onMouseLeave={() => setclasedos("normal")} onClick={ir_sistematizacion}>SISTEMATIZACIÓN</span> 
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="row sin"> 
                                                <div className="col-12 sin ">
                                                        <div id="uno" className={`row  justify-content-center sin ${clasetres} `}  >
                                                        <span className="con"  onMouseEnter={() => setclasetres("resaltado")} onMouseLeave={() => setclasetres("normal")} onClick={ir_aumentada} >REALIDAD AUMENTADA</span> 
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="row sin" > 
                                                <div className="col-12 sin ">
                                                        <div id="uno" className={`row  justify-content-center sin ${clasecuatro} `}  >
                                                        <span className="con" onMouseEnter={() => setclasecuatro("resaltado")} onMouseLeave={() => setclasecuatro("normal")} onClick={ir_virtual} >REALIDAD VIRTUAL</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="row sin" > 
                                                <div className="col-12 sin ">
                                                        <div id="uno" className={`row  justify-content-center sin ${clasecinco} `}  >
                                                        <   span className="con" onMouseEnter={() => setclasecinco("resaltado")} onMouseLeave={() => setclasecinco("normal")} onClick={ir_consultorias} >CONSULTORÍAS</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                    
                        </div>
                </div>        
    
        
        </div>  

</div>



</React.Fragment>



     );
}

export default ServiciosItems;