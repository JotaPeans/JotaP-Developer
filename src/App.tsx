/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

// json
import certificates from "./assets/certificates.json";
import tecs from "./assets/tecs.json"

// anim
// import darkModeToggle from "./assets/anim/darkModeToggle.json";

// icons
import { Tb3DCubeSphere } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TfiMouse } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { BiCodeBlock } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { TbSettingsAutomation } from "react-icons/tb";
import { DiTerminal } from "react-icons/di";
import { TiArrowUpThick } from "react-icons/ti";
import { BsSun, BsMoon } from "react-icons/bs";

// images
import photo1 from "./assets/images/photo1.png";
import photo2 from "./assets/images/photo2.png";
import lavateriapay from "./assets/images/lavateriapay.png";
import daymessages from "./assets/images/DAY preview.png";

// components
import NavLinks from "./assets/components/NavLinks";
import Services from "./assets/components/Services";
import Certificate from "./assets/components/Certificate";
import Project from "./assets/components/Project";
import Contact from "./assets/components/Contact";
import Tec from "./assets/components/Tec";
// import Lottie from "lottie-react"

const App = () => {
    const [ nav, setNav ] = useState(false);
    const [ text, setText ] = useState("");
    const [ activeSection, setActiveSection ] = useState<"home" | "about" | "certificados" | "servicos" | "projetos" | "contato">("home");
    const [ buttonToTop, setButtonToTop ] = useState(false);
    const [ mode, setMode ] = useState<"dark" | "light">("dark")

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const lottieref = useRef<any>(null);

    const [ html ] = document.getElementsByTagName("html");

    const write = (arg: string, i = 0) => {
        if (i < arg.length) {
            setText(arg.slice(0, i + 1));
            setTimeout(() => write(arg, i + 1), 100);
        }
    }

    function toggleDarkMode()  {
        mode === "dark" ? setMode("light") : setMode("dark");
        html.classList.toggle("dark");
    }

    useEffect(() => {
        setTimeout(() => write("FullStack Developer"));
    }, []);

    window.addEventListener("scroll", () => {
        if(window.scrollY+window.innerHeight >= document.body.offsetHeight - 50) setButtonToTop(true);
        else setButtonToTop(false);
    });

    return (
        <main className="relative w-screen min-h-screen h-full dark:bg-pastelViolet bg-slate-200 dark:text-white text-zinc-700 select-none transition-all">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-5559221a5/" target="_blank" className="z-10 fixed bottom-4 right-4 h-10 flex justify-center items-center animate-bounceLite overflow-hidden">
                <img className="h-full" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            </a>

            <header className="z-50 fixed top-0 left-0 w-full dark:bg-pastelViolet bg-slate-200 p-4 md:px-8 flex justify-between items-center md:border-b md:border-b-zinc-600 shadow-lg h-20">
                <div className="flex gap-2 justify-center items-center">
                    <Tb3DCubeSphere className=" text-3xl sm:text-5xl min-w-[2rem]"/>
                    <h1 className=" font-changa font-semibold sm:text-2xl min-w-[8rem]">JP Developer</h1>
                    <button onClick={toggleDarkMode}>
                        { mode === "dark" ? <BsMoon className="text-2xl"/> : <BsSun className="text-2xl"/> }
                    </button>
                </div>
                
                <div className="flex gap-2 justify-center items-center">
                    {!nav ? (
                        <RxHamburgerMenu onClick={() => setNav(!nav)} className="tablet:hidden text-2xl cursor-pointer"/>
                    ) : (
                        <IoClose onClick={() => setNav(!nav)} className="tablet:hidden text-2xl cursor-pointer"/>
                    )}
                    <nav className="hidden tablet:flex gap-3 lg:gap-5">
                        <NavLinks nav={nav} setNav={setNav} activeSection={activeSection} setActiveSection={setActiveSection}/>
                    </nav>
                </div>
            </header>
            <nav data-nav={nav} className="tablet:hidden z-40 fixed left-0 top-[62px] w-full flex flex-col items-end pr-5 py-3 gap-4 dark:bg-pastelViolet bg-slate-200 transition-all duration-300 data-[nav=true]:translate-y-[1rem] data-[nav=false]:-translate-y-[15.5rem] sm:data-[nav=false]:-translate-y-[14.4rem] sm:data-[nav=true]:translate-y-[1rem] border-b border-b-zinc-600">
                <NavLinks nav={nav} setNav={setNav} activeSection={activeSection} setActiveSection={setActiveSection}/>
            </nav>

            <section id="home" className="relative h-screen flex flex-col justify-center items-center gap-7 p-2">
                <div className="flex flex-col items-center gap-3 w-2/3">
                    <img src={photo2} className="rounded-full border-4 border-darkPastelViolet max-w-[240px]"/>
                    <h1 className="text-3xl sm:text-5xl font-medium">João Pedro</h1>
                    <h3 className="text-lg">{text}</h3>
                    <Link to="contato" smooth={true} duration={500} className="cursor-pointer bg-pastelPink hover:bg-darkPastelPink transition-all py-2 px-4 rounded-lg font-semibold mt-2 text-white">Contate-me</Link>
                </div>

                <div className="absolute bottom-8 flex flex-col gap-1 justify-center items-center">
                    <span className=" text-sm sm:text-base">Scroll Down</span>
                    <TfiMouse className="text-xl sm:text-3xl"/>
                </div>
            </section>

            <section id="about" className="flex flex-col md:items-center gap-8 p-2">
                <div className=" xl:w-[60%]">
                    <header className="relative flex items-center">
                        <CgMenuGridO className="text-5xl text-gray-500/30"/>
                        <h1 className="absolute left-5 top-4 font-semibold text-4xl">Sobre mim</h1>
                    </header>

                    <main className="flex flex-col lg:flex-row gap-5 justify-center items-center md:px-10 lg:gap-8 mt-10">
                        <img src={photo1} className="rounded-full border-4 border-darkPastelViolet max-w-[160px] hover:scale-105 transition-all"/>

                        <div className="rounded-xl bg-slate-50 min-w-[300px] w-[90%] text-pastelViolet p-6 shadow-lg">
                            <p className="text-justify font-normal mb-3">
                                Olá, meu nome é <span className="font-semibold text-darkPastelViolet">João Pedro</span> e tenho me dedicado a aprender e aprimorar minhas habilidades em diferentes linguagens e tecnologias desde que comecei a estudar há 2 anos. Atualmente estou cursando Bacharelado em Ciência da Computação no Centro Universitário de João Pessoa.
                            </p>
                            <p className="text-justify font-normal mb-3">
                                Minha experiência profissional inclui trabalhos em projetos de desenvolvimento web usando ferramentas como: React.js, node.js, express.js, Next.js, python, fastAPI, mongoDB e firebase. Eu também tenho conhecimento em metodologias ágeis e práticas de desenvolvimento, o que me permite trabalhar em equipe de forma eficaz e eficiente.
                            </p>
                            <p className="text-justify font-normal mb-5">
                                Além disso, adoro aprender coisas novas e experimentar tecnologias emergentes. Sempre estou buscando expandir meu conhecimento e aplicá-lo em meus projetos. Quando não estou programando, gosto de participar de eventos e comunidades de programadores para estar sempre atualizado sobre as novidades da área.
                            </p>

                            <div className="flex justify-center items-center">
                                <a className="cursor-pointer bg-pastelPink hover:bg-darkPastelPink transition-all py-2 px-4 rounded-lg font-semibold mt-2 text-white" target="_blank" href="https://drive.google.com/file/d/1FLZk2qcGwE3CnHeS2pnuLd_pzDfH3GmY/view?usp=sharing" >Download CV</a>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <section id="servicos" className="flex flex-col md:items-center gap-8 mt-10 p-2">
                <div className=" xl:w-[60%]">
                    <header className="relative flex items-center">
                        <CgMenuGridO className="text-5xl text-gray-500/30"/>
                        <h1 className="absolute left-5 top-4 font-semibold text-4xl">Serviços</h1>
                    </header>
                    
                    <main className="flex flex-col gap-4 justify-center items-center mt-10">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center">
                            <Services color="indigo" icon={SlScreenDesktop} title="Landing Pages" text="Desenvolvimento de landing pages completas e responsivas"/>
                            <Services color="yellow" icon={BiCodeBlock} title="Sistemas" text="Desenvolvimento de sistemas web ou desktop completos e responsivos"/>
                            <Services color="pink" icon={TbSettingsAutomation} title="Automações" text="Automações completas de rotinas ou de softwares"/>
                        </div>
                        
                        <h2 className="flex justify-center items-center gap-4 text-3xl font-medium mt-5">Tecnologias <DiTerminal className="text-5xl"/></h2>
                        
                        <div className=" w-[90%] sm:w-full flex justify-center items-center flex-wrap gap-8 mt-4 dark:bg-darkPastelViolet/40 bg-zinc-100 p-5 rounded-3xl">
                            {tecs.map((item, index) => (
                                <Tec 
                                    key={index} 
                                    title={item.title} 
                                    icon={item.title === "Next.js" ? <i className={item.icon}/> : <img src={item.icon} alt={item.title}/>}
                                />
                            ))}
                        </div>
                    </main>
                </div>
            </section>

            <section id="certificados" className="flex flex-col md:items-center gap-8 mt-10 p-2">
                <div className=" xl:w-[60%]">
                    <header className="relative flex items-center">
                        <CgMenuGridO className="text-5xl text-gray-500/30"/>
                        <h1 className="absolute left-5 top-4 font-semibold text-4xl">Certificados</h1>
                    </header>
                    
                    <main className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center mt-10">
                        {certificates.map((item, index) => {
                            return (
                                <Certificate key={index} href={item.link} img={item.imageLink} name={item.name}/>
                            )
                        })}
                    </main>
                </div>
            </section>

            <section id="projetos" className="flex flex-col md:items-center gap-8 mt-10 p-2">
                <div className=" xl:w-[60%]">
                    <header className="relative flex items-center">
                        <CgMenuGridO className="text-5xl text-gray-500/30"/>
                        <h1 className="absolute left-5 top-4 font-semibold text-4xl">Projetos</h1>
                    </header>
                    
                    <main className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center mt-10">
                        <Project link="https://laundrypay.com.br" name="Laundry Pay" date="10 de Maio de 2023" imgSrc={lavateriapay} type="Freelancer"/>
                        <Project link="https://day-messages.vercel.app" name="Day Messages" date="25 de fevereiro de 2023" imgSrc={daymessages} type="Pessoal"/>
                    </main>
                </div>
            </section>

            <section id="contato" className="flex flex-col md:items-center gap-8 mt-10 p-2">
                <div className=" xl:w-[60%]">
                    <header className="relative flex items-center">
                        <CgMenuGridO className="text-5xl text-gray-500/30"/>
                        <h1 className="absolute left-5 top-4 font-semibold text-4xl">Contato</h1>
                    </header>
                    
                    <main className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center mt-10">
                        <Contact
                            title="GitHub"
                            link="https://github.com/JotaPeans"
                            icon={<i className={`devicon-github-original text-8xl ${mode === "dark" ? "colored" : ""}`}/>}
                        />
                        <Contact 
                            title="Linkedin"
                            link="https://www.linkedin.com/in/jo%C3%A3o-pedro-5559221a5/"
                            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin"/>}
                        />
                        <Contact 
                            title="99 Freelas"
                            link="https://www.99freelas.com.br/user/joaopedro0202"
                            icon={<img className=" max-h-[95px] rounded-lg" src="https://play-lh.googleusercontent.com/yNBbWLb1_Te7UELDjx4OjKpkYcW79nklxeB-xJThgaN0hiXpIDs2hHt3P9XISi4fEjwH=w240-h480" alt="99 Freelas img"/>}
                        />
                    </main>
                </div>
            </section>

            <footer className="mt-10 dark:bg-slate-600/60 bg-zinc-100 p-14">
                <p className="text-center">© 2023 Desenvolvido por <a className=" font-semibold underline" href="https://jpdeveloper.vercel.app/">jpdeveloper</a></p>
            </footer>

            <Link 
                onClick={() => {
                    setNav(false);
                    setActiveSection("home");
                }}
                offset={-80}
                to="home"
                smooth={true}
                duration={500}
                data-totop={buttonToTop}
                className="data-[toTop=false]:opacity-0 data-[totop=false]:pointer-events-none fixed bottom-3 h-8 w-8 flex justify-center items-center left-1/2 -translate-x-1/2 rounded-full dark:bg-darkPastelViolet/50 bg-pastelViolet dark:text-white text-white p-1 dark:hover:bg-pastelPink hover:bg-pastelPink transition-all duration-300 cursor-pointer"
            >
                <TiArrowUpThick className="text-xl"/>
            </Link>
        </main>
    );
}
 
export default App;
