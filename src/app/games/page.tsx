import GameCard from "@/components/game-card";
import LinkButton from "@/components/ui/link-button";
import { prisma } from "@/lib/prisma";

export default async function Games(){
    const games = await prisma.game.findMany()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Games</h1>
            <LinkButton href="/games/new" iconSrc="/icons/plus.svg">New game</LinkButton>
            <div className="flex gap-8 flex-wrap mt-8">
                {games.map(item => <GameCard game={item} />)}
            </div>
        </div>
    )
}