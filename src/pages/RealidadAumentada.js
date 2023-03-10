import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/Realidad Aumentada1.mp4'

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import  Movimiento from '../assets/js/myscript.js';


class RealidadAumentada extends React.Component {


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
                                            "titulo":"REALIDAD AUMENTADA",
                                            "descripcion":"La RA nos permite vivir experiencias digitales, inmersivas que logran un impacto en tu comunidad, integrando innovación, creatividad y tecnología. "
                        
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
                                        <div className="col-md-10" >
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

export default RealidadAumentada;
