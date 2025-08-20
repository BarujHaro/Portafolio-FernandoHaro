import { useTranslation } from "react-i18next";
import Skill from "./component/skill";


export default function Skills() {
    const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center my-[4rem]">
        <h2 className="text-3xl font-bold text-[#00ADB5] m-5" >{t("Habilidades")}</h2>
        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">{t("Idiomas")}</h3>
        <div
          className="flex gap-8 flex-wrap mb-4"
        >
          <Skill img={"/img/mexico.png"} name={t("Espanol")} />
          <Skill img={"/img/united-states.png"} name={t("Ingles")} />

        </div>
          
        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">{t("Lenguajes")}</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} name={"Javascript"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"} name={"Python"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"} name={"C"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"} name={"C++"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"} name={"C#"} />
        </div>

        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} name={"Html"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} name={"CSS"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"} name={"React"} />
        </div>
        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">Backend</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"} name={"Node.js"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"} name={"Flask"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"} name={"PHP"} />
       
        </div>
        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">{t("BD")}</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"} name={"Mysql"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"} name={"Postgresql"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"} name={"MongoDB"} />
        
        </div>

        <h3 className="text-2xl flex gap-8 flex-wrap font-semibold mb-5">{t("Herramientas")}</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"} name={"Git"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"} name={"Github"} />
          <Skill img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"} name={"Linux"} />
          
        </div>
  
          
    </div>
  );
}
