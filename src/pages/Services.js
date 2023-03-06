
import React from "react";
import { Player, ControlBar } from 'video-react';
import '../styles/video-react.css';
import video from '../assets/videos/vid/servicios.webm'

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import '../styles/estilos_servicios.css'
import  Movimiento from '../assets/js/myscript.js';
import ServiciosItems from '../components/Servicios/ServiciosItems';


class Services extends React.Component {

    

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
        
             
      


        return (

        <React.Fragment> 
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                        
                       
                <FullpageSection style={{ height: '100vh' }} >
                            <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video}
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


                                
                            </Player>
                            
                        </FullpageSection>
                    
                </FullPageSections>
                
            </Fullpage>

            <ServiciosItems />
        </React.Fragment>       
        );



    }
}

export default Services;
