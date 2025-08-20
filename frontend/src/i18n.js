import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, Translation } from "react-i18next";

i18n
    .use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    lng: "es",
    resources: {
        es:{
            translation:{
                Saludo: "Bienvenido, soy",
                SobreMi: "Estudié ingeniería informática en CUCEI (Universidad de Guadalajara), he desarrollado varios proyectos que me han permitido aplicar mis concimientos, disfruto crear soluciones, explorar tecnologías y mejorar mis habilidades.",
                Habilidades: "Habilidades",
                Proyectos: "Proyectos",
                Contacto: "Contactame",
                Idiomas: "Idiomas",
                Lenguajes: "Lenguajes de programación",
                BD: "Bases de datos",
                Herramientas: "Herramientas",
                Espanol: "Español",
                Ingles: "Inglés",
                Download_cv: "Curriculum",
                Sobremi: "Sobre mi",
                Habilidades: "Habilidades",
                Proyectos: "Proyectos",
                Contacto: "Contacto",
                Nombre: "Nombre completo",
                Mensaje: "Mensaje",
                Enviar: "Enviar",
                Code: "Código",
                MensajeEnviado: "¡Mensaje enviado!",
                Proyecto1_Titulo: "App del clima",
                Proyecto1_des: "Aplicacion desarrollada en Javascript permite la visualizacion del clima a cualquier hora del día del país deseado",
                Proyecto2_Titulo: "Prediccion de negocio",
                Proyecto2_des: "Desarrollada en flask y python, usa un modelo de machine learning para predecir si un negocio entra en riesgo de bancarrota",
            },
        },
        en:{
            translation:{
                Saludo: "Welcome, I'm",
                SobreMi: "I studied Computer Engineering at CUCEI (University of Guadalajara), I've developed several projects that have allowed me to apply my knowledge, I enjoy creating solutions, exploring technologies, and improving my skills.",
                Habilidades: "Skills",
                Proyectos: "Projects",
                Idiomas: "Languages",
                Lenguajes: "Programming Languages",
                BD: "Databases",
                Herramientas: "Tools",
                Espanol: "Spanish",
                Ingles: "English",
                Download_cv: "Resume",
                Sobremi: "About me",
                Habilidades: "Skills",
                Proyectos: "Projects",
                Contacto: "Contact",
                Nombre: "Full name",
                Mensaje: "Message",
                Enviar: "Send",
                Code: "Code",
                MensajeEnviado: "Mail Sended!",
                Proyecto1_Titulo: "Weather App",
                Proyecto1_des: "A Javascript app that allows you to view the weather at any time of time of the desired country",
                Proyecto2_Titulo: "Business prediction",
                Proyecto2_des: "Developed in Flask and python, it uses a machine learning model to predict whether a business is at risk of bankruptcy",            
            },
        }
    }

})

