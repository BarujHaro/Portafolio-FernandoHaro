import { useTranslation } from "react-i18next";
import Project from "./component/project";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prediccImg from './assets/img-pro/Prediccion.png';
import weatherImg from './assets/img-pro/weatherApp.png';

export default function Projects() {
    const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center text-center w-full my-[4rem]">

        <h2 className="text-3xl font-bold text-[#00ADB5] m-5">{t("Proyectos")}</h2>
        
 
 
 
      <div className="shadow-2xl px-4 py-3 w-[22rem] md:w-[28rem] rounded-lg relative">

        {/* Flechas de navegación */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-[calc(100%+6rem)] left-[-3rem] right-[-3rem] z-10">
          <button className="swiper-button-prev-custom text-[#00ADB5] text-4xl hover:text-[#00838a] transition-colors">&#10094;</button>
          <button className="swiper-button-next-custom text-[#00ADB5] text-4xl hover:text-[#00838a] transition-colors">&#10095;</button>
        </div>
  
  
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={100}
          slidesPerView={1}
              navigation={{
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }}
                              pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active'
                    }}
          loop={true}
        >

{/**<SwiperSlide>
<Project 
        title={"Weather App"} 
        description={"App to se the weather"} 
        image={"/img-pro/weatherApp.PNG"} 
        demoLink={"https://barujharo.github.io/Weather-app/"} 
        codeLink={"https://github.com/BarujHaro/Weather-app"}
        />
          </SwiperSlide> */}



{/**Proyecto 1 */}
          <SwiperSlide>
<Project 
        title={t("Proyecto1_Titulo")} 
        description={t("Proyecto1_des")} 
        image={weatherImg} 
        demoLink={"https://barujharo.github.io/Weather-app/"} 
        codeLink={"https://github.com/BarujHaro/Weather-app"}
        />
          </SwiperSlide>
          {/**Proyecto 2 */}
          <SwiperSlide>
<Project 
        title={t("Proyecto2_Titulo")} 
        description={t("Proyecto2_des")} 
        image={prediccImg} 
        demoLink={"https://proyecto-prediccion1.onrender.com/"} 
        codeLink={"https://github.com/BarujHaro/proyecto-prediccion"}
        />
          </SwiperSlide>


</Swiper>
<div className="custom-pagination flex justify-center mt-4"></div>
      </div>


    </div>
  );
}
