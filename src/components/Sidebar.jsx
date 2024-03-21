import React from "react";
import { Link } from "react-router-dom";
import LogoDesktop from "../assets/img/Logo-Desktop.png";

const Sidebar = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-300 p-4">
      <div className="bg-white mt-8 rounded-xl p-4">
        <img
          src={LogoDesktop}
          className="h-[30px] lg:h-7 hidden ml-5 lg:block "
          alt="logo de la empresa"
        />
        <Link to="/Perfil/Misresultados">
          <button className="w-full flex p-2 mb-4 mt-8 bg-gray-200 text-indigo-900 rounded-2xl text-center">
            Mis Resultados
          </button>
        </Link>
        <Link to="/Perfil/ActualizarPerfil">
          <button className="w-full flex p-2 mb-4 bg-gray-200 text-indigo-900 rounded-2xl text-center">
            Actualizar Información
          </button>
        </Link>
        <Link to="/Perfil/CambiarPassword">
          <button className="w-full flex p-2 mb-4 bg-gray-200 text-indigo-900 rounded-2xl text-center">
            Cambiar Contraseña
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
