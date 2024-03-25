import React from "react";
import { Link } from "react-router-dom";
import LogoDesktop from "../assets/img/Logo-Desktop.png";

const Sidebar = () => {
  return (
    <div className="w-[30%] h-[80vh] p-5 border-e-2 shadow-lg shadow-slate-500 bg-white">
      <div className=" mt-8 rounded-xl p-4">
        <img
          src={LogoDesktop}
          className="h-[30px] lg:h-7 hidden ml-5 lg:block "
          alt="logo de la empresa"
        />
        <Link to="/Perfil/Misresultados">
          <button className="w-full flex p-2 mb-4 mt-8 bg-[var(--primary)] px-4 text-white rounded-2xl text-center">
            Mis Resultados
          </button>
        </Link>
        <Link to="/Perfil/ActualizarPerfil">
          <button className="w-full flex p-2 mb-4 mt-8 bg-[var(--primary)] px-4 text-white rounded-2xl text-center">
            Actualizar Información
          </button>
        </Link>
        <Link to="/Perfil/CambiarPassword">
          <button className="w-full flex p-2 mb-4 mt-8 bg-[var(--primary)] px-4 text-white rounded-2xl text-center">
            Cambiar Contraseña
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
