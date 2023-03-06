import React, { useRef, Suspense } from "react";
import { Canvas, extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import '../styles/App.css'
import * as THREE from 'three'

//universo morado original

/*import Img1 from '../assets/img/redeclipse_ft.png'
import Img2 from '../assets/img/redeclipse_bk.png'
import Img3 from '../assets/img/redeclipse_up.png'
import Img4 from '../assets/img/redeclipse_dn.png'
import Img5 from '../assets/img/redeclipse_rt.png'
import Img6 from '../assets/img/redeclipse_lf.png'*/

//universo morado y azul

import Img1 from '../assets/img/Spacebox2/Spacebox_front.png'
import Img2 from '../assets/img/Spacebox2/Spacebox_back.png'
import Img3 from '../assets/img/Spacebox2/Spacebox_top.png'
import Img4 from '../assets/img/Spacebox2/Spacebox_bottom.png'
import Img5 from '../assets/img/Spacebox2/Spacebox_right.png'
import Img6 from '../assets/img/Spacebox2/Spacebox_left.png'

// universo azul con polvo

/*import Img1 from '../assets/img/Spacebox4/SkyBlue_front5.png'
import Img2 from '../assets/img/Spacebox4/SkyBlue_back6.png'
import Img3 from '../assets/img/Spacebox4/SkyBlue_top3.png'
import Img4 from '../assets/img/Spacebox4/SkyBlue_bottom4.png'
import Img5 from '../assets/img/Spacebox4/SkyBlue_left2.png'
import Img6 from '../assets/img/Spacebox4/SkyBlue_right1.png'*/


/*import Img1 from '../assets/img/Spacebox3/LightGreen_front5.png'
import Img2 from '../assets/img/Spacebox3/LightGreen_back6.png'
import Img3 from '../assets/img/Spacebox3/LightGreen_top3.png'
import Img4 from '../assets/img/Spacebox3/LightGreen_bottom4.png'
import Img5 from '../assets/img/Spacebox3/LightGreen_left2.png'
import Img6 from '../assets/img/Spacebox3/LightGreen_right1.png'*/

//bosque
/*import Img1 from '../assets/img/x/posx.jpg'
import Img2 from '../assets/img/x/negx.jpg'
import Img3 from '../assets/img/x/posy.jpg'
import Img4 from '../assets/img/x/negy.jpg'
import Img5 from '../assets/img/x/posz.jpg'
import Img6 from '../assets/img/x/negz.jpg'*/


import Model from "../components/Model.js";
//import { Sillaverde } from "../components/Sillaverde/Sillaverde";
import { Spaceship } from "../components/Modelos3d/Spaceship.js";
import '../styles/mystyle.css'
import Servicios from "./Servicios";
//import { Purpleplanet } from "../components/Modelos3d/Purpleplanet";
//import { Sillaverde } from "../components/Sillaverde/Sillaverde";
import  Planet from "../components/Modelos3d/Planet";
import img from "../assets/img/Volcanic.png"
//import ScrollServices from "../components/ScrollServices";
//import InicioScroll from "../components/InicioScroll";
import InicioItems from "../components/InicioItems";
import Loading from "../components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alerta from "../components/Alerta";

extend({ OrbitControls });

class Inicio extends React.Component {



    render() { 


      


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
            autoRotate={true}
            enableZoom={true}
            enable={false}
           // enableRotate  ={false}
            autoRotateSpeed  = {1.0}
          />
          
        );
        
      };
      

      // Loads the skybox texture and applies it to the scene.
      function SkyBox() {
        const { scene } = useThree();
        const {
          camera,
        } = useThree();
      
        const loader = new CubeTextureLoader();
        // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
        const texture = loader.load([
          Img1,
          Img2,
          Img3,
          Img4,
          Img5,
          Img6
        ]);
      
        // Set the scene background property to the resulting texture.
        scene.background = texture;
        scene.size=1;
       
        
        return null;
      }
      
      // Geometry
      function Sphere() {
        const { scene, gl } = useThree();
        // The cubeRenderTarget is used to generate a texture for the reflective sphere.
        // It must be updated on each frame in order to track camera movement and other changes.
        const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
          format: RGBFormat,
          generateMipmaps: true,
          minFilter: LinearMipmapLinearFilter
        });
        const cubeCamera = new CubeCamera(1, 10, cubeRenderTarget);
        cubeCamera.position.set(0, 0, 0);
        scene.add(cubeCamera);
      
        // Update the cubeCamera with current renderer and scene.
        useFrame(() => cubeCamera.update(gl, scene));
      
        return (
          <mesh visible position={[4, 0, 5]} rotation={[0, 0, 0]} castShadow>
            <directionalLight intensity={0.5} />
            <sphereGeometry attach="geometry" args={[2, 32, 32]} />
            <meshBasicMaterial
              attach="material"
              envMap={cubeCamera.renderTarget.texture}
              color="white"
              roughness={0.1}
              metalness={1}
            />
          </mesh>
        );
      }  


      function Esfera() {

        const mesh = useRef()
        const texture = useLoader(TextureLoader, img);
        useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
        return (
          <mesh position={[-9, -3, -14]} rotation={[0, 0, 0]} ref={mesh} scale={2}>
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
   





      

        return ( 

<Suspense fallback={<Loading/>}>
           
            <Canvas style={{height:'100vh'}}
           
            >
              {/*<Planet/>*/}
            <SkyBox camera={{position:[100,0,0]}}/>
            <ambientLight intensity={1} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />

        
              <Spaceship  />
               
              
        
             <CameraControls/> 
            <Esfera/>




            </Canvas>

            <InicioItems/>
  
            
          
            
            
          
          
</Suspense>
         );
    }


}
 
export default Inicio;