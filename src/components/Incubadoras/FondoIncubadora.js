import React from "react";
import { Player, ControlBar } from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../../assets/videos/thor.mp4'
import foto from '../../assets/img/fondo_inc.jpg'

import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";

function FondoIncubadora() 
{
    return ( 
        
        <Fullpage>
               
                <FullPageSections>
                    
                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                        <img src={foto}></img>

                        
                                
                         
                    </FullpageSection>
                    
                   
                   
                </FullPageSections>
        </Fullpage>


    );
}

export default FondoIncubadora;
