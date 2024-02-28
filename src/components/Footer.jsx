import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-[100%] max-h-[70px]">
      <div className="flex justify-between py-2 lg:py-2 bg-[var(--secondary)] ">
        <div className="flex flex-row pl-3 lg:pl-16 my-2 lg:my-4 h-[35%] lg:[h-40%] w-[20%] lg:w-[33%] ">
          <Link
            href="mailto:contacto@lofwork.cl"
            target="_blank"
            rel="noopener noreferrer"
            alt="ícono del correo"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className=" text-[var(--primary)] h-[30px] lg:h-10 fa-2x"
            />
          </Link>
          <p className=" text-lg ml-2 mt-2 font-extrabold text-[var(--primary)] hidden lg:block">
            Contacto
          </p>
        </div>

        <div className="flex justify-center my-2 lg:my-7 h-[35%] lg:[h-45%] lg:w-[33%]">
          <img
            src={Logo}
            className="h-[30px] lg:h-7 "
            alt="logo de la empresa"
          />
        </div>

        <div className="flex justify-center gap-5 pr-3 lg:gap-16 my-2 lg:my-4 lg:w-[33%]">
          <div className="h-[35%] lg:[h-40%]">
            <Link
              href="hhttps://www.facebook.com/lofworkcl"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícono de facebook"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="text-[var(--primary)] h-[30px] lg:h-10 fa-2x "
              />
            </Link>
          </div>

          <div className="h-[35%] lg:[h-40%]">
            <Link
              href="https://www.instagram.com/lofwork/"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícono de instagram"
            >
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="text-[var(--primary)] h-[30px] lg:h-10 fa-2x "
              />
            </Link>
          </div>

          <div className="h-[35%] lg:[h-40%]">
            <Link
              href="https://www.linkedin.com/company/lofwork/"
              target="_blank"
              rel="noopener noreferrer"
              alt="ícono de linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className=" text-[var(--primary)] h-[30px] lg:h-10 fa-2x "
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
