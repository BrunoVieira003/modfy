import { InputHTMLAttributes } from "react";

type removedAttributes = "className" | "type"

interface TextareaInput extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, removedAttributes> {
    label: string
    resizable?: boolean
}


export default function TextareaInput(props: TextareaInput){
    const {name, label, resizable} = props

    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg" htmlFor={name}>{label}</label>
            <textarea
            className="min-h-60 p-1 text-md rounded-md border-2 outline-none focus:border-gray-500 resize-none data-[resizable=true]:resize-y"
            data-resizable={ !!resizable }
            {...props}/>
        </div>
    )
}