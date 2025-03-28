import GameCard from "@/components/game-card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Games(){
    const games = await prisma.game.findMany()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Games</h1>
            <div className="flex items-center border rounded-md px-2 py-2 gap-2 w-fit mb-8 cursor-pointer hover:bg-slate-100">
                <img src="/icons/plus.svg" className="h-5 w-5" />
                <Link href='/games/new'>Add game</Link>
            </div>
            <div className="flex gap-8 flex-wrap">
                {games.map(item => <GameCard game={item} />)}
            </div>
        </div>
    )
}