import React from "react";
import { Player, ControlBar } from 'video-react';
//import 'video-react/dist/video-react.css'; 
import video from '../../assets/videos/vid/Asesoria.webm'
import "../../styles/mystyle.css"
import '../../styles/estilos_servicios.css'
import fondo_oscuro from '../../assets/img/black_x.jpg'


class VideoServicios extends React.Component {
    
    render() { 
        return (

            <React.Fragment>
    

                <div className='container-fluid lay_servicios 0 px-0'>
                    <div className='row'>
                    <div className='col-md-12 ' >
                        <img className="img-fluid" src={fondo_oscuro} style={{opacity:"0.4 " }}></img>
                    </div>
                    </div>
                </div>

               <div className="app video_servicios">


                  <Player  autoPlay={true}
                    muted='true'
                        playsInline
                        poster="/assets/poster.png"
                        src={video}
                        loop
                        > 
                        <ControlBar disableCompletely={true} />

  



                  </Player>

                    
                </div> 

            </React.Fragment>
        );
    }
}
 
export default VideoServicios;