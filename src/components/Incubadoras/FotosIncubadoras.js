import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../../assets/img/cryp.png'
import foto2 from '../../assets/img/adwo.png'
import '../../styles/estilos_incubadoras.css'



function FotosIncubadoras () {

    const ir_crypto = () => {
        window.open("http://localhost:3000/cryptoversox" , "_self")

        }
    const ir_academy = () => {
            window.open("http://localhost:3000/academy" , "_self")
    }

    return (  


        <React.Fragment>
            <div className="container-fluid  contain_inc">
                <div className="row justify-content-center">
                    <div className=" col-md-6">
                    <p className="titulo_inc text-center">INCUBADORA</p>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img className="img-fluid" src={foto1} style={{cursor: "pointer"}} onClick={ir_crypto}></img >
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={foto2} style={{cursor: "pointer"}} onClick={ir_academy}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="color_incubadoras">Basados en la investigación de tecnologías 
                        emergentes, integramos proyectos propios que permitan tener un impacto
                         positivo en los ecosistemas que fomentamos día a día por ende las
                          incubadoras nos permiten fortalecer la experiencia de uso, y
                           aplicación de dichas herramientas.</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>


    );
}

export default FotosIncubadoras;