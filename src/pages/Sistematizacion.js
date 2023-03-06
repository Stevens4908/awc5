import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/Erp.m4v'
import video2 from '../assets/videos/vid/Crm.m4v'
import video3 from '../assets/videos/vid/Sitios Web.m4v'
import video4 from '../assets/videos/vid/Ecomerce.m4v'
import video5 from '../assets/videos/vid/Solucion A La Medida.m4v'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import  Movimiento from '../assets/js/myscript.js';


class Sistematizacion extends React.Component {


    state = {
        left: 0,
        top: 0
    }

    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
          Movimiento();  
        });
    }





    render() {
        
                                            const sub_itemes=[
                                            {
                                                "fondo":video,
                                            "titulo":"ERP",
                                            "descripcion":"Planificamos finanzas, contabilidad, recursos humanos, ventas, compras, logística entre otros para mejorar la planificación de los recursos empresariales y que la gestión empresarial sea más eficaz y óptima."
                        
                    },
                                            {
                                                "fondo":video2,
                                            "titulo":"CRM",
                                            "descripcion":"Mejoramos la gestión e interacción con los clientes partiendo de una estrategia con un software que ayude a las empresas a mantener el contacto constante con los clientes, agilizar el proceso y mejorar la rentabilidad."
                    },
                                            {
                                                "fondo":video3,
                                            "titulo":"PAGINA WEB",
                                            "descripcion":"Ten presencia en el internet con una página web y organiza tus productos o servicios entendiendo y aplicando tu identidad de marca para innovar y estar en la vanguardia en el mercado."
                    },
                                            {
                                                "fondo":video4,
                                            "titulo":"E-COMMERCE",
                                            "descripcion":"Optimiza y aumenta tus ventas con una estrategia de E-Commerce en tu página web. "
                    },
                                            {
                                                "fondo":video5,
                                            "titulo":"SOLUCIONES A LA MEDIDA",
                                            "descripcion":"analizamos y diagnosticamos las necesidades de tu organización para poder dar soluciones tecnológicas que permitan mejorar la productividad y el ahorro de recursos dentro de la misma. "
                    },
                                           
                                            ]
        
                const Itemes=[];
        
                for (let ite of sub_itemes) {
                                                Itemes.push(
                                                    <FullpageSection style={{ height: '100vh' }} >
                            <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={ite.fondo}
                                loop={true}
                            >

                                <ControlBar disableCompletely={true} />

                                <div className=" container-fluid layer2 fondo  ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8" >
                                            
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className=" container-fluid layer2 agua  ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-8" >
                                            
                                        </div>
                                    </div>
                                    
                                </div>


                                <div className=" container-fluid layer">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11" >
                                            <div className=""> <h1 className=" text-center titulox">{ite.titulo}</h1></div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <h2 className="text-center color_desc ">{ite.descripcion}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Player>
                        </FullpageSection>
                                                )
                                            } 
                                            
        return (
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                        
                        {Itemes}

                    
                </FullPageSections>
            </Fullpage>
        );



    }
}

export default Sistematizacion;
