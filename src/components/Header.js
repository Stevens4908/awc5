import React from 'react';
import '../styles/mystyle.css'
import Logo from '../assets/img/log.png'
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
  

 

    render() { 

        const ir_inicio = () => {
            window.open("/inicio" , "_self")
        }

        return ( 
            <div className='hero'>
                <div className='left-h'>
                   <img src={Logo} alt="" className='logo' style={{cursor:"pointer" , zIndex:"2"}} onClick={ir_inicio}/>
                </div>
               
               
            </div>
            
         );
    }
}
 
export  default Header;