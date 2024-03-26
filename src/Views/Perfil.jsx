import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Misresultados from "./Misresultados";
import ActualizarPerfil from "./ActualizarPerfil";
import CambiarPassword from "./CambiarPassword";
import Bienvenida from "./Bienvenida"

const Perfil = () => {

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Bienvenida/>} />
        <Route path="MisResultados" element={<Misresultados/>}/>
        <Route path="ActualizarPerfil" element={<ActualizarPerfil />} />
        <Route path="CambiarPassword" element={<CambiarPassword />} />
      </Routes>
    </div>
  );
};

export default Perfil;