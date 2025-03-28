import ModItem from "@/components/mod-item";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface propsType{
    params: {game_slug: string}
}

export default async function GamePage({params}: propsType){
    const game = await prisma.game.findUnique({where: {slug: params.game_slug} })
    const imageUrl = game?.imageUrl || "/images/no-image.svg"

    return (
        <div className="flex flex-col gap-3">
            <Link href='/games' className="flex items-center gap-2 text-base font-medium hover:bg-slate-100 rounded-sm p-2 w-fit">
                <img src="/icons/return.svg" className="h-5 w-5" />
                <span>Go back to list</span>
            </Link>
            <div className="flex items-center gap-4 flex-wrap">
                <img src={imageUrl} alt="game_cover" className="object-contain h-32 w-32"/>
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-medium">{game?.title}</h1>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap sticky top-0 bg-white py-5">
                <select className="p-1 border rounded-md" defaultValue='all' name="plataform">
                    <option value="all">All categories</option>
                    <option value="plat1">UI</option>
                    <option value="plat2">Gameplay</option>
                    <option value="plat2">Graphics</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                {[1,2,3,4,5,6,7,8,9,0,10,11].map(item => <ModItem key={item} href={`/mod/${item}`}/>)}
            </div>
        </div>
    )
}