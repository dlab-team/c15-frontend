import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const HeaderClient = ({cerrarSesion, isOpen, setIsOpen, closeNav}) => {
  return (
    <div>
        {/*menu desktop */}
      <div className="hidden lg:flex w-[100%] justify-between items-center px-5 gap-5">
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
        <Link
          to="/Perfil"
          className="flex gap-3 items-center text-[var(--primary)] font-black"
        >Perfil{" "}<FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link
          onClick={cerrarSesion}
          className="w-[150px] h-[40px] justify-center items-center flex bg-[var(--pink)] rounded-3xl border-2 border-[var(--pink)] text-white"
        >
          Cerrar Sesion
        </Link> 
        
        
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
          <Link
            to="/Perfil"
            className="w-[100%] p-4 text-center text-white text-xl flex justify-between items-center hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={closeNav}
          >
            Perfil <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div className="w-[100%] flex flex-col items-center mt-10 gap-3">
         <Link
            className="w-[80%] p-3 text-center rounded-3xl border-2 border-white text-white text-lg font-black items-center bg-[var(--pink)] hover:bg-[var(--secondary)] hover:text-[var(--pink)]"
            onClick={() => { closeNav(); cerrarSesion(); }}
          >
            Cerrar Sesion
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default HeaderClient