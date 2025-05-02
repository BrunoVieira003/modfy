import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface EmailInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function EmailInput(props: EmailInputProps){
    const {name, label} = props

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg" htmlFor={name}>{label}</label>
            <input className="p-1 text-md rounded-md border-2 outline-none focus:border-gray-500" type="email" {...props}/>
        </div>
    )
}