import { useContext } from 'react';
import AuthContext from '../context/Context';
import LogoMobile from '../assets/img/Logo-Movil.png';
import LogoDesktop from '../assets/img/Logo-Desktop.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import HeaderAdmin from './HeaderAdmin';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { clearToken,userData } = useContext(AuthContext);
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
    <div className="flex w-[100%] h-[80px] justify-start bg-[var(--secondary)] items-center z-50">
      <div className="w-[200px] h-[50px] pl-5 flex">
        <NavLink
          to="/"
          className="w-[200px] h-[50px] pl-5 flex justify-center items-center"
        >
          <img
            src={LogoMobile}
            alt="Logo-lofwork"
            className="block lg:hidden w-[160px] h-[30px]"
          />
          <img
            src={LogoDesktop}
            alt="Logo-lofwork"
            className="hidden lg:block"
          />
        </NavLink>
      </div>
      <div className="flex justify-end w-full">
      <div className="flex justify-between items-center p-3 lg:hidden">
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
      </div>
      <div>
          <HeaderAdmin cerrarSesion={cerrarSesion} isOpen={isOpen} setIsOpen={setIsOpen} closeNav={closeNav}/>        
      </div>
    </div>
  );
};


export default Header;
