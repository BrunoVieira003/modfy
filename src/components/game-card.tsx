import { Game } from "@prisma/client"
import Link from "next/link"

interface GameCardProps{
    game: Game
}

export default function GameCard(props: GameCardProps){
    const { game } = props
    const thumbUrl = game.thumbUrl || "/images/no-image.svg"
    return (
        <Link href={`/games/${game.slug}`} key={game.id}>
            <div className="flex flex-col gap-2 w-64 p-5 border rounded-md hover:shadow-xl">
                <img src={thumbUrl} alt="game_cover" className="object-contain w-32 h-32 self-center"/>
                <h1 className="text-xl font-medium">{game.title}</h1>
                <div className="flex gap-2 items-center">
                    {game.plataforms.map(plataform =>
                        <span key={plataform} className="text-sm bg-slate-200 py-1 px-3 w-fit rounded-full">{plataform}</span>
                    )}
                </div>
                
            </div>
        </Link>
    )
}