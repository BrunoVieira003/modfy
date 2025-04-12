import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function FileInput(props: TextInputProps){
    const {name, label} = props

    return (
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor={name}>{label}</label>
            <input className="rounded-md border-none outline-none focus:outline-gray-500" type="file" {...props}/>
        </div>
    )
}