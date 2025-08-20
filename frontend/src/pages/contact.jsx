import { useTranslation } from "react-i18next";
import {useState, useRef} from 'react';
import emailjs from "@emailjs/browser";
import Sended from "./component/sended";
//import descargarImg from './assets/img/descargar.png'
import enviarImg from './assets/img/enviar.png';

export default function Contact() {
    const [enviado, setEnviado] = useState(false);
    const {t} = useTranslation();
    const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();
 console.log("Form ref:", form.current);
    emailjs
      .sendForm( 
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEnviado(true);
          setTimeout(() => setEnviado(false, 3000));
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div className="flex flex-col items-center text-center w-full py-4">

{enviado && <Sended />}

        <h2 className="text-3xl font-bold text-[#00ADB5] m-5">{t("Contacto")}</h2>

      <div>
        <form 
        className="flex flex-col w-[22rem] md:w-[28rem] mx-auto space-y-6 gap-2 text-lg"
        ref={form} 
        onSubmit={sendEmail}>
          <div className="flex flex-col">
          <label  className="mb-1 text-[#393e46]">
            {t("Nombre")}
          </label>
          <input 
          type="text" 
          placeholder={t("Nombre")} 
          name="nameUser" 
          required
           className="border-b border-[#222831] focus:outline-none focus:border-[#00ADB5] px-1 py-2 bg-[#EEEEEE]"
          />
          </div>
          
          <div className="flex flex-col">
          <label className="mb-1 text-[#393e46]">
            E-mail
          </label>
          <input 
          type="email" 
          placeholder="E-mail"
          name="emailUser"
          required
          className="border-b border-[#222831] focus:outline-none focus:border-[#00ADB5] px-1 py-2 bg-[#EEEEEE]"
          />
          </div>
          
          <div className="flex flex-col">
          <label className="mb-1 text-[#393e46]">
            {t("Mensaje")}
          </label>
          <textarea 
            name="message"
            placeholder={t("Mensaje")}
            required
            className="border-b border-[#222831] focus:outline-none focus:border-[#00ADB5] px-1 py-2 bg-[#EEEEEE]"
          />
          
          </div>
          

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105 text-[#EEEEEE] font-semibold uppercase shadow-sm"
          >
            <img
              src={enviarImg}
              alt="Enviar"
              className="w-5 h-5 filter invert"
            />
            {t("Enviar")}
          </button>

        </form>
      </div>
        



    </div>
  );
}
