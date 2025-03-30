import { getGames } from "@/actions/game";
import GameCard from "@/components/game-card";
import LinkButton from "@/components/ui/link-button";

export default async function Games(){
    const games = await getGames()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Games</h1>
            <LinkButton href="/games/new" iconSrc="/icons/plus.svg">New game</LinkButton>
            <div className="flex gap-8 flex-wrap mt-8">
                {games.map(item => <GameCard key={item.id} game={item} />)}
            </div>
        </div>
    )
}