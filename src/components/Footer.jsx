const Footer = () => {
    return (
        <footer className="bg-[#EBEBEB]">
            <div className="container flex items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <div className="flex flex-row mx-7">
                    <a href="#" className="mx-2" aria-label="mail" target="_blank" rel="noreferrer nopeener">
                        <img src="/assets/img/skill-icons_email.png" alt="" />
                    </a>
                    <p className="text-3xl ml-5 mr-9 pt-1 text-[#893685] font-bold">Contacto</p>
                </div>
                <a href="#">
                    <img className="w-auto h-9 ml-9 pl-9 items-center" src="assets/img/logo-footer.png" alt="" />
                </a>
                <div className="flex mx-5 px-3">
                    <a href="https://www.facebook.com/lofworkcl" className="mx-6 px-3" aria-label="facebook" target="_blank" rel="noreferrer nopeener">
                        <img src="/assets/img/skill-icons_facebook.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/lofwork/" className="mx-5 px-3" aria-label="instagram" target="_blank" rel="noreferrer nopeener">
                        <img src="/assets/img/skill-icons_instagram.png" alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/lofwork/" className="mx-5 px-3" aria-label="linkedin" target="_blank" rel="noreferrer nopeener">
                        <img src="/assets/img/skill-icons_linkedin.png" alt="linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;