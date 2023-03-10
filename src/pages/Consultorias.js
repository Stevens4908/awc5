import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/Analisis De Mercado1.mp4'
import video2 from '../assets/videos/vid/Proyecion Financiera1.mp4'
import video3 from '../assets/videos/vid/Asesoria Tecnica1.mp4'
import video4 from '../assets/videos/vid/Estrategia De Marketing1.mp4'
import video5 from '../assets/videos/vid/Asesoria En Cripto Activos1.mp4'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import  Movimiento from '../assets/js/myscript.js';


class Consultorias extends React.Component {

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
                                            "titulo":"ANALISIS DE MERCADO",
                                            "descripcion":"Análisis de mercado para poder crear el diagnóstico, estrategias referentes a tus necesidad y deseos para que lleves tu empresa o marca al próximo nivel."
                        
                    },
                                            {
                                                "fondo":video2,
                                            "titulo":"PROYECCION FINANCIERA",
                                            "descripcion":"Con nuestros expertos podrás tener una proyección financiera pero lo más importante, seguridad en tus inversiones."
                    },
                                            {
                                                "fondo":video3,
                                            "titulo":"ASESORIA TECNICA",
                                            "descripcion":"Brindamos una asesoría técnica especializada y personalizada sobre todo el mundo Blockchain."
                    },
                                            {
                                                "fondo":video4,
                                            "titulo":"MACRO ESTRATEGIA MARKETING",
                                            "descripcion":"Contamos con un experto equipo de marketing para poder brindarte el mejor servicio y ejecución de las macro estrategias de marketing dependiendo del sector y los objetivos que quieras cumplir con tu marca o empresa. "
                    },
                                            {
                                                "fondo":video5,
                                            "titulo":"ASESORIA DETALLADA EN CRIPTOACTIVOS",
                                            "descripcion":"Asesorías contables para tus cripto activos, qué hacer, cuándo hacerlo y por qué hacerlo, todo esto lo puedes conocer con nosotros."
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
                                            <h2 className="text-center color_desc">{ite.descripcion}</h2>
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

export default Consultorias;
