
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import materiales from "../assets/models/silla2/12284_Chair_v1_l2.mtl"
import objeto  from "../assets/models/silla2/12284_Chair_v1_l2.obj"
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, materiales);
  const obj = useLoader(OBJLoader, objeto, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

export default function App() {
  return (
    <div className="App">
      <Canvas style={{height:"100vh"}}>
        <Suspense fallback={null}>
            <ambientLight intensity={10}></ambientLight>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
