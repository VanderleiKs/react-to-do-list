import {ButtonHTMLAttributes} from "react";

export default function ButtonBase({children, className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`p-2 rounded bg-amber-700 ${className}`} {...props}>
            {children}
        </button>
    )
}