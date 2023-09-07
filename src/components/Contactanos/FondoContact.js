import React from "react";
import { Player, ControlBar} from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../../assets/videos/vid/Contactanos1.mp4'

import Fullpage ,{FullPageSections,FullpageSection}from "@ap.cx/react-fullpage";

function FondoContact() 
{
    return ( 





<React.Fragment>




   
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


</React.Fragment>





















    );
}

export default FondoContact;
