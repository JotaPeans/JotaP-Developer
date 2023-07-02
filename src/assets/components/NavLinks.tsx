import { Link } from "react-scroll";

interface NavLinksProps {
    nav: boolean
    setNav: React.Dispatch<React.SetStateAction<boolean>>,
    activeSection: "home" | "about" | "certificados" | "servicos" | "projetos" | "contato"
    setActiveSection: React.Dispatch<React.SetStateAction<"home" | "about" | "certificados" | "servicos" | "projetos" | "contato">>
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
                to="contato"
                smooth={true}
                duration={500}
                className={`cursor-pointer ${activeSection === "contato" ? "text-pastelYellow" : "text-white"} hover:text-pastelYellow transition-all font-semibold`}
            >
                Contato
            </Link>
        </>
    );
}
 
export default NavLinks;