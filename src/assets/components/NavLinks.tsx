import { Link } from "react-scroll";

interface NavLinksProps {
    nav: boolean
    setNav: React.Dispatch<React.SetStateAction<boolean>>,
    activeSection: "home" | "about" | "certificados" | "tecnologias" | "projetos" | "contato"
    setActiveSection: React.Dispatch<React.SetStateAction<"home" | "about" | "certificados" | "tecnologias" | "projetos" | "contato">>
}

const NavLinks = ({ nav, setNav, activeSection, setActiveSection }: NavLinksProps) => {
    return (
        <>
            <Link 
                onClick={() => {
                    setNav(!nav);
                    setActiveSection("home");
                }}
                to="home"
                smooth={true}
                duration={500}
                className={`cursor-pointer ${activeSection === "home" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
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
                className={`cursor-pointer ${activeSection === "about" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
            >
                Sobre mim
            </Link>

            <Link
                onClick={() => {
                    setNav(!nav);
                    setActiveSection("tecnologias");
                }}
                offset={-80}
                to="tecnologias"
                smooth={true}
                duration={500}
                className={`cursor-pointer ${activeSection === "tecnologias" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
            >
                Tecnologias
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
                className={`cursor-pointer ${activeSection === "certificados" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
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
                className={`cursor-pointer ${activeSection === "projetos" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
            >
                Projetos
            </Link>

            <Link
                onClick={() => {
                    setNav(!nav);
                    setActiveSection("contato");
                }}
                offset={-80}
                to="contato"
                smooth={true}
                duration={500}
                className={`cursor-pointer ${activeSection === "contato" ? "dark:text-pastelYellow text-indigo-500" : "dark:text-white"} hover:dark:text-pastelYellow transition-all font-semibold`}
            >
                Contato
            </Link>
        </>
    );
}
 
export default NavLinks;