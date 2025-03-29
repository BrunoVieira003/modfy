'use client'
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

type removedAttributes = "className" | "type"

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, removedAttributes> {
    label: string
}


export default function ImageUrlInput(props: TextInputProps){
    const {name, label} = props
    const [imageUrl, setImageUrl] = useState<string | null>(props.defaultValue ? String(props.defaultValue): null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImageUrl(String(e.currentTarget.value))
        if(props.onChange){
            props.onChange(e)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="text-lg" htmlFor={name}>{label}</label>
            <div className="flex items-center">
                <span className="p-1 px-2 text-md rounded-s-md border-2 border-e-0 outline-none">URL</span>
                <input className="p-1 text-md rounded-e-md border-2 outline-none focus:border-gray-500 w-full" type="text" {...props} value={imageUrl || ""} onChange={handleChange}/>
            </div>
            {imageUrl && <img src={imageUrl} className="h-32 w-32"/>}
        </div>
    )
}