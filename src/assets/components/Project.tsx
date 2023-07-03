import { HtmlHTMLAttributes } from "react";

interface ProjectProps extends HtmlHTMLAttributes<HTMLDivElement> {
    type: string,
    imgSrc: string,
    name: string,
    date: string,
    link: string
}

const Project = ({ type, imgSrc, name, date, link, ...rest }: ProjectProps) => {
    return (
        <div {...rest} className="relative w-[22rem] h-[21rem] rounded-3xl flex flex-col dark:bg-darkPastelViolet/20 bg-zinc-100 overflow-clip">
            <div className="absolute top-0 left-7 px-2 py-1 z-10 font-medium bg-pastelPink rounded-b-lg dark:text-white text-white">{type}</div>
            <a target="_blank" href={link} className="h-[70%] overflow-hidden flex justify-center items-center dark:bg-darkPastelViolet/30 bg-white">
                <img className="h-full object-cover hover:scale-110 transition-all" src={imgSrc} alt={name} />
            </a>
            <div className="h[30%] w-full p-5 flex flex-col gap-2">
                <a target="_blank" href={link} className="block text-2xl font-semibold hover:text-pastelPink transition-all">{name}</a>
                <span className="text-[14px] dark:text-violet-300/50 text-zinc-700 font-medium">{date} • <span className="font-semibold text-pastelPink">Jp Developer</span></span>
            </div>
        </div>
    );
}
 
export default Project;