import Header from "./component/header";
import Me from "./me";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Links from "./component/links";

function Home(){
    return(
        <>
        <Header />
         <div className="pt-24">
            <section id="Me" >
                <Me />
            </section>
            
            <section id="Skills">
                <Skills />
            </section>
             
            <section id="Projects">
                <Projects />
            </section>
            
            <section id="Contact">
                <Contact/>
            </section>
            
                <Links />
        

        </div>
        
            
        
        </>

    );
}

export default Home;