import { useTranslation } from "react-i18next";

export default function Sended() {
   const {t} = useTranslation();

  return (
    <div className="fixed inset-0 bg-[#D6D6D6]/80 z-40 flex items-center justify-center">
        <div className="px-11 py-7 fixed left-1/2 top-1/2 transform -translate-x-1/2  shadow-xl rounded-xl bg-[#EEEEEE]">
            <div className="  bg-[#00ADB5] text-[#EEEEEE] font-semibold uppercase  px-6 py-2 rounded shadow-lg z-50">
            <p>{t("MensajeEnviado")}</p>
            </div>

        </div>
    </div>
    

  );
}