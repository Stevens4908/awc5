/*
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import img from "../../assets/img/sedna.jpg"

const Planet = () => {


    const texture = useLoader(TextureLoader, img);
  
  
  
    return (

      <mesh position={[0, 0.5, -5]}>
                <sphereGeometry attach="geometry" args={[21, 32, 32]} />
                <meshStandardMaterial
                attach="material"
                map={texture}
                
                speed={5} // Speed (default=1)
                color="#f8f8f8"
               
                 />
      </mesh>
    );
  };

  export default Planet; */