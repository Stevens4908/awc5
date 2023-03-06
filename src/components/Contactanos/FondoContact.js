import React from "react";
import { Player, ControlBar, BigPlayButton } from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../../assets/videos/vid/Contactanos.webm'

import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";

function FondoContact() 
{
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
                        </Player>

                        
                                
                         
                    </FullpageSection>
                    
                   
                   
                </FullPageSections>
        </Fullpage>


    );
}

export default FondoContact;
