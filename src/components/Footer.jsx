const Footer = () => {
  return (
    <footer class="bg-[#EBEBEB]">
      <div class="container flex items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <div class="flex flex-row mx-7">
          <a
            href="mailto:contacto@lofwork.cl"
            class="mx-2"
            aria-label="mail"
            target="_blank"
            rel="noreferrer nopeener"
          >
            <img src="/assets/img/skill-icons_email.png" alt="" />
          </a>
          <p class="text-3xl ml-5 mr-9 pt-1 text-[#893685] font-bold">
            Contacto
          </p>
        </div>
        <a href="#">
          <img
            class="w-auto h-9 ml-9 pl-9 items-center"
            src="assets/img/logo-footer.png"
            alt=""
          />
        </a>
        <div class="flex mx-5 px-3">
          <a
            href="https://www.facebook.com/lofworkcl"
            class="mx-6 px-3"
            aria-label="facebook"
            target="_blank"
            rel="noreferrer nopeener"
          >
            <img src="/assets/img/skill-icons_facebook.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/lofwork/"
            class="mx-5 px-3"
            aria-label="instagram"
            target="_blank"
            rel="noreferrer nopeener"
          >
            <img src="/assets/img/skill-icons_instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/lofwork/"
            class="mx-5 px-3"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer nopeener"
          >
            <img src="/assets/img/skill-icons_linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
