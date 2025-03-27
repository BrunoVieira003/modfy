import GameCard from "@/components/game-card";
import { prisma } from "@/lib/prisma";

export default async function Games(){
    const games = await prisma.game.findMany()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-10">Games</h1>
            <div className="flex gap-8">
                {games.map(item => <GameCard game={item} />)}
            </div>
        </div>
    )
}