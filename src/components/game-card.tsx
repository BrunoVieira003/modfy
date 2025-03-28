import { Game } from "@prisma/client"
import Link from "next/link"

interface GameCardProps{
    game: Game
}

export default function GameCard(props: GameCardProps){
    const { game } = props
    const imageUrl = game.imageUrl || "/images/no-image.svg"
    
    return (
        <Link href={`/games/${game.slug}`} key={game.id}>
            <div className="flex flex-col gap-2 w-64 p-5 border rounded-md hover:shadow-xl">
                <img src={imageUrl} alt="game_cover" className="object-contain w-32 h-32 self-center"/>
                <h1 className="text-xl font-medium">{game.title}</h1>
            </div>
        </Link>
    )
}