import { HtmlHTMLAttributes } from "react";

interface CertificateProps extends HtmlHTMLAttributes<HTMLDivElement> {
    img: string,
    href: string,
    name: string
}

const Certificate = ({ href, img, name, ...rest }: CertificateProps) => {
    return (
        <div {...rest} className="flex flex-col items-center p-4 gap-4 dark:bg-darkPastelViolet/40 bg-zinc-100 rounded-xl shadow-lg max-w-[290px] max-h-[350px]">
            <a target="_blank" href={href} className="rounded-lg overflow-hidden">
                <img src={img} alt="Certificate Image" className=" hover:scale-105 transition-all"/>
            </a>

            <h2 className="font-medium text-center">{name}</h2>

            <a href={href} target="_blank" className="px-4 py-2 bg-pastelPink hover:bg-darkPastelPink rounded-lg transition-all">Acessar</a>
        </div>
    );
}
 
export default Certificate;