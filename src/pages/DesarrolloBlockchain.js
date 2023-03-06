import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/Token.m4v'
import video2 from '../assets/videos/vid/Nft.m4v'
import video3 from '../assets/videos/vid/Dapps.m4v'
import video4 from '../assets/videos/vid/Metaverso.m4v'
import video5 from '../assets/videos/vid/Sistemas Descentralizados.m4v'
import video6 from '../assets/videos/vid/Wallets.m4v'
import video7 from '../assets/videos/vid/Smart Contracts.m4v'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import Water from "../components/Water";
import  Movimiento from '../assets/js/myscript.js';
import fondo_oscuro from '../assets/img/black_x.jpg'


class DesarrolloBlockchain extends React.Component {




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
                                            "titulo":"TOKEN",
                                            "descripcion":"Por medio de los tokens podemos unir  un número de personas que estén interesadas en invertir en proyectos utilizando tecnología blockchain para el control y manejo seguro de los activos."
                        
                    },
                                            {
                                                "fondo":video2,
                                            "titulo":"TOKEN NO FUNGIBLE",
                                            "descripcion":"Por medio de los NFTS podemos integrar  comunidades con fines comunes, generando beneficios, a sus audiencias, sin importar el nicho. aplicando la tecnología blockchain y todos los componentes que se requieren para un lanzamiento de este tipo"
                    },
                                            {
                                                "fondo":video3,
                                            "titulo":"DAPPS",
                                            "descripcion":"Las aplicaciones descentralizadas nos permiten tener conexión a web 3.0 logrando así la integración de proyectos tradicionales y que incursionan en el mundo blockchain. "
                    },
                                            {
                                                "fondo":video4,
                                            "titulo":"METAVERSOS",
                                            "descripcion":"Los metaversos permiten la integración de datos, en espacios virtuales, que llevan a que los usuarios consuman experiencias exclusivas por medio de la tecnología blockchain participando en comunidades que se encuentran en estos espacios. "
                    },
                                            {
                                                "fondo":video5,
                                            "titulo":"SISTEMAS DESCENTRALIZADOS",
                                            "descripcion":"Los sistemas descentralizados, están relacionados con las finanzas descentralizadas que permiten que los usuarios pueden integrar inversiones en diferente modalidades logrando la conexión  de activos digitales con desarrollo blockchain."
                    },
                                            {
                                                "fondo":video6,
                                            "titulo":"WALLETS",
                                            "descripcion":"Las wallets o billeteras virtuales permiten a los usuarios el control de sus activos, la trazabilidad de los mismos en tiempo real con costos mínimos por transacción sin el uso de intermediarios."
                    },
                                            {
                                                "fondo":video7,
                                            "titulo":"SMART CONTRACTS",
                                            "descripcion":"Los smart contract son esenciales para el mundo blockchain siendo programas informáticos que hacen que se ejecuten automáticamente procesos a medida que las empresas o personas involucradas acuerden unas cláusulas desde el principio. "
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
                               
                               
                                <div className=" container-fluid layer ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11" >
                                            <div className=""> <h1 className=" text-center titulox">{ite.titulo}</h1></div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <h2 className=" text-center color_desc">{ite.descripcion}</h2>
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

export default DesarrolloBlockchain;
