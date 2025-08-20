import { useTranslation } from "react-i18next";
import enCV from '../assets/cv/CV_en.pdf';
import esCV from '../assets/cv/CV_es.pdf';

export default function DownloadCVButton(){
  const { t, i18n } = useTranslation();
 
  const cvPath = i18n.language === "es" ? esCV : enCV;
  return(
    <a
        href={cvPath}
        download={`CV_Baruj_${i18n.language}.pdf`}
        >
        {t("Download_cv")}
    </a>
  );

}