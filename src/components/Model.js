import React from "react";

import { useLoader } from "@react-three/fiber";

import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import model from "../assets/models/silla/crab.3mf";
// import model from "../assets/models/silla/ArmChair_01_4k.gltf";


const Model = () => {
    
    const silla = useLoader(ThreeMFLoader, model);
    // const silla = useLoader(GLTFLoader, model);
    
    return (
        <group>
            <primitive object={silla} />
        </group>
    );
};

export default Model;


