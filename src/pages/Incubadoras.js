import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/Incubadoras.webm'
import video2 from '../assets/videos/vid/Criptoverzox.webm'
import video3 from '../assets/videos/vid/Academy.webm'
import '../styles/estilos_incuba2.css'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import '../styles/estilos_incubadoras.css'
import Water from "../components/Water";
import  Movimiento from '../assets/js/myscript.js';
import fondo_oscuro from '../assets/img/black_x.jpg'



class Incubadoras extends React.Component {




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
                                            "titulo":"INCUBADORAS",
                                            "descripcion":"Basados en la investigación de tecnologías emergentes, integramos proyectos propios que permitan tener un impacto positivo en los ecosistemas que fomentamos día a día por ende las incubadoras nos permiten fortalecer la experiencia de uso, y aplicación de dichas herramientas."
                        
                    },
                                            {
                                                "link": ">> Ir al sitio <<",
                                                "fondo":video2,
                                            "titulo":"CRYPTOVERSOX",
                                            "descripcion":"En Cryptoversox integramos todas las áreas de nuestro equipo de desarrollo para crear una experiencia en diferentes etapas basado en desarrollo blockchain y en la unificación de comunidades que consumen este tipo de tecnología."
                    },
                                            {
                                                "fondo":video3,
                                            "titulo":"ADWORKCHAIN ACADEMY",
                                            "descripcion":"Este espacio esta creado con la finalidad de educar desde la experiencia sobre tecnologías emergentes y el mundo digital que cada dia toman fuerza implementando blockchain en la integración de los datos y la custodia de los mismos."
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
                               
                               {/*<div className='container-fluid layx 0 px-0'>
                                    <div className='row'>
                                    <div className='col-md-12 ' >
                                        <img className="img-fluid" src={fondo_oscuro} style={{opacity:"0.8 " }}></img>
                                    </div>
                                    </div>
                                </div>  */} 
                               
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
                               
                               
                                <div className=" container-fluid layer_incu ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11" >
                                            <div className=""> <h1 className=" text-center titulo_incu">{ite.titulo}</h1></div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <h2 className=" text-center desc_incu">{ite.descripcion}</h2>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4 text-center">
                                            <a href="https://cryptoversox.com/" target="_blank" className=" text-center text-success enlace_incu"><span>{ite.link}</span></a>
                                        </div>
                                    </div>
                                </div>
                               
                            </Player>
                        </FullpageSection>
                                                )
                                            } 
                                            
        return (
            <div >
                <Fullpage >
                <FullpageNavigation />
                <FullPageSections >
                        
                        {Itemes}

                       
                </FullPageSections>
            </Fullpage>
            
            </div>
           
        );



    }
}

export default Incubadoras;
