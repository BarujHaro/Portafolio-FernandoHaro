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
                SobreMi: "Ingeniero en Informática por la Universidad de Guadalajara, CUCEI.",
		SobreMi2: "Me apasiona crear soluciones innovadoras a través del código. Disfruto explorando nuevas tecnologías y enfrentando desafíos que me permitan mejorar constantemente mis habilidades.",
                SobreMi3: "En este portafolio podrán ver una muestra de los proyectos donde he aplicado estos conocimientos.",
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
                Proyecto1_des: "Aplicacion desarrollada en Javascript permite la visualizacion del clima a cualquier hora del día del país deseado.",
                Proyecto2_Titulo: "Predicción de negocio",
                Proyecto2_des: "Desarrollada en flask y python, usa un modelo de machine learning para predecir si un negocio entra en riesgo de bancarrota.",
                Proyecto3_Titulo: "Predicción de accidentes cerebrovasculares",
                Proyecto3_des: "Desarrollada en fastapi y python, usa un modelo de machine learning para obtener la probabilidad de sufrir accidentes cerebrovasculares.",
                Proyecto4_Titulo: "SparkUp - Educación y diagnóstico",
                Proyecto4_des: "Desarrollada con React, Node, Javascript, Python y Mysql, es un servicio web que permite aprender estrategicamente y permite realizar diagnosticos de negocios.",
                       
            },
        },
        en:{
            translation:{
                Saludo: "Welcome, I'm",
                SobreMi: "Computer Science Engineer from the University of Guadalajara, CUCEI",
		SobreMi2: "I'm passionate about creating innovative solutions through code. I enjoy exploring new technologies and facing challenges that will allow me to constantly improve my skills.",
		SobreMi3: "In this portfolio, you can see a sample of the projects where I apply this knowledge.",
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
                Proyecto1_des: "A Javascript app that allows you to view the weather at any time of time of the desired country.",
                Proyecto2_Titulo: "Business prediction",
                Proyecto2_des: "Developed in Flask and python, it uses a machine learning model to predict whether a business is at risk of bankruptcy.",            
                Proyecto3_Titulo: "Stroke Prediction",
                Proyecto3_des: "Developed in Fastapi and Python, it uses a machine learning model to obtain the probability of suffering a stroke.",
                Proyecto4_Titulo: "SparkUp - Education and diagnosis",
                Proyecto4_des: "Developed with React, Node, Javascript, Python and Mysql, it is a web service that enables strategic learning and allows users to perform business diagnostics.",
                                   
            },
        }
    }

})

