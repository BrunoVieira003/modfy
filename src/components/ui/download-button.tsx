import { ReactNode } from "react"

interface DownloadButtonProps{
    children?: ReactNode,
    href: string
}

export default function DownloadButton(props: DownloadButtonProps){
    const {children, href} = props
    return (
        <button>
            <a href={href} download>
                <img src="/icons/download.svg" className="h-6 w-6" />
                {children}
            </a>
        </button>
    )
}