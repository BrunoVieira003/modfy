import { Mod } from "@prisma/client";
import Link from "next/link";

export default function ModItem(props: {mod: Mod}){
    const { mod } = props
    const imageUrl = mod.imageUrl || "/images/no-image.svg"
    return (
        <Link href={`/mod/${mod.id}`} className="p-3 border">
            <div className="flex gap-3 items-center mb-3">
                <img src={imageUrl} alt="" className="object-contain w-16 h-16 self-center rounded-md"/>
                <div>
                    <h1 className="text-xl font-medium" >{mod.name}</h1>
                    <h2 className="text-sm text-slate-500">by Author's name</h2>
                </div>
            </div>
            <div className="flex mt-2 gap-2 flex-wrap">
                <span className="text-sm border py-1 px-3 w-fit rounded-full text-nowrap">Category 1</span>
                <span className="text-sm border py-1 px-3 w-fit rounded-full text-nowrap">Category 2</span>
            </div>
        </Link>
    )
}