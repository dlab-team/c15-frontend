import Email from "../assets/img/icons_email.png";
import Instagram from "../assets/img/icons_instagram.png";
import Facebook from "../assets/img/icons_facebook.png";
import Linkedin from "../assets/img/icons_linkedin.png";

import Logo from "../assets/img/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[var(--secondary)] w-[100%] flex items-center justify-between h-[50px] lg:h-[100px] absolute bottom-0">
      <div className="flex items-center w-[30%] lg:w-[33%] px-5">
        <a href="#">
          <img src={Email} className="w-[30px]" alt="" />
        </a>
        <p className="p-3 font-black text-xl text-[var(--primary)] hidden lg:block">
          Contacto
        </p>
      </div>
      <div className="w-[30%] lg:w-[33%] flex justify-center">
        <a href="#">
          <img className="w-[100px] lg:w-[200px]" src={Logo} alt="" />
        </a>
      </div>
      <div className="w-[40%] lg:w-[33%] flex items-center justify-end gap-2 px-3 lg:gap-5">
        <a href="#">
          <img src={Instagram} className="w-[30px]" alt="" />
        </a>
        <a href="#">
          <img src={Facebook} className="w-[30px]" alt="" />
        </a>
        <a href="#">
          <img src={Linkedin} className="w-[30px]" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;