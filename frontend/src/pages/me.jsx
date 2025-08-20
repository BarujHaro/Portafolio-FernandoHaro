import React from "react";
import { useTranslation } from "react-i18next";

function Me(){
    const {t} = useTranslation();


    return(
        <div className="flex flex-col items-center justify-center px-7 py-6 text-center gap-5">
            {/**Imagen mia aqui */}
            <div >
                {<img src="/img/Baruj.jpg" 
                alt="Baruj"
                className="w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] rounded-full transition transform ease-in-out duration-300 hover:scale-105 shadow-lg"
                />}
            </div>
            <div className="text-[1.5rem]">
                <div className="text-[2rem]">{t("Saludo")}</div>
                <div className="text-[2rem] text-[#00ADB5] font-bold">Fernando Baruj Haro Salazar</div>
                <div className="">
                    <p>{t("SobreMi")} </p>
                </div>
            </div>




        </div>
        
    );
}

export default Me;