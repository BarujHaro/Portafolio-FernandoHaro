import { useTranslation } from "react-i18next";

export default function DownloadCVButton(){
  const { t, i18n } = useTranslation();
 
  const cvPath = i18n.language === "es" ? "/cv/CV_es.pdf" : "/cv/CV_en.pdf"
  return(
    <a
        href={cvPath}
        download={`CV_Baruj_${i18n.language}.pdf`}
        >
        {t("Download_cv")}
    </a>
  );

}