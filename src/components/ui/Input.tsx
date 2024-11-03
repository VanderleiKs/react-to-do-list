import {InputHTMLAttributes} from "react";

export default function Input({className, ...props}: InputHTMLAttributes<HTMLInputElement>) {
    return <input className={`bg-amber-50 rounded p-2 text-gray-800 ${className}`} {...props} />
}