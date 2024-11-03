import {HTMLProps} from "react";

export default function BodyBgComponent(props: HTMLProps<HTMLHtmlElement>) {
    return (
        <>
            <div className={`flex justify-center h-screen pt-2`}>
                <div className={`w-[500px] flex flex-col gap-4`}>
                    {props.children}
                </div>
            </div>
        </>
    )
}