
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contenido from './pages/Contenido';
import Inicio from './pages/Inicio';
import Items from './pages/Items';
import Servicios from './pages/Servicios';
import ThreeScene from './pages/ThreeScene';
import Tjs from './pages/Tjs';
import Model3 from './components/Model3';
import { Sillaverde } from './components/Sillaverde/Sillaverde';
import ModelX from './components/ModelX';
import ScrollServices from './components/ScrollServices';

import ItemServicios from './components/ItemServicios';
import Nosotros from './pages/Nosotros';
import Incubadoras from './pages/Incubadoras'
import Cryptoversox from './pages/Cryptoversox';
import Academy from './pages/Academy';
import Contactanos from './pages/Contactanos';
import DesarrolloBlockchain from './pages/DesarrolloBlockchain';
import Sistematizacion from './pages/Sistematizacion';
import RealidadAumentada from './pages/RealidadAumentada';
import RealidadVirtual from './pages/RealidadVirtual';
import Consultorias from './pages/Consultorias';
import Water from './components/Water';
import Services from './pages/Services';
import Pruebas from './pages/Pruebas';
import Loading from './components/Loading';
import Alerta from './components/Alerta';
import Incuba from './pages/Incuba';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Tjs />} />
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


     


      {/*<Route path="/in" element={<Contenido />} />
      <Route path="/item" element={<Items />} />    
      <Route path="/esto" element={<ThreeScene />} />
      <Route path="/obj" element={<Model3 />} />
      <Route path="/final" element={<ModelX />} />
      <Route path="/scroll" element={<ScrollServices />} />
      <Route path="/item_servicios" element={<ItemServicios />} />
      <Route path="/cryptoversox" element={<Cryptoversox />} />
      <Route path="/academy" element={<Academy />} />

       <Route path="/loading" element={<Incuba/>} />
       
      <Route path="/agua" element={<Water />} />*/}
      

    </Routes>
  </BrowserRouter>
  );
}

export default App;
