import { ReactNode, HtmlHTMLAttributes } from "react";

interface ContactProps extends HtmlHTMLAttributes<HTMLDivElement> {
    title: string,
    icon: ReactNode,
    link: string
}

const Contact = ({ title, icon, link, ...rest }: ContactProps) => {
    return (
        <div {...rest} className="flex flex-col items-center p-4 px-8 gap-4 dark:bg-darkPastelViolet/40 dark:text-white text-white bg-zinc-100 rounded-xl shadow-lg max-w-[290px] max-h-[350px]">
            {icon}

            <h2 className="font-medium text-center dark:text-white text-zinc-700">{title}</h2>

            <a href={link} target="_blank" className="px-4 py-2 bg-pastelPink hover:bg-darkPastelPink rounded-lg transition-all">Acessar</a>
        </div>
    );
}
 
export default Contact;