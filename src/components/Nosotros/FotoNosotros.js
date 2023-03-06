import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../../assets/img/Grupo1.JPG'
import '../../styles/estilos_nosotros.css'

function FotoNosotros () {
    return ( 

        <React.Fragment>

        <div className="container-fluid    d-flex flex-column contain_nosotros   ">
            <div className="row justify-content-center py-0 my-0">
                <div className="col-md-12  my-0 py-0 by-0">
                        <p className="titulo_nosotros text-center by-0 py-0 my-0">SOBRE NOSOTROS</p>
                            
                              
                </div>

                <div className="col-md-9 my-0 py-0 ">
                            <div className="row justify-content-center">
                                <div className=" col-lg-7 my-0 py-0  ">
                                    <img className="foto_nosotros img-fluid  mx-auto d-block py-0 my-0 text-center" style={{opacity:"1" }} src={foto} ></img>
                                </div>
                            </div>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-11 ">
                        <h4 className="text-center mt-3 color_nosotros">En ADWORKCHAIN somos  un equipo de desarrolladores que
                        integramos tecnologías emergentes como software, inteligencia artificial, realidad 
                        virtual, realidad aumentada y áreas asociadas como diseño gráfico, producción audiovisual
                        y marketing, con la finalidad de dar soluciones que permitan que nuestros clientes logren sus objetivos. </h4> 
                </div>
            </div>
        </div>

        </React.Fragment>

     );
}

export default FotoNosotros;