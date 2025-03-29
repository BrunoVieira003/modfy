import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ActionLinkProps extends Omit<LinkProps, 'className'>{
    children?: ReactNode,
    iconSrc?: string
}

export default function LinkButton(props: ActionLinkProps){
    const {children, iconSrc} = props

    return (
        <div className="flex items-center border rounded-md px-2 py-1 gap-2 w-fit cursor-pointer hover:bg-slate-100">
            {iconSrc && <img src={iconSrc} className="h-5 w-5" />}
            <Link className="font-medium" {...props}>{children}</Link>
        </div>
    )
}