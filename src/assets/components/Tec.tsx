import { HtmlHTMLAttributes, ReactNode } from "react";

interface TecProps extends HtmlHTMLAttributes<HTMLDivElement> {
    title: string,
    icon: ReactNode
}

const Tec = ({ title, icon, ...rest }: TecProps) => {
    return (
        <div {...rest} className="flex flex-col justify-center items-center w-20 text-center">
            {icon}
            <span className="font-medium">{title}</span>
        </div>
    );
}
 
export default Tec;