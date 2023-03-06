import React, { Component } from "react";

import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const style = {
    height: 500 // we can control scene size by setting container dimensions
};

class ThreeScene extends Component {
    constructor() {
        super();
        this.state = {
            mouse :new THREE.Vector2(),
            target: new THREE.Vector2(),
            windowHalf:new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 )
        };
        this.test3 = 'this is test3';
      }
  
   
   

    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        //this.animate();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
       // this.controls.dispose();
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
       
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 500 
        );
        this.camera.position.z = 9; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
       // this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement ); // mount using React ref
    
        document.addEventListener( 'mousemove', ()=>{this.onMouseMove()}, false );
       
    };

     onMouseMove = (e) => {
    
    }
  

     

    // Here should come custom code.
    // Code below is taken from Three.js BoxGeometry example
    // https://threejs.org/docs/#api/en/geometries/BoxGeometry
    addCustomSceneObjects = () => {
   
        const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
        const material = new THREE.MeshNormalMaterial();
        
        for ( let i = 0; i < 150; i ++ ) {
        
          const object = new THREE.Mesh( geometry, material );
          object.position.x = Math.random() * 80 - 40;
          object.position.y = Math.random() * 80 - 40;
          object.position.z = Math.random() * 80 - 40;
          object.rotation.x = Math.random() * 2 * Math.PI;
          object.rotation.y = Math.random() * 2 * Math.PI;
          object.rotation.z = Math.random() * 2 * Math.PI;
          this.scene.add( object );
              
            }
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        const lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };


     animate =() =>{

        this.target.x = ( 1 - this.mouse.x ) * 0.0002;
      this.target.y = ( 1 - this.mouse.y ) * 0.0002;
      
      this.camera.rotation.x += 0.05 * ( this.target.y - this.camera.rotation.x );
      this.camera.rotation.y += 0.05 * ( this.target.x - this.camera.rotation.y );
      this.renderer.render( this.scene, this.camera );
      this.requestID = window.requestAnimationFrame(this.animate);
    
    }

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };
   
    render() {
        return <div className="centrado_total" style={style} ref={ref => (this.mount = ref)} />;
    }
}

export default ThreeScene