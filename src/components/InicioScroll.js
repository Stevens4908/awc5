import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/estilos_scroll.css"


function InicioScroll() {


    const [claseuno, setclaseuno] = React.useState("normal")
    const [clasedos, setclasedos] = React.useState("normal")

    return ( 

<div className=" container-fluid   bg-danger  ">

    <div className="row ">


            <div className="col-md-11  scrolider " >

                    <div className="row " onMouseEnter={() => setclaseuno("resaltado")} onMouseLeave={() => setclaseuno("normal")}> 
                            <div className="col-12  ">
                                    <div id="uno" className={`row  justify-content-center  ${claseuno} `} >
                                        PROJECT 1
                                    </div>
                            </div>
                    </div>
                    <div className="row " onMouseEnter={() => setclasedos("resaltado")} onMouseLeave={() => setclasedos("normal")}> 
                            <div className="col-12  ">
                                    <div id="uno" className={`row  justify-content-center  ${clasedos} `}  >
                                        PROJECT 2
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 3
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 4
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 5
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 6
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 7
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 8
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        PROJECT 9
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        
                                    </div>
                            </div>
                    </div>
                    <div className="row "> 
                            <div className="col-12  ">
                                    <div id="uno" className="row  justify-content-center normal "  >
                                        
                                    </div>
                            </div>
                    </div>
                    
            </div>        
    
            

        
            <div className="col-md-1  test contenedor">
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
            </div>   
            
    </div>  

</div>

     );
}

export default InicioScroll;