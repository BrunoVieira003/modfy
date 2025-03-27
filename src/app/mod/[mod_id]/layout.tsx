import { ReactNode } from "react";

export default function ModLayout({children}:{children: ReactNode}){
    return (
        <div>
            <h1 className="text-4xl font-bold">Mod name</h1>
            <span className="text-sm text-slate-400">Game name</span>
            <h2 className="text-xl mt-2">by Author name</h2>
            {children}
        </div>
    )
}