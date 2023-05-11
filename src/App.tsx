import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import calculateTime from "./assets/functions/calcTime";
import certificates from "./assets/certificates.json";

//icons
import { Tb3DCubeSphere } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { TfiMouse } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { BiCodeBlock } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { TbSettingsAutomation } from "react-icons/tb";
import { DiTerminal } from "react-icons/di";

//images
import photo1 from "./assets/images/photo1.png";
import photo2 from "./assets/images/photo2.png";

const App = () => {
    const [ nav, setNav ] = useState(false);
    const [ text, setText ] = useState("");
    const [ activeSection, setActiveSection ] = useState<"home" | "about" | "certificados" | "servicos" | "projetos" | "contato">("home");

    const hourRef = useRef<HTMLSpanElement>(null);
    const minuteRef = useRef<HTMLSpanElement>(null);
    const secondRef = useRef<HTMLSpanElement>(null);

    const write = (arg: string, i = 0) => {
        if (i < arg.length) {
            setText(arg.slice(0, i + 1));
            setTimeout(() => write(arg, i + 1), 100);
        }
    }

    useEffect(() => {
        setTimeout(() => write("FullStack Web Developer"));
        setInterval(() => {
            let { hours, minutes, seconds } = calculateTime();
            hourRef.current!.textContent = hours < 10 ? "0" + hours.toString() : hours.toString();
            minuteRef.current!.textContent = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
            secondRef.current!.textContent = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
        }, 1000);
    }, []);

    return (
        <main className="relative w-screen min-h-screen h-full bg-pastelViolet text-white">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-5559221a5/" target="_blank" className="z-10 fixed bottom-4 right-4 flex justify-center items-center animate-bounceLite rounded-lg overflow-hidden">
                <BsLinkedin className="z-30 text-4xl text-sky-600"/>
                <div className="absolute bg-white w-8 h-8"></div>
            </a>

            <header className="z-50 fixed top-0 left-0 w-full bg-pastelViolet p-4 md:px-8 flex justify-between items-center md:border-b md:border-b-zinc-600">
                <div className="flex gap-2 justify-center items-center">
                    <Tb3DCubeSphere className=" text-3xl sm:text-5xl"/>
                    <h1 className=" font-changa font-semibold sm:text-2xl">JP Developer</h1>
                </div>
                
                <div className="flex gap-2 justify-center items-center">
                    {!nav ? (
                        <RxHamburgerMenu onClick={() => setNav(!nav)} className="md:hidden text-2xl cursor-pointer"/>
                    ) : (
                        <IoClose onClick={() => setNav(!nav)} className="md:hidden text-2xl cursor-pointer"/>
                    )}
                    <nav className="hidden md:flex gap-3 lg:gap-5">
                            <Link
                                onClick={() => setActiveSection("home")}
                                to="home"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeSection === "home" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Home
                            </Link>

                            <Link 
                                onClick={() => setActiveSection("about")}
                                offset={-80}
                                to="about"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeSection === "about" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Sobre mim
                            </Link>

                            <Link
                                onClick={() => setActiveSection("servicos")}
                                offset={-80}
                                to="servicos"
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer ${activeSection === "servicos" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Serviços
                            </Link>

                            <Link 
                                onClick={() => setActiveSection("certificados")}
                                offset={-80} 
                                to="certificados" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer ${activeSection === "certificados" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Certificados
                            </Link>         

                            <Link 
                                onClick={() => setActiveSection("projetos")}
                                offset={-80} 
                                to="projetos" 
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer ${activeSection === "projetos" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Projetos
                            </Link>

                            <Link 
                                onClick={() => setActiveSection("contato")}
                                offset={-80} 
                                to="contato"
                                smooth={true} 
                                duration={500} 
                                className={`cursor-pointer ${activeSection === "contato" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                            >
                                Contato
                            </Link>
                    </nav>
                </div>
            </header>

            <nav className={`md:hidden z-40 fixed left-0 top-[62px] w-full flex flex-col items-end pr-5 py-3 gap-4 bg-pastelViolet transition-all duration-300 ${nav ? "" : " -translate-y-[15.5rem] sm:-translate-y-[14.4rem]"} border-b border-b-zinc-600`}>
                <Link 
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("home");
                    }}
                    to="home"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "home" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Home
                </Link>

                <Link 
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("about");
                    }}
                    offset={-80}
                    to="about"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "about" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Sobre mim
                </Link>

                <Link
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("servicos");
                    }}
                    offset={-80}
                    to="servicos"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "servicos" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Serviços
                </Link>
                
                <Link
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("certificados");
                    }}
                    offset={-80}
                    to="certificados"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "certificados" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Certificados
                </Link> 
                
                <Link
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("projetos");
                    }}
                    offset={-80}
                    to="projetos"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "projetos" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Projetos
                </Link>

                <Link
                    onClick={() => {
                        setNav(!nav);
                        setActiveSection("contato");
                    }}
                    offset={-80}
                    to="pontato"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeSection === "contato" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
                >
                    Contato
                </Link>
                
            </nav>

            <section id="home" className="relative h-screen flex flex-col justify-center items-center gap-7 p-2">
                <div className="flex flex-col items-center gap-3 w-2/3">
                    <img src={photo2} className="rounded-full border-4 border-darkPastelViolet max-w-[240px]"/>
                    <h1 className="text-3xl sm:text-5xl font-medium">João Pedro</h1>
                    <h3 className="text-lg">{text}</h3>
                    <Link to="Contato" smooth={true} duration={500} className="cursor-pointer bg-pastelPink hover:bg-darkPastelPink transition-all py-2 px-4 rounded-lg font-semibold mt-2">Contate-me</Link>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-darkPastelViolet rounded-lg flex flex-col justify-center items-center shadow-lg overflow-hidden transition-all">
                        <span ref={hourRef} className="mb-5 text-3xl sm:text-5xl">00</span>
                        <span className="absolute bottom-0 w-full bg-[#26243d] py-1 text-center text-sm sm:text-lg">Horas</span>
                    </div>

                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-darkPastelViolet rounded-lg flex flex-col justify-center items-center shadow-lg overflow-hidden transition-all">
                        <span ref={minuteRef} className="mb-5 text-3xl sm:text-5xl">00</span>
                        <span className="absolute bottom-0 w-full bg-[#26243d] py-1 text-center text-sm sm:text-lg">Minutos</span>
                    </div>

                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-darkPastelViolet rounded-lg flex flex-col justify-center items-center shadow-lg overflow-hidden transition-all">
                        <span ref={secondRef} className="mb-5 text-3xl sm:text-5xl">00</span>
                        <span className="absolute bottom-0 w-full bg-[#26243d] py-1 text-center text-sm sm:text-lg">Segundos</span>
                    </div>
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
                        <img src={photo1} className="rounded-full border-4 border-darkPastelViolet max-w-[160px]"/>

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
                                <a className="cursor-pointer bg-pastelPink hover:bg-darkPastelPink transition-all py-2 px-4 rounded-lg font-semibold mt-2 text-white" target="_blank" href="https://drive.google.com/file/d/11mCjwinsyl5CWQkssoiSoP0cjY8QgAJr/view" >Download CV</a>
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
                            <div className="flex flex-col justify-center items-center gap-3 rounded-3xl p-5 text-center bg-indigo-500 shadow-lg shadow-indigo-500/50 w-[19rem] h-[19rem]">
                                <SlScreenDesktop className="text-6xl"/>
                                <h2 className="text-xl font-semibold">Landing Pages</h2>
                                <p className="text-center font-medium">Desenvolvimento de landing pages completas e responsivas</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-3 rounded-3xl p-5 text-center bg-pastelYellow shadow-lg shadow-pastelYellow/50 w-[19rem] h-[19rem]">
                                <BiCodeBlock className="text-6xl"/>
                                <h2 className="text-xl font-semibold">Sistemas</h2>
                                <p className="text-center font-medium text-darkPastelViolet/80">Desenvolvimento de sistemas web ou desktop completos e responsivos</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-3 rounded-3xl p-5 text-center bg-pastelPink shadow-lg shadow-pastelPink/50 w-[19rem] h-[19rem]">
                                <TbSettingsAutomation className="text-6xl"/>
                                <h2 className="text-xl font-semibold">Automações</h2>
                                <p className="text-center font-medium">Automações completas de rotinas ou de softwares</p>
                            </div>
                        </div>
                        
                        <h2 className="flex justify-center items-center gap-4 text-3xl font-medium mt-5">Tecnologias <DiTerminal className="text-5xl"/></h2>
                        
                        <div className=" w-[90%] sm:w-full flex justify-center items-center flex-wrap gap-8 mt-4 bg-darkPastelViolet/40 p-5 rounded-3xl">
                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                <span className="font-medium">HTML</span>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                <span className="font-medium">CSS</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className=" rounded-2xl"/>
                                <span className="font-medium">Javascript</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <span className="font-medium">React</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <i className="devicon-nextjs-original-wordmark text-8xl"></i>
                                <span className="font-medium">Next.js</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                                <span className="font-medium">Tailwind CSS</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                <span className="font-medium">MongoDB</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                                <span className="font-medium">Google Cloud</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-20 text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                <span className="font-medium">Python</span>
                            </div>

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
                                <div key={index} className="flex flex-col items-center p-4 gap-4 bg-darkPastelViolet/40 rounded-xl shadow-lg max-w-[290px] max-h-[350px]">
                                    <a target="_blank" href={item.link} className="rounded-lg overflow-hidden">
                                        <img src={item.imageLink} alt="Certificate Image" className=" hover:scale-105 transition-all"/>
                                    </a>

                                    <h2 className="font-medium text-center">{item.name}</h2>

                                    <a href={item.link} target="_blank" className="px-4 py-2 bg-pastelPink hover:bg-darkPastelPink rounded-lg transition-all">Acessar</a>
                                </div>
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
                        Projetos aqui
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
                        Contato aqui
                    </main>
                </div>
            </section>

            <footer className="mt-10 bg-slate-600/60 p-5">
                <p className="text-center">© 2023 Desenvolvido por <a className=" font-semibold underline" href="https://jpdeveloper.vercel.app/">jpdeveloper</a></p>
            </footer>
        </main>
    );
}
 
export default App;