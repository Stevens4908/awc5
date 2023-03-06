import React, { useRef, useState, Suspense,MathUtils } from 'react'
import { Canvas,useLoader ,useFrame ,useThree } from '@react-three/fiber'
import M1 from '../assets/img/cuarto/puertax.jpg'
import M2 from '../assets/img/cuarto/pared2.jpg'
import M3 from '../assets/img/cuarto/galaxia.jpg'
import M4 from '../assets/img/cuarto/marco.jpg'
import Mc from '../assets/img/cuarto/cuadro.jpg'
import Me from '../assets/img/exit_dark.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import cursors from '../assets/img/nave.png'
/* import cursors1 from '../assets/img/telescopio.png' */
import Model from '../components/Model'
import {CameraShake} from '@react-three/drei'
import * as THREE from 'three'
// import { LoadingSpinner } from 'video-react'
import { LoadingManager } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Silla1_new } from '../components/Modelos3d/Silla1_new'
import { Cuadro_negro } from '../components/Modelos3d/Cuadro_negro'
import { Silla_x } from '../components/Modelos3d/Silla_x'
import Loading from '../components/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';


class Tjs extends React.Component {
    
  

  
  
    render() { 
       

    
     

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
 

function Cuadro(){
  const [clicked,setClicked]=useState(false);
  const [abrir,setabrir]=useState(false);
  const markedRef=useRef();
  const vec=new THREE.Vector3();


  
    const colorMap = useLoader(TextureLoader, Mc)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))



    return(
        <mesh

        position={[-3,1, 0.2]}
        ref={markedRef}
        onClick={() => setClicked(!clicked)}
        >
            <boxGeometry args={[1,1,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
 
    );
  }

  function Entrada(){
 
 
  
    
      const colorMap = useLoader(TextureLoader, Me)
      //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
  
  
  
      return(
          <mesh
  
          position={[0, 2, 0.2]}
          
         
          >
              <boxGeometry args={[1.5,0.5,0]}  />
              <meshStandardMaterial map={colorMap}/>
          </mesh>
   
      );
    }


  function Puerta(){
  const [abrir,setabrir]=useState(false);
  const [cerrar,setcerrar]=useState(false);

   let ref
   let pos
  
   const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M1)
  // ref =group => group.rotateY(5*Math.PI/3)
   //pos=[0.5,-0.7, 0.75]
    useFrame((state) => {
      if(abrir){
        setTimeout(function(){
          mesh.current.position.x=-0.5
          mesh.current.position.y=-0.7
          mesh.current.position.z=0.75
          mesh.current.rotation.y = (5*Math.PI/3)
        },200);
       
         // pos=[0.5,-0.7, 0.75]
         return null;
      }
      if(!cerrar){
        setTimeout(function(){
        mesh.current.position.x=0
        mesh.current.position.y=-0.7
        mesh.current.position.z=0.1
        mesh.current.rotation.y = (Math.PI)
        },200);
          return null;
      }
      
    })
   

    
    return(
      <group ref={ref}>
        <mesh
                position={pos}
                ref={mesh}
                onPointerEnter={(e) => {
                  setabrir(true)
                  document.body.style.cursor='url('+cursors+'), auto'
                }
                } 
               /* onPointerOut={(e) =>{
                  setabrir(false)
                  document.body.style.cursor='url('+cursors1+'), auto'
                }
                } */
                >
                
                    <boxGeometry args={[1.8,4,0.09]}  />
                    <pointLight position={[0, -0.7, -0.05]} intensity={0.01} color="#fff" />
                    <directionalLight color="white" intensity={0.02} position={[-1, -0.7, -8]} rotation={[0,0,0]}/>
                    <meshStandardMaterial map={colorMap} />
                </mesh>
      </group>
       
    );
  }
  
  function Marco(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M4)
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    return(
        <mesh
        position={[0,-0.6, 0]}
        ref={mesh}
      
      
        >
            <boxGeometry args={[2.3,4.2,0]}  />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
  }
  function Galaxia(){
    const [clicks,setClick]=useState(false);
    const [clicked,setClicked]=useState(false);
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M3)
    const vec=new THREE.Vector3();
   
    useFrame(state=>{
      if(clicked){
        state.camera.lookAt(mesh.current.position)
        state.camera.position.lerp(vec.set(0,0,0),.03)
        state.camera.updateProjectionMatrix()
        window.open("/inicio", "_self");
      }
      return null;
    });

    
    return(
        <mesh
        position={[0,-0.7, 0.06]}
        ref={mesh}
        onClick={() => setClicked(!clicked)}
      
        >
            <boxGeometry args={[1.8,4,0]}  />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
  }
  function Pared(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M2)
    //mesh.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta
   //useFrame((state, delta) => void (mesh.current.rotation.y =(-state.mouse.x * Math.PI) ))
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))
    return(
        <mesh
        position={[0,0,  -0.3]}
        ref={mesh}
        >
            <boxGeometry args={[13.99,9,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
 
    );
  }

  function ParedD(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M2)
    //mesh.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta
   //useFrame((state, delta) => void (mesh.current.rotation.y =(-state.mouse.x * Math.PI) ))
    //useFrame((state, delta) => (mesh.current.rotation.z += 0.01))

    let ref
    let pos
     ref =group => group.rotateY(5*Math.PI/3)
   pos=[5,-0.1, -4]
    return(
      <group ref={ref}>
        <mesh
       position={pos}
      
        ref={mesh}
        >
              <boxGeometry args={[5,8,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
       </group>
    );
  }

  function ParedI(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M2)
    let ref
    let pos
     ref =group => group.rotateY(Math.PI/4)
   pos=[-7,-0.1, -5]
    return(
      <group ref={ref}>
        <mesh
       position={pos}
      
        ref={mesh}
        >
               <boxGeometry args={[5,8,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
       </group>
    );
  }

  function Suelo(){
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, M2)
    let ref
    let pos
     ref =group => group.rotateX(Math.PI/4)
   pos=[-7,-0.1, -5]
    return(
      <group ref={ref}>
        <mesh
       position={pos}
      
        ref={mesh}
        >
               <boxGeometry args={[5,8,0]}  />
            <meshStandardMaterial map={colorMap}/>
        </mesh>
       </group>
    );
  }



  
 
  function Prueba () {
   
   
    
    var bola_geo = new THREE.SphereGeometry(200,50,50);
    var bola_mat = new THREE.MeshBasicMaterial({color: 0xC8E511});
     let bola = new THREE.Mesh(bola_geo, bola_mat);
     
       bola.position.set(0,0,0)
  }
 

// 05 01 04
function Rig() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 0.5, 0, 5), 0.08))
  return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.5} />
}
return(



  
 <Suspense  fallback={ <Loading/>}>
  <Canvas style={{height:'100vh'}}>
  
     <ambientLight intensity={0} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.1} />
           <Rig/>
     <Pared/>
     <ParedD/>
     <ParedI/>
     <Suelo/>
     <Marco/>
     <Galaxia/>
     <Puerta/>
     {/*<Cuadro/>*/}
     {/*<Entrada/>*/} 
  
  
  {/*<Silla1_new/>*/}

  <Silla_x
   rotation={[0, 3.2, 0]}
   scale={0.19}
   position={[2.5, -2, 2]}
  />

  <Cuadro_negro
  
  rotation={[1.8, 1.5, 0]}
  scale={0.3}
  position={[-3.1, 0.3, 0]}
  /> 
 
  

{/* <Cuadro_negro
  rotation={[1.8, 1.5, 0]}
  scale={0.16}
  position={[-1.7,0.3,2]}
/> */}


 

  
    </Canvas>

 </Suspense>

   
);

    }
}
 
export default Tjs;