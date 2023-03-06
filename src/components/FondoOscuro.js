import React from "react";
import fondo_oscuro from '../assets/img/black.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function FondoOscuro () {
    return ( 

           

        <div className='container-fluid layx'>
            <div className='row'>
              <div className='col-md-12 ' >
                  <img className="img-fluid" src={fondo_oscuro}></img>
              </div>
            </div>
        </div>

          

     );
}



export default FondoOscuro;