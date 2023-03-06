import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "../styles/estilos_scroll.css"
class ScrollServices extends React.Component {
    state={
        encender:false,
        contador:0
    }

    cambiar_color=()=>{
        console.log("que esta pasando");
        this.setState({
       
        encender:!this.state.encender,
        contador:1
    });}

    render() { 
    
        return (


<div className=" container-fluid   bg-danger  ">

<div className="row ">


        <div className="col-md-11  scrolider " >

                <div className="row "> 
                        <div className="col-12  ">
                                <div id="uno" className={`row  justify-content-center ${this.state.encender && this.state.contador==1?"resaltar":"normal"}`}  >
                                    PROJECT 1
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="dos" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 2 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="tres" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 3 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="cuatro" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 4 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="cinco" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 5 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="seis" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 6 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="siete" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 7 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="ocho" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 8 
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="nueve" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                PROJECT 9 
                                </div>
                        </div>
                </div>
                <div className="row agrandar">
                        <div className="col-12 ">
                                <div id="nueve" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 ">
                                <div id="nueve" className={`row  justify-content-center ${this.state.encender && this.state.contador==2?"resaltar":"normal"}`} >
                                
                                </div>
                        </div>
                </div>
                
        </div>        
  
        

    
        <div className="col-md-1  test contenedor">
                <div className=" row ">
                    <ol className=" selector test ">
                                    <li className="test">
                                        <label id="puntouno"  className="punto test">HOLA</label>
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
}
 
export  default ScrollServices;