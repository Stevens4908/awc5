/*
import React, { useRef, useState, Suspense } from 'react'
import { Canvas,useLoader, extend, useFrame, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {  CameraShake } from '@react-three/drei'

import * as THREE from 'three'
import '../styles/mystyle.css'
import S1 from '../assets/img/fondo_espacio.jpg'
import S2 from '../assets/img/sun_map.jpg'
import { Robot, Sillaverde } from '../components/Sillaverde/Robot'
import foto from '../assets/img/power.jpg'
 import VideoServicios from '../components/Servicios/VideoServicios';
// import ScrollServices from '../components/ScrollServices';
// import InicioScroll from '../components/InicioScroll';
import ServiciosItems from '../components/Servicios/ServiciosItems';
import fondo_oscuro from '../assets/img/black.jpg'
import FondoOscuro from '../components/FondoOscuro';



extend({ OrbitControls });



class Servicios extends React.Component {
  

    render() { 

/*
      const CameraControls = () => {
        // Get a reference to the Three.js Camera, and the canvas html element.
        // We need these to setup the OrbitControls class.
        // https://threejs.org/docs/#examples/en/controls/OrbitControls
      
        const {
          camera,
          gl: { domElement }
        } = useThree();
      
        // Ref to the controls, so that we can update them on every frame using useFrame
        const controls = useRef();
        
        useFrame(() => controls.current.update());
        
        return (
          
          <orbitControls
            ref={controls}
            args={[camera, domElement]}
        //    maxAzimuthAngle={0.01}
          //  maxPolarAngle={1}
          //  minAzimuthAngle={1}
          //  minPolarAngle={20}
           
          />
          
        );
        
      };
*/
/*
      function Rig() {
        const [vec] = useState(() => new THREE.Vector3())
        const { camera, mouse } = useThree()
        useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0))
        return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.01} pitchFrequency={0.01} rollFrequency={0.01} />
      }
      */
/*
        function Esfera() {
            const mesh = useRef()
            const texture = useLoader(TextureLoader, S2);
            useFrame((state, delta) => (mesh.current.rotation.y += 0.001))
            return (
              <mesh 
                position={[-5, -2, 1]} rotation={[0, 0, 0]} ref={mesh} scale={[5,5,5]}> 
                <sphereGeometry attach="geometry" args={[1, 16, 16]} />
                <meshStandardMaterial
                  attach="material"
                  map={texture}
                  color="gray"
                  transparent
                  roughness={0.1}
                  metalness={0.1}
                  
                />
                
               
               
              </mesh>
            );
          }



        function Fondo(){
            const mesh = useRef()
            const colorMap = useLoader(TextureLoader, S1)
            //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
            return(
                <mesh
                position={[0,0, 0]}
                ref={mesh}
                >
                    <boxGeometry args={[15.3,7.7,0]}  />
                    <meshStandardMaterial map={colorMap}/>
                </mesh>
         
            );
          }




        return (  

          <React.Fragment>

           

                
               
            
            <Canvas style={{height:'100vh' , color:'black'}}>

              
                <ambientLight intensity={0.1} />
                <ambientLight intensity={0.3} />
                <directionalLight intensity={0.3} />
            <Fondo/>
                <Esfera
                
                />
              { /* <Robot/> */ /*} 
                
                
                      { /* <Rig/> */ /*}
                     {/* <CameraControls/> */  /*}


                     
            </Canvas>
       
            
            <VideoServicios/>
            <ServiciosItems/>
            
           

          </React.Fragment>

            );
    }
}
 
export default Servicios; */