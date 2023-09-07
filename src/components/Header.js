import React from 'react';
import '../styles/mystyle.css'
import Logo from '../assets/img/log3.png'


class Header extends React.Component {
   
  

 

    render() { 

        const ir_inicio = () => {
            window.open("/inicio" , "_self")
        }

        return ( 
            
                <div className='left-h'>
                   <img src={Logo} alt="" className='logo' style={{cursor:"pointer" , zIndex:"2"}} onClick={ir_inicio}/>
                </div>
               
               
        
            
         );
    }
}
 
export  default Header;