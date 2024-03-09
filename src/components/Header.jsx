import React, { useContext } from 'react';
import AuthContext from '../context/Context';
import LogoMobile from '../assets/img/Logo-Movil.png'
import LogoDesktop from '../assets/img/Logo-Desktop.png'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, clearToken } = useContext(AuthContext);
  const closeNav = () => {
    setIsOpen(false);
  };

  const cerrarSesion = () => {
    clearToken(); 
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada con éxito',
    });
  };
  
  return (
    <div className=" flex w-[100%] h-[80px] justify-between bg-[var(--secondary)] items-center z-50">
      <div className="w-[200px] h-[50px] pl-5 flex">
        <NavLink to="/" className="w-[200px] h-[50px] pl-5 flex justify-center items-center">
          <img src={LogoMobile} alt="Logo-lofwork" className='block lg:hidden w-[160px] h-[30px]' />
          <img src={LogoDesktop} alt="Logo-lofwork" className='hidden lg:block'/>
        </NavLink>
      </div>
      <div className="flex justify-end items-center p-3 lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 text-[var(--primary)]"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
      {/*menu desktop */}
      <div className="hidden lg:flex w-[60%] justify-between items-center px-10">
        <Link to="/" className="flex gap-3 items-center text-[var(--primary)] font-black px-2">
          Home{" "}<FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to="/Blog" className="flex gap-3 items-center text-[var(--primary)] font-black">
          Blog{" "}<FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link
          to="/Diagnostico"
          className="flex gap-3 items-center text-[var(--primary)] font-black"
        >Diagnóstico{" "}<FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link
          to="mailto:contacto@lofwork.cl"
          className="flex gap-3 items-center text-[var(--primary)] font-black"
        >
          Contacto{" "}<FontAwesomeIcon icon={faAngleRight} />
        </Link>
        {!token ? <Link
          to="/Login"
          className="w-[100px] h-[40px] justify-center items-center flex bg-[var(--pink)] rounded-3xl border-2 border-[var(--pink)] text-white"
        >
          Login
        </Link> : <Link
          onClick={cerrarSesion}
          className="w-[150px] h-[40px] justify-center items-center flex bg-[var(--pink)] rounded-3xl border-2 border-[var(--pink)] text-white"
        >
          Cerrar Sesion
        </Link>}
        {!token ? <Link
          to="/Registro"
          className="w-[100px] h-[40px] justify-center items-center flex bg-[var(--secondary)] rounded-3xl border-2 border-[var(--pink)] text-[var(--pink)]">
          Registrate
        </Link> : null}
        
      </div>
      {/*menu mobile */}
      <div
        className={
          isOpen
            ? 'lg:hidden bg-[var(--primary)] w-[180px] h-[80vh] absolute top-0 right-0 flex flex-col items-center justify-arround rounded-[0px_0px_0px_25px] z-30'
            : 'hidden'
        }
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-[100%] justify-end px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x text-white m-2"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="w-[100%]">
          <Link
            to="/"
            className="w-[100%] p-4 text-center text-white text-xl flex justify-between items-center hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Home <FontAwesomeIcon icon={faAngleRight} />
          </Link>
          <Link
            to="/Diagnostico"
            className="w-[100%] p-4 text-center text-white text-xl flex justify-between items-center hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Diagnóstico <FontAwesomeIcon icon={faAngleRight} />
          </Link>
          <Link
            to="/Blog"
            className="w-[100%] p-4 text-center text-white text-xl flex justify-between items-center hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Blog <FontAwesomeIcon icon={faAngleRight} />
          </Link>
          <Link
            to="mailto:contacto@lofwork.cl"
            className="w-[100%] p-4 text-center text-white text-xl flex justify-between items-center hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Contacto <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div className="w-[100%] flex flex-col items-center mt-10 gap-3">
          {!token ? <Link
            to="/Login"
            className="w-[70%] p-3 text-center rounded-3xl border-2 border-white text-white text-lg font-black items-center bg-[var(--pink)] hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Login
          </Link> : <Link
            className="w-[80%] p-3 text-center rounded-3xl border-2 border-white text-white text-lg font-black items-center bg-[var(--pink)] hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={() => { closeNav(); cerrarSesion(); }}
          >
            Cerrar Sesion
          </Link>}
          {!token ? <Link
            to="/Registro"
            className="w-[70%] p-3 text-center rounded-3xl bg-[var(--secondary)]  text-[var(--pink)] text-lg font-black items-center hover:bg-[var(--primary)] hover:text-[var(--secondary)] hover:border-2 hover:border-white"
            onClick={closeNav}
          >
            Registrate
          </Link> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
