import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loading.css'
import  { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Alerta from "./Alerta";




function Loading() {


    


    return ( 

        <React.Fragment>
           

       

           <div className="loading-container">
                <div className="loading"></div>
                 <div id="loading-text">CARGANDO</div>
            </div>

          

        {/*<div id="load">
            <div>O</div>
            <div>D</div>
            <div>N</div>
            <div>A</div>
            <div>G</div>
            <div>R</div>
            <div>A</div>
            <div>C</div>
        </div>}




        {/*<body style={{backgroundColor: "black" , height:"100vh"}}>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12">
                        <div className="row  justify-content-center">
                            <div className="col-6  text-center  mt-5">
                                    <div className="spinner-border text-primary girador" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </body>*/}
            
        </React.Fragment>

     );
}




export default Loading;