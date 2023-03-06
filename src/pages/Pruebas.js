/*
import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/modelado logo 3d comprimido.mkv'
import foto from '../assets/img/us.jpg'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_nosotros.css'
import '../styles/estilos_servicios.css'
import '../styles/mystyle.css'
import  Movimiento from '../assets/js/myscript.js';


class Pruebas extends React.Component {


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
                                            "titulo":"Sobre Nosotros",
                                            "descripcion":"En ADWORKCHAIN somos  un equipo de desarrolladores que integramos tecnologías emergentes como software, inteligencia artificial, realidad virtual, realidad aumentada y áreas asociadas como diseño gráfico, producción audiovisual y marketing, con la finalidad de dar soluciones que permitan que nuestros clientes logren sus objetivos. "
                        
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

                                <div className=" container-fluid contain_nosotros_2 mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10" >
                                            <div className=""> <h1 className=" text-center titulo_nosotros_2">{ite.titulo}</h1></div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                            <div className="col-md-5">
                                                <img className="foto_nosotros_2 img-fluid mx-auto d-block" style={{opacity:"0.4"}} src={foto} ></img>
                                            </div>
                                    </div>

                                    <div className="row justify-content-center mt-2">
                                        <div className="col-md-11">
                                            <h2 className="text-center color_nosotros_2">{ite.descripcion}</h2>
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

export default Pruebas;
*/