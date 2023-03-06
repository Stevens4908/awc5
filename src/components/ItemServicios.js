/*
import React from "react";
import { Player, ControlBar } from 'video-react';
 //import 'video-react/dist/video-react.css'; 
 import video from '../assets/videos/iron.mp4'
 import video2 from '../assets/videos/strange.mp4'
 import video3 from '../assets/videos/thanos.mp4'
 import video4 from '../assets/videos/spiderman.mp4'
 import video5 from '../assets/videos/thor.mp4'
import Fullpage ,{FullPageSections,FullpageSection,FullpageNavigation}from "@ap.cx/react-fullpage";


class ItemServicios extends React.Component {
  
    render() { 

        const sub_itemes=[
            {
                "fondo":"ulr",
                "titulo":"Token",
                "descripcion":"BLABLALBLALBAl"
                
            },
            {
                "fondo":"ulr",
                "titulo":"NFT",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"DAPP",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"METAVERSO",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"SISTEMAS DESCENTRALIZADOS",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"WALLET",
                "descripcion":"BLABLALBLALBAl"
            },
            {
                "fondo":"ulr",
                "titulo":"SMART CONTRACT",
                "descripcion":"BLABLALBLALBAl"
            },
        ]

        const Itemes=[];

        for (let ite of sub_itemes) {
            Itemes.push(
                <FullpageSection style={{height:'100vh'}}>
                  <div className="centrado_sub_item">
                        <h1 style={{color:'black'}} className="Titulo_item ">{ite.titulo}</h1>
                        <p style={{color:"black"}} >
                           {ite.descripcion}
                        </p>
                    </div>
                </FullpageSection>
            )
        }
        return ( 
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    
                    <FullpageSection style={{height:'100vh'}}>

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video}
                                loop={true}
                                > 
                                <ControlBar disableCompletely={true} />
                        </Player>

                        
                                <p className="item_style">DESARROLLO BLOCKCHAIN</p>
                         
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video2}
                                loop={true}
                                > 
                                <ControlBar disableCompletely={true} />
                        </Player>

                        
                                <p className="item_style">AUTOMATIZACIÓN</p>
                         
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video3}
                                loop={true}
                                > 
                                <ControlBar disableCompletely={true} />
                        </Player>

                        
                                <p className="item_style">REALIDAD AUMENTADA</p>
                         
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video4}
                                loop={true}
                                > 
                                <ControlBar disableCompletely={true} />
                        </Player>

                        
                                <p className="item_style">REALIDAD VIRTUAL</p>
                         
                    </FullpageSection>
                    <FullpageSection style={{height:'100vh'}}>

                        <Player autoPlay={true}
                                muted={true}
                                playsInline
                                poster="/assets/poster.png"
                                src={video5}
                                loop={true}
                                > 
                                <ControlBar disableCompletely={true} />
                        </Player>

                        
                                <p className="item_style">CONSULTORIAS</p>
                         
                    </FullpageSection>
                   
                   
                </FullPageSections>
            </Fullpage>
         );
    }
}
 
export default ItemServicios;
*/