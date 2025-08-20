import DownloadCVButton from "./DownloadCV";

export default function Links() {
  return (
    <div className="py-5 w-full flex justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Íconos sociales */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/fernando-baruj-haro-salazar-7b2014323/"
            aria-label="Linkedin"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="Linkedin"
              className="w-[3rem] h-[3rem] transition transform ease-in-out duration-300 hover:scale-105"
            />
          </a>

          <a href="https://github.com/BarujHaro" aria-label="Github">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="Github"
              className="w-[3rem] h-[3rem] transition transform ease-in-out duration-300 hover:scale-105"
            />
          </a>

          <a href="https://x.com/FernandoHaroSal" aria-label="X">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
              alt="X"
              className="w-[3rem] h-[3rem] transition transform ease-in-out duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* Botón de descarga */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ADB5] rounded transition transform ease-in-out duration-300 hover:scale-105 text-[#EEEEEE] font-semibold uppercase shadow-sm">
          <img
            src="/img/descargar.png"
            alt="Descargar"
            className="w-5 h-5 filter invert"
          />
          <DownloadCVButton />
        </div>
      </div>
    </div>
  );
}
