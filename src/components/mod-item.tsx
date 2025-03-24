import Link from "next/link";

export default function ModItem(props: {href: string}){
    const { href } = props
    return (
        <Link href={href} className="p-3 border">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-medium" >Mod name</h1>
                <span className="text-sm bg-slate-200 py-1 px-3 w-fit rounded-full">v1.0.2</span>
            </div>
            <h2 className="text-sm text-slate-500">by Author's name</h2>
            <div className="flex mt-2 gap-2 flex-wrap">
                <span className="text-sm border py-1 px-3 w-fit rounded-full text-nowrap">Category 1</span>
                <span className="text-sm border py-1 px-3 w-fit rounded-full text-nowrap">Category 2</span>
            </div>
        </Link>
    )
}