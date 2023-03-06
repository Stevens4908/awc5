import React from "react";
import FondoCryptoversox from "../components/Cryptoversox/FondoCryptoversox";
import FotosCryptoversox from "../components/Cryptoversox/FotosCryptoversox";
import Water from "../components/Water";
import '../styles/estilos_cryptoversox.css'

class Cryptoversox extends React.Component {
    state = {  } 
    render() { 
        return (

            <React.Fragment>
                <FondoCryptoversox/>
                <FotosCryptoversox/>
                <Water/>
            </React.Fragment>

        );
    }
}
 
export default Cryptoversox ;