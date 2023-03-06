import React from 'react';

import { Player, ControlBar, BigPlayButton } from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../../assets/videos/vid/Sobre Nosotros.webm'

import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";


function FondoVideo () { 

   
    return ( 

        
        <Fullpage>
               
                <FullPageSections>
                    
                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

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

                              
                        </Player>

                        
                                
                         
                    </FullpageSection>
                    
                   
                   
                </FullPageSections>
        </Fullpage>

     );
}

export default FondoVideo;