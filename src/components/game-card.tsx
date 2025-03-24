export default function GameCard(){
    return (
        <a href="/games/game">
            <div className="flex flex-col gap-2 w-64 p-5 border rounded-md hover:shadow-xl">
                <img src="/images/no-image.svg" alt="game_cover" className="w-full max-h-32"/>
                <h1 className="text-xl font-medium">Game name</h1>
                <span className="text-sm bg-slate-200 py-1 px-3 w-fit rounded-full">Plataform</span>
            </div>
        </a>
    )
}