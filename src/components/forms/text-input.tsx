import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function TextInput(props: TextInputProps){
    const {name, label} = props

    return (
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor={name}>{label}</label>
            <input className="p-3 bg-gray-700 rounded-md border-none outline-none focus:outline-indigo-800" type="text" {...props}/>
        </div>
    )
}