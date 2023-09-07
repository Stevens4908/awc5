import React, { useRef, Suspense } from "react";
import { Canvas, extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import {CubeTextureLoader} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import '../styles/App.css'


import Img1 from '../assets/img/Spacebox2/Spacebox_front.webp'
import Img2 from '../assets/img/Spacebox2/Spacebox_back.webp'
import Img3 from '../assets/img/Spacebox2/Spacebox_top.webp'
import Img4 from '../assets/img/Spacebox2/Spacebox_bottom.webp'
import Img5 from '../assets/img/Spacebox2/Spacebox_right.webp'
import Img6 from '../assets/img/Spacebox2/Spacebox_left.webp'

import { Spaceship } from "../components/Modelos3d/Spaceship.js";
import '../styles/mystyle.css'

import img from "../assets/img/Volcanic.png"

import InicioItems from "../components/InicioItems";
import Loading from "../components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';


extend({ OrbitControls });

class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDelayedComponent: false
    };
  }

  componentDidMount() {
    // Simula un retraso antes de mostrar DelayedComponent
    this.delayTimeout = setTimeout(() => {
      this.setState({ showDelayedComponent: true });
    }, 1000); // Cambia este valor al tiempo deseado en milisegundos
  }

  componentWillUnmount() {
    // Limpieza del timeout si el componente se desmonta
    clearTimeout(this.delayTimeout);
  }

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
            autoRotate={true}
            enableZoom={true}
            enable={false}
            autoRotateSpeed  = {1.0}
          />
          
        );
        
      };
      

      // Loads the skybox texture and applies it to the scene.
      function SkyBox() {
        const { scene } = useThree();
       
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

    <React.Fragment>

      <Suspense fallback={<Loading/>}>
           
            <Canvas style={{height:'100vh'}}>
             
              <SkyBox camera={{position:[100,0,0]}}/>
              <ambientLight intensity={1} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
    
              <Spaceship  />
               
              <CameraControls/> 
              <Esfera/>

            </Canvas>

            {this.state.showDelayedComponent && <InicioItems/>}
            
 
      </Suspense>

    </React.Fragment>


         );
    }


}
 
export default Inicio;