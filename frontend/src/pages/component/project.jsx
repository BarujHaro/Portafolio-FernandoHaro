import { useTranslation } from "react-i18next";


export default function Project({ title, description, image, demoLink, codeLink }) {
    const {t} = useTranslation();

  return (
    <div className="flex flex-col justify-center text-center items-center gap-3">
        <img
            src={image}
            alt={`${title}`}
            className="w-[16rem] h-[8rem] md:w-[22rem] md:h-[12rem] rounded-lg justify-center"
        />

        <div className="text-lg gap-5">
            <h3 className="font-bold text-lg py-2">{title}</h3>
            <p className="px-3 break-words text-sm">{description}</p>
            <div className="flex gap-3 py-2 mx-2 justify-center">
                          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ADB5] px-3 py-1 rounded transition transform ease-in-out duration-300 hover:scale-105 text-[#EEEEEE] font-semibold uppercase shadow-sm hover:underline"
          >
            Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ADB5] px-3 py-1 rounded transition transform ease-in-out duration-300 hover:scale-105 text-[#EEEEEE] font-semibold uppercase shadow-sm hover:underline"
          >
           {t("Code")}
          </a>
            </div>
        </div>
        

        
    </div>
  );
}
