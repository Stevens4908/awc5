import React from 'react';
import video from '../../assets/videos/iron.mp4'
import video2 from '../../assets/videos/strange.mp4'
import video3 from '../../assets/videos/thanos.mp4'
import video4 from '../../assets/videos/spiderman.mp4'
import video5 from '../../assets/videos/thor.mp4'
import { Player, ControlBar } from 'video-react';
//import 'video-react/dist/video-react.css'; 


import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";


function FondosBlockchain () {
    return ( 

        <React.Fragment>

            
                    <Fullpage>
                                <FullpageNavigation/>
                            <FullPageSections>
                                   
                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player 
                                        autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video}
                                                loop={true}
                                                > 
                                      
                                        </Player>

                                    </FullpageSection> 
                                    
                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video2}
                                                loop={true}
                                                > 
                                     
                                        </Player>

                                    </FullpageSection>

                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video3}
                                                loop={true}
                                                > 
                                     
                                        </Player>                       
                                       
                                    </FullpageSection>

                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video4}
                                                loop={true}
                                                > 
                                     
                                        </Player>                       
                                       
                                    </FullpageSection>

                                    <FullpageSection style={{height:'100vh'}} className="video_responsive">

                                        <Player autoPlay={true}
                                                muted={true}
                                                playsInline
                                                poster="/assets/poster.png"
                                                src={video5}
                                                loop={true}
                                                > 
                                     
                                        </Player>                       
                                       
                                    </FullpageSection>
                                    
                                   
                            </FullPageSections>
                    </Fullpage>



        </React.Fragment>
        
     );
}

export default FondosBlockchain;