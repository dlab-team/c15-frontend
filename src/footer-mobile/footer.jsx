import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between py-2 lg:py-2 bg-[var(--secondary)] max-w-[100%]">
                <div className="flex flex-row ml-2 lg:ml-16 my-2 lg:my-4 h-[35%] lg:[h-40%]">
                <a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe" target="_blank" rel="noopener noreferrer" alt="ícono del correo">
                <FontAwesomeIcon icon={faEnvelope}  className=" text-[var(--primary)] h-[20px] lg:h-10 fa-2x" /> 
                </a>
                <p className=" text-lg ml-2 mt-2 font-extrabold text-[var(--primary)] hidden lg:block">Contacto</p>                
                </div>                  

                <div className='flex justify-center my-2 lg:my-7 h-[35%] lg:[h-45%]'>
                    <img src="/assets/img/image_logo.png" className="h-[20px] lg:h-7 " alt="logo de la empresa" />
                </div>

                <div className="flex justify-end gap-5 lg:gap-16 mx-8 lg:mx-16 my-2 lg:my-4">
                    <div className="h-[35%] lg:[h-40%]">
                        <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                        <FontAwesomeIcon icon={faSquareFacebook} className="text-[var(--primary)] h-[20px] lg:h-10 fa-2x "/>
                        </a>
                    </div>

                    <div className="h-[35%] lg:[h-40%]">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" alt="ícono de instagram">
                        <FontAwesomeIcon icon={faSquareInstagram} className="text-[var(--primary)] h-[20px] lg:h-10 fa-2x "/>
                        </a>
                    </div>

                    <div className="h-[35%] lg:[h-40%]">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" alt="ícono de linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className=" text-[var(--primary)] h-[20px] lg:h-10 fa-2x "/>
                        </a>
                    </div>
                </div>          
            </div>
            
          
        </footer>
    )
  }

export default Footer;
