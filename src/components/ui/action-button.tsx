'use client'

interface ActionLinkProps{
    iconSrc?: string,
    action: () => Promise<void>,
    text?: string
}

export default function ActionButton(props: ActionLinkProps){
    const {iconSrc, text, action} = props

    const handleClick = async () => {
        await action()
    }

    return (
        <button 
        className="inline-flex items-center border rounded-md px-2 py-1 gap-2 cursor-pointer hover:bg-slate-100 font-medium"
        onClick={handleClick}>
            {iconSrc && <img src={iconSrc} className="h-5 w-5" />}
            {text}
        </button>
    )
}