import {useTranslation} from "react-i18next";
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from "lucide-react";
import DownloadCVButton from "./DownloadCV";
import { useState } from "react";

export default function Header() {

    const {t, i18n} = useTranslation();
   const [isOpen, setIsOpen] = useState(false);

    const toggleLang = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 w-screen h-20 flex flex-row justify-between shadow-md items-center bg-[#222831] text-[#EEEEEE] px-4 z-50">
   
    
       {/* Logo */}
      <ScrollLink
          to="Me"
          smooth={true} 
          duration={500}
          className="text-xl font-bold px-5 py-2 bg-[#00ADB5] rounded cursor-pointer transition transform ease-in-out duration-300 hover:scale-105"

        >
          Baruj
        </ScrollLink>


        <ul
          
  className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-semibold uppercase tracking-wide items-center"
    
         >

       

        <li className="whitespace-nowrap cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5] "><ScrollLink
          to="Me"
          smooth={true} 
          duration={500}
          offset={-80} 
          onClick={() => setIsOpen(false)}
        
        >
          {t("Sobremi")}
        </ScrollLink></li>

        <li className="cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5] "><ScrollLink
          to="Skills"
          smooth={true} 
          duration={500}
          offset={-80} 
        
        >
          {t("Habilidades")}
          
        </ScrollLink></li>

        <li className="cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5] "><ScrollLink
          to="Projects"
          smooth={true} 
          duration={500}
          offset={-80} 
          
        >
          {t("Proyectos")}
        </ScrollLink></li>

        <li className="cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5] "><ScrollLink
          to="Contact"
          smooth={true} 
          duration={500}

          offset={-80} 
        
        >
          {t("Contacto")}
        </ScrollLink></li>

        <li
        
        className="overflow-hidden "
        >
          <div
          className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105"
          >
        <img
            src="/img/descargar.png"
            alt="Descargar"
            className="w-5 h-5 filter invert"
        />
          <DownloadCVButton />
          </div>

        </li>

        <li
        
        className="overflow-hidden "
        >
          <div
          className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105"
          >
          <img
            src="/img/traducir.png"
            alt="Traducir"
            className="w-5 h-5 filter invert"
        />
        <button onClick={toggleLang}>
        {i18n.language === "en" ? "ESPAÑOL" : "ENGLISH"}
      </button>
       </div>
        </li>
        
      </ul>

    

            {/* Mobile Navigation - hamburger menu */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu - appears when isOpen is true */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#222831] shadow-md py-4 px-4 flex flex-col items-center gap-4">
                    <ScrollLink
                        to="Me"
                        smooth={true} 
                        duration={500}
                        offset={-80} 
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold uppercase tracking-wide cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5]"
                    >
                        {t("Sobremi")}
                    </ScrollLink>

                    <ScrollLink
                        to="Skills"
                        smooth={true} 
                        duration={500}
                        offset={-80} 
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold uppercase tracking-wide cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5]"
                    >
                        {t("Habilidades")}
                    </ScrollLink>

                    <ScrollLink
                        to="Projects"
                        smooth={true} 
                        duration={500}
                        offset={-80} 
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold uppercase tracking-wide cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5]"
                    >
                        {t("Proyectos")}
                    </ScrollLink>

                    <ScrollLink
                        to="Contact"
                        smooth={true} 
                        duration={500}
                        offset={-80} 
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold uppercase tracking-wide cursor-pointer transition transform ease-in-out duration-300 hover:scale-110 hover:text-[#00ADB5]"
                    >
                        {t("Contacto")}
                    </ScrollLink>

                    <div className="flex gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105">
                            <img
                                src="/img/descargar.png"
                                alt="Descargar"
                                className="w-5 h-5 filter invert"
                            />
                            <DownloadCVButton onClick={() => setIsOpen(false)} />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105">
                            <img
                                src="/img/traducir.png"
                                alt="Traducir"
                                className="w-5 h-5 filter invert"
                            />
                            <button onClick={() => {
                                toggleLang();
                                setIsOpen(false);
                            }}>
                                {i18n.language === "en" ? "ESPAÑOL" : "ENGLISH"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}