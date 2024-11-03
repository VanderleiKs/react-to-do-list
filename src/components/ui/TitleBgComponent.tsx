import {HTMLProps} from "react";

export default function TitleBgComponent(props: HTMLProps<HTMLHtmlElement>) {
    return (
        <div className={`text-amber-500 font-bold text-4xl text-center`}>{props.children}</div>
    )
}