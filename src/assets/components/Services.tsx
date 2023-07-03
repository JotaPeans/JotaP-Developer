import { ElementType, HtmlHTMLAttributes } from "react";

interface ServicesProps extends HtmlHTMLAttributes<HTMLDivElement> {
    icon: ElementType,
    title: string,
    text: string
    color: "indigo" | "yellow" | "pink"
}

const Services = ({ icon: Icon, title, text, color, ...rest }: ServicesProps) => {
    return (
        <div data-color={color} {...rest}
            className="flex flex-col justify-center items-center gap-3 rounded-3xl p-5 text-center data-[color='yellow']:text-zinc-700 data-[color='indigo']:bg-indigo-500 data-[color='yellow']:bg-pastelYellow data-[color='pink']:bg-pastelPink shadow-lg data-[color='indigo']:shadow-indigo-500/50 data-[color='yellow']:shadow-pastelYellow/50 data-[color='pink']:shadow-pastelPink/50 w-[19rem] h-[19rem] hover:-translate-y-2 transition-all duration-300 data-[color='yellow']:dark:text-zinc-700 text-white"
        >
            <Icon className="text-6xl"/>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p data-color={color} className="text-center font-medium data-[color='yellow']:font-semibold">{text}</p>
        </div>
    );
}
 
export default Services;