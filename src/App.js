
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
/*import Items from './pages/Items';
import Servicios from './pages/Servicios';
import ThreeScene from './pages/ThreeScene';*/
import Tjs from './pages/Tjs';
import {isMobile} from 'react-device-detect';




//import ScrollServices from './components/ScrollServices';


import Nosotros from './pages/Nosotros';
import Incubadoras from './pages/Incubadoras'
import Contactanos from './pages/Contactanos';
import DesarrolloBlockchain from './pages/DesarrolloBlockchain';
import Sistematizacion from './pages/Sistematizacion';
import RealidadAumentada from './pages/RealidadAumentada';
import RealidadVirtual from './pages/RealidadVirtual';
import Consultorias from './pages/Consultorias';
import Services from './pages/Services';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={isMobile ? <Inicio/> : <Tjs />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/blockchain" element={<DesarrolloBlockchain />} />
        <Route path="/sistematizacion" element={<Sistematizacion />} />
        <Route path="/aumentada" element={<RealidadAumentada />} />
        <Route path="/virtual" element={<RealidadVirtual />} />
        <Route path="/consultorias" element={<Consultorias />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/incubadoras" element={<Incubadoras />} />
        <Route path="/contactanos" element={<Contactanos />} />
      

      



        

      </Routes>
  </BrowserRouter>
  );
}

export default App;
