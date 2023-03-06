import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/estilos_inicio.css'
import fondo_oscuro from '../assets/img/black_x.jpg'


function InicioItems() {


    const [claseuno, setclaseuno] = React.useState("normal_1")
    const [clasedos, setclasedos] = React.useState("normal_1")
    const [clasetres, setclasetres] = React.useState("normal_1")
    const [clasecuatro, setclasecuatro] = React.useState("normal_1")
  
   const ir_servicios = () => {
    window.open("/servicios","_self" );
   }

   const ir_contactanos = () => {
    window.open("/contactanos","_self" );
   }

   const ir_nosotros = () => {
    window.open("/nosotros", "_self")
   }

   const ir_incubadoras = () => {
    window.open ("/incubadoras", "_self")
   }
    return ( 

<React.Fragment>
{/*
<div className='container-fluid lay_inicio 0 px-0'>
                    <div className='row'>
                    <div className='col-md-12 ' >
                        <img className="img-fluid" src={fondo_oscuro} style={{opacity:"0.4 " }}></img>
                    </div>
                    </div>
                </div>
    */}
<div className=" container-fluid  contain_inicio_1 sin ">

    

    <div className="row ">


            <div className="col-md-11   " >
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 offset-md-1 ">

                                <div className="row sin "  > 
                                        <div className=" col-12 col-md-12  sin"  >
                                                <div id="uno" className={`row  sin justify-content-center  ${claseuno} `} >
                                                  <span className="con" onMouseEnter={() => setclaseuno("resaltado_1")} onMouseLeave={() => setclaseuno("normal_1")} onClick={ir_servicios}>SERVICIOS</span> 
                                                </div>
                                        </div>
                                </div>
                                <div className="row sin" > 
                                        <div className="col-12 col-md-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasedos} `}  >
                                                    <span className="con" onMouseEnter={() => setclasedos("resaltado_1")} onMouseLeave={() => setclasedos("normal_1")} onClick={ir_nosotros}>SOBRE NOSOTROS</span>
                                                </div>
                                        </div>
                                </div>
                                <div className="row sin" > 
                                        <div className="col-12 col-md-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasetres} `}  >
                                                   <span className="con" onMouseEnter={() => setclasetres("resaltado_1")} onMouseLeave={() => setclasetres("normal_1")} onClick={ir_incubadoras}>INCUBADORAS</span>
                                                </div>
                                        </div>
                                </div>
                                <div className="row sin" > 
                                        <div className="col-12 col-md-12  ">
                                                <div id="uno" className={`row  justify-content-center  ${clasecuatro} `}  >
                                                    <span className="con" onMouseEnter={() => setclasecuatro("resaltado_1")} onMouseLeave={() => setclasecuatro("normal_1")} onClick={ir_contactanos}>CONTÁCTANOS</span>
                                                </div>
                                        </div>
                                </div>
                                
                    </div>
                    
                </div>
            </div>        
    
            

        
      { /*     <div className="col-md-1 selectores">
                    <div className=" row ">
                        <ol className=" selector test ">
                                        <li className="test">
                                            <label id="puntouno"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntodos" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntotres" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntocuatro"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntocinco" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntoseis" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntosiete"  className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntoocho" className="punto">•</label>
                                        </li>
                                        <li>
                                            <label id="puntonueve" className="punto">•</label>
                                        </li>
                        </ol>
                                
                    </div>  
                </div>   */}
            
    </div>  

</div>

</React.Fragment>

     );
}

export default InicioItems;