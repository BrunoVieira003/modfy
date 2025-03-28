import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function UrlInput(props: TextInputProps){
    const {name, label} = props

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg" htmlFor={name}>{label}</label>
            <div className="flex items-center">
                <span className="p-1 px-2 text-md rounded-s-md border-2 border-e-0 outline-none">URL</span>
                <input className="p-1 text-md rounded-e-md border-2 outline-none focus:border-gray-500 w-full" type="text" {...props}/>
            </div>
        </div>
    )
}