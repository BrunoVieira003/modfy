import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function PasswordInput(props: PasswordInputProps){
    const {name, label} = props

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg" htmlFor={name}>{label}</label>
            <input className="p-1 text-md rounded-md border-2 outline-none focus:border-gray-500" type="password" {...props}/>
        </div>
    )
}