import { ButtonHTMLAttributes } from "react";

interface ActionLinkProps{
    iconSrc?: string,
    action: string | ((formData: FormData) => void | Promise<void>) | undefined,
    text: string
}

export default function ActionButton(props: ActionLinkProps){
    const {iconSrc, text, action} = props

    return (
        <form className="flex items-center border rounded-md px-2 py-1 gap-2 w-fit cursor-pointer hover:bg-slate-100" action={action}>
            {iconSrc && <img src={iconSrc} className="h-5 w-5" />}
            <input type="submit" value={text} className="font-medium cursor-pointer"></input>
        </form>
    )
}