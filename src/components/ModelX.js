import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

 import { Sillaverde } from './Sillaverde/Sillaverde';
//import { Robot } from './Sillaverde/Robot';

export default function Model3() {
   return (
    <div style={{height :"100vh"}}>
      <Canvas camera={{position:[100,80,20]}} >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null} >
              <Sillaverde position={[0.025, -0.9, 0]}/>
         </Suspense>
         <OrbitControls />
      </Canvas>
      </div>
   );
}